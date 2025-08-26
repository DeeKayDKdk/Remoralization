/* ===== tiny view router ===== */
const $ = (sel, ctx=document) => ctx.querySelector(sel);
const $$ = (sel, ctx=document) => [...ctx.querySelectorAll(sel)];
const app = $("#app");

const state = {
view: location.hash.replace("#","") || "form",
form: JSON.parse(localStorage.getItem("orm-report") || "{}")
};

window.addEventListener("hashchange", () => {
state.view = location.hash.replace("#","") || "form";
render();
});

document.addEventListener("DOMContentLoaded", () => {
try {
// Only update if #year exists
const yearEl = document.getElementById("year");
if (yearEl) {
yearEl.textContent = new Date().getFullYear();
}

// Run your app
render();
} catch (err) {
console.error("Startup error:", err);
document.body.innerHTML = `
<main style="max-width:720px;margin:40px auto;padding:24px;color:#b00020;">
<h1>App failed to load</h1>
<pre>${String(err)}</pre>
</main>
`;
}
});

/* ===== utilities ===== */
function toast(msg){
const t = $("#toast");
t.textContent = msg;
t.classList.add("show");
setTimeout(()=> t.classList.remove("show"), 2400);
}

function saveForm(){
localStorage.setItem("orm-report", JSON.stringify(state.form));
}

function inputBind(id, opts={}){
const {placeholder="", type="text"} = opts;
const v = state.form[id] ?? "";
return `
<input class="input" id="${id}" name="${id}" value="${escapeHtml(v)}"
type="${type}" placeholder="${placeholder}" />
`;
}

function textareaBind(id, placeholder=""){
const v = state.form[id] ?? "";
return `<textarea id="${id}" class="" placeholder="${placeholder}">${escapeHtml(v)}</textarea>`;
}

function escapeHtml(str){
return String(str || "").replace(/[&<>'"]/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[s]));
}

function deltaBodyFat(last, current){
const a = parseFloat(last), b = parseFloat(current);
if(Number.isFinite(a) && Number.isFinite(b)){
const d = +(b - a).toFixed(1);
const sign = d > 0 ? "+" : "";
const cls = d < 0 ? "negative" : d > 0 ? "positive" : "";
return `<span class="delta ${cls}">${sign}${d}%</span> since last period`;
}
return `<span class="badge">Enter last + current to see Δ</span>`;
}

/* ===== views ===== */
function render(){
const v = state.view;
if(v === "how"){ renderHow(); return; }
if(v === "why"){ renderWhy(); return; }
if(v === "checkout"){ renderCheckout(); return; }
renderForm();
wireUpInputs();
}

function renderHero(){
return `
<section class="main-hero">
<h1 class="h1">A call to adventure.</h1>
<p class="subtitle">
Build discipline, uphold values, and report your progress every two weeks — with a real human holding you accountable.
</p>
<div class="actions">
<a class="btn btn-primary" href="#checkout">Join for $10/month</a>
<a class="btn btn-ghost" href="#how">See How It Works</a>
<a class="btn btn-ghost" href="#why">See Why It Works</a> 
</div>

</section>`;
}

function renderForm(){
// Hero + “Six Pillars” info cards (no inputs)
app.innerHTML = `
${renderHero()}

<div class="section-title">
<h2>The Six Pillars</h2>
<div class="badge">Accountability-based growth</div>
</div>

<section class="container grid">
${howCard("Physical Discipline", [
"Discipline made visible through physical form.",
"A strong, healthy body reflects order, resilience, and gratitude.",
"Purpose: To extend vitality and serve with energy, courage, and presence."
])}

${howCard("Responsibility to Others", [
"Duty binds the individual to family, community, and nation.",
"Responsibility creates trust, stability, and purpose beyond self.",
"Purpose: To be a protector, provider, and contributor, not a burden."
])}

${howCard("Belief & Morality", [
"Morality gives direction, stability, and higher meaning.",
"A shared belief system builds trust, law, and civilization.",
"Purpose: To align daily action with timeless truth and the transcendent."
])}

${howCard("Skill & Mastery", [
"Skill transforms potential into value; mastery creates legacy.",
"Competence earns respect, independence, and authority.",
"Purpose: To refine talent into contribution that uplifts others."
])}

${howCard("Self-Reliance", [
"Independence guards freedom and preserves dignity.",
"Reliance on oneself builds resilience in hardship and strength in crisis.",
"Purpose: To ensure each person is a pillar, not a liability, in civilization."
])}

${howCard("Integrity & Consistency", [
"Integrity unites word and deed; consistency compounds virtue into legacy.",
"Trust, leadership, and stability flow from steady, honest action.",
"Purpose: To live by principle daily, protecting against corruption and collapse."
])}
</section>
`;
}

function renderHow(){
app.innerHTML = `
<section class="main-hero">
<h1 class="h1">How It Works</h1>
<p class="subtitle">Every two weeks you report against six pillars. A real human reads, replies, and holds you to your own standards.</p>
<div class="actions">
<a class="btn" href="#">Back to Form</a>
<a class="btn btn-primary" href="#checkout">Join for $10/month</a>
</div>
</section>

<section class="container grid">
${howCard("Physical Discipline",[
"Train 4+ sessions per week (strength + conditioning)",
"Target body fat: under 25% (progress measured bi-weekly)",
"Prioritize sleep (7–9 hrs) and whole-food nutrition"
])}
${howCard("Responsibility to Others",[
"One deliberate act of service every 2 weeks",
"Proactive check-ins with family/mentee",
"Resolve one lingering conflict or deliver a promise"
])}
${howCard("Belief System & Morality",[
"Define a simple creed (3–5 lines) and review weekly",
"Choose principle over comfort at least once",
"Daily reflection: journal / prayer / meditation"
])}
${howCard("Skill & Mastery",[
"Pick 1 main pursuit; commit to a bi-weekly hour target",
"Ship 1 measurable output (demo, draft, PR, set, piece)",
"Seek deliberate practice: feedback + iteration"
])}
${howCard("Self-Reliance",[
"Positive cash flow; save/invest each period",
"Replace one outsourced habit with self-sufficiency",
"Learn a practical skill (repairs, budgeting, cooking)"
])}
${howCard("Integrity & Consistency",[
"Track every commitment; make fewer promises",
"Maintain a streak log (no-zero days)",
"Own misses; write a one-line corrective step"
])}
</section>

<div class="section-title">
<h2>Your Cadence</h2>
</div>
<section class="container">
<table class="table">
<thead><tr><th>Step</th><th>What happens</th></tr></thead>
<tbody>
<tr><td>1. Sign up</td><td>Create your account and choose your standards.</td></tr>
<tr><td>2. Report</td><td>Submit a bi-weekly report against the six pillars.</td></tr>
<tr><td>3. Human reply</td><td>Receive a personal response within 48 hours.</td></tr>
<tr><td>4. Track</td><td>Maintain streaks and measure progress over time.</td></tr>
</tbody>
</table>
<div class="actions" style="margin-top:16px">
<a class="btn" href="#">Start Your First Report</a>
</div>
</section>
`;
}
/* ========= WHY PAGE ========= */

const WHY_ITEMS = [
{ p: "57% of Americans feel lonely",
s: "🌍 <b>Responsibility to Others</b> — service, check-ins, and accountability rebuild connection." },
{ p: "58% of young adults report little or no purpose",
s: "📖 <b>Belief & Morality</b> — anchor life in chosen principles; align actions with values." },
{ p: "Purpose improves mental health (less stress & depression)",
s: "🎯 <b>Skill & Mastery</b> — pick one pursuit, commit to practice, track progress." },
{ p: "Only 44% are “very satisfied” with life (Gallup)",
s: "🕰️ <b>Integrity & Consistency</b> — track commitments & streaks; small wins compound." },
{ p: "90% of Gen Z & millennials say purpose is essential",
s: "📖 + 🎯 <b>Belief & Morality</b> + <b>Skill & Mastery</b> — define values; pursue mastery; align career & life." },
{ p: "85% of Gen Z (AU) report burnout",
s: "💪 <b>Physical Discipline</b> — train, eat clean, sleep; build energy & resilience." },
{ p: "Strong relationships predict happiness & longevity (Harvard study)",
s: "🌍 <b>Responsibility to Others</b> — accountability & service forge deep bonds." },
{ p: "Life transitions often erase routine (retirees, young adults)",
s: "🕰️ <b>Integrity & Consistency</b> — bi-weekly cadence + feedback restore rhythm." },
{ p: "Existential depression rising (lack of direction)",
s: "📖 + 🎯 <b>Belief & Morality</b> + <b>Skill & Mastery</b> — values + skill-building replace emptiness with growth." },
{ p: "Americans read for fun 40% less than 20 years ago",
s: "🔧 <b>Self-Reliance</b> — replace passive consumption with practical skills & independence." }
];

function renderWhy(){
app.innerHTML = `
<section class="main-hero">
<h1 class="h3">See Why It Works</h1>
<p class="subtitle">Modern life leaves people lonely, burnt out, and without purpose. The <b>6 Pillars</b> directly target the biggest problems.</p>
<div class="actions">
<a class="btn" href="#"><b>Back</b></a>
<a class="btn btn-primary" href="#checkout"><b>Join for $10/month</b></a>
</div>
</section>

<section class="container">
<h2 class="section-title">Problems → Pillar Solutions</h2>
<table class="table">
<thead><tr><th>Problem (Data)</th><th>Pillar Solution</th></tr></thead>
<tbody>
${WHY_ITEMS.map(x => `
<tr>
<td><b>${x.p}</b></td>
<td>${x.s}</td>
</tr>
`).join("")}
</tbody>
</table>
</section>
`;
}

function howCard(title, bullets){
return `
<article class="card">
<h3>${title}</h3>
<ul class="hint" style="margin:6px 0 0 18px">
${bullets.map(b => `<li>${b}</li>`).join("")}
</ul>
</article>
`;
}
function renderCheckout(){
app.innerHTML = `
<section class="main-hero">
<h1 class="brand-title">Join Operation Remoralization ($10/month)</h1>
<p>Your subscription is processed securely by Stripe.</p>

<p style="margin-top:16px;">
<a class="btn btn-primary" href="https://buy.stripe.com/28EaEXtEYcY3hk58fmb0400">
Join for $10/month
</a>
</p>

<p style="margin-top:24px;"><a class="btn" href="#">Back</a></p>
</section>
`;
}
/* ===== wire up inputs and submission ===== */
function wireUpInputs(){
// bind all inputs + textareas to state
$$("input, textarea", app).forEach(el => {
el.addEventListener("input", e => {
const {id, value} = e.target;
state.form[id] = value;
saveForm();

if(id === "lastBf" || id === "currentBf"){
$("#deltaSlot").innerHTML = deltaBodyFat(state.form.lastBf, state.form.currentBf);
}
});
});

const submit = $("#submitBtn");
if(submit){
submit.addEventListener("click", () => {
// naive required check: at least one pillar filled
const anyText = ["physical","others","morality","mastery","selfReliance","integrity","reflection","general"]
.some(k => (state.form[k]||"").trim().length > 0);
if(!anyText){
toast("Write something in at least one section before submitting.");
return;
}

// store a simple “submission” history locally
const history = JSON.parse(localStorage.getItem("orm-history") || "[]");
history.push({...state.form, submittedAt: new Date().toISOString()});
localStorage.setItem("orm-history", JSON.stringify(history));

toast("Report submitted! You’ll receive a human response within 48 hours.");
});
}
}
