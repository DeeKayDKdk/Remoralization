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
$("#year").textContent = new Date().getFullYear();
render();
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
</div>
</section>`;
}

function renderForm(){
app.innerHTML = `
${renderHero()}
<div class="section-title">
<h2>Submit Your Bi-Weekly Report</h2>
<div class="badge">Human review within 48 hours</div>
</div>

<section class="container">
<div class="row" style="margin-bottom:10px">
<div style="flex:1; min-width:220px">${inputBind("name",{placeholder:"Your Name (optional)"})}</div>
<div style="flex:1; min-width:220px">${inputBind("period",{placeholder:"Period covered (e.g., Aug 1–15)"})}</div>
</div>

<div class="grid">
<article class="card">
<h3>Physical Discipline</h3>
<p class="hint">What did you do to maintain or improve your body during this period?</p>
<div class="row">
<div style="flex:1; min-width:160px">${inputBind("lastBf",{placeholder:"Last Body Fat %", type:"number"})}</div>
<div style="flex:1; min-width:160px">${inputBind("currentBf",{placeholder:"Current Body Fat %", type:"number"})}</div>
<div style="flex:1; min-width:160px">${inputBind("avgSleep",{placeholder:"Average Sleep (hrs/night)", type:"number"})}</div>
</div>
<div class="notice" id="deltaSlot">${deltaBodyFat(state.form.lastBf, state.form.currentBf)}</div>
${textareaBind("physical","Workouts, weight change, diet discipline...")}
</article>

<article class="card">
<h3>Responsibility to Others</h3>
<p class="hint">How did you take care of, support, or serve others during this period?</p>
${textareaBind("others","Helping family, mentoring, volunteering, acts of kindness...")}
</article>

<article class="card">
<h3>Belief System & Morality</h3>
<p class="hint">How did you act according to your values?</p>
<ul class="hint" style="margin-top:-6px">
<li>Define a simple creed (3–5 lines) and review weekly</li>
<li>Name one situation where you chose principle over comfort</li>
<li>Practice a daily reflection (journal/prayer/meditation)</li>
</ul>
${textareaBind("morality","Honesty, restraint, faith, keeping principles under pressure...")}
</article>

<article class="card">
<h3>Skill & Mastery</h3>
<p class="hint">
Choose one skill. Stick with it. Try to become the best in the world at it. Choose wisely — ideally something others will pay for.
</p>
<ul class="hint" style="margin-top:-6px">
<li>Pick 1 main pursuit; commit to a bi-weekly hour target</li>
<li>Ship 1 measurable output (demo, draft, PR, set, piece)</li>
<li>Seek deliberate practice: feedback + iteration</li>
</ul>
${textareaBind("mastery","Hours studied, practice sessions, key achievements...")}
</article>

<article class="card">
<h3>Self-Reliance</h3>
<p class="hint">How did you increase your independence?</p>
<ul class="hint" style="margin-top:-6px">
<li>Positive cash flow; save/invest each period</li>
<li>Replace one outsourced habit with self-sufficiency</li>
<li>Learn a practical skill (repairs, budgeting, cooking)</li>
</ul>
${textareaBind("selfReliance","Savings, cooking instead of takeout, new skills...")}
</article>

<article class="card">
<h3>Integrity & Consistency</h3>
<p class="hint">Did you keep your promises and follow through?</p>
<ul class="hint" style="margin-top:-6px">
<li>Make fewer promises; track every commitment</li>
<li>Maintain a streak log (no-zero days)</li>
<li>Own misses; write a one-line corrective next step</li>
</ul>
${textareaBind("integrity","Yes/No with short reflection...")}
</article>
</div>

<div class="card" style="margin-top:16px">
<h3>Bi-Weekly Reflection</h3>
${textareaBind("reflection","Your biggest win this period? Main goal for the next one?")}
</div>

<div class="card" style="margin-top:16px">
<h3>General Reflection (Open Space)</h3>
${textareaBind("general","Anything else you want to share...")}
</div>

<div class="flex-end" style="margin-top:16px">
<button id="submitBtn" class="btn btn-primary">Submit Report</button>
</div>

<p class="notice">Tip: your inputs auto-save to this device. Clearing browser storage will erase drafts.</p>
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
<h1 class="h1">Checkout (Placeholder)</h1>
<p class="subtitle">Hook your payment provider here later. For now this is just a static page.</p>
<div class="actions">
<a class="btn" href="#">Back</a>
</div>
</section>

<section class="container card">
<h3>What you get</h3>
<ul class="hint" style="margin-left:18px">
<li>Bi-weekly accountability across six pillars</li>
<li>Human feedback within 48 hours</li>
<li>Simple progress tracking & streaks (local on this demo)</li>
</ul>
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
