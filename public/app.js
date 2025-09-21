/* ===== tiny view router ===== */
const $ = (sel, ctx=document) => ctx.querySelector(sel);
const $$ = (sel, ctx=document) => [...ctx.querySelectorAll(sel)];
const app = $("#app");

const state = {
view: location.hash.replace("#","") || "form",
form: JSON.parse(localStorage.getItem("orm-report")) || "{}"
};

window.addEventListener("hashchange", () => {
state.view = location.hash.replace("#","") || "form";
render();
});

document.addEventListener("DOMContentLoaded", () => {
try {
// Only update if #year exists
const yearEL = document.getElementById("year");
if (yearEL) {
yearEL.textContent = new Date().getFullYear();
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
setTimeout(() => t.classList.remove("show"), 2400);
}

function saveForm(){
localStorage.setItem("orm-report", JSON.stringify(state.form));
}

function inputBind(id, opts={}){
const v = state.form[id] ?? "";
return `<input id="${id}" name="${id}" value="${escapeHtml(v)}" type="${opts.type||"text"}" placeholder="${opts.placeholder||""}"/>`;
}

function textareaBind(id, placeholder=""){
const v = state.form[id] ?? "";
return `<textarea id="${id}" name="${id}" placeholder="${placeholder}">${escapeHtml(v)}</textarea>`;
}

function escapeHtml(str){
return String(str||"").replace(/[&<>'"]/g, s => ({
"&":"&amp;", "<":"&lt;", ">":"&gt;", "'":"&#39;", "\"":"&quot;"
}[s]));
}

function deltaBodyFat(last, current){
const a = parseFloat(last), b = parseFloat(current);
if(!Number.isFinite(a) || !Number.isFinite(b)) return "";
const d = (b-a).toFixed(1);
const sign = d > 0 ? "+" : "";
const cls = d < 0 ? "negative" : d > 0 ? "positive" : "";
return `<span class="badge ${cls}">${sign}${d}%</span> since last period`;
}

/* ===== views ===== */
function render(){
if(state.view === "how"){ renderHow(); return; }
if(state.view === "why"){ renderWhy(); return; }
renderForm();
wireUpInputs();
}

function renderHero(){
return `
<section class="main-hero">
<h1 class="title">A call to adventure.</h1>
<p class="subtitle">
Build discipline, uphold values, and report your progress every two weeks — with a real human holding you accountable.
</p>
<div class="actions">
<a class="btn btn-primary" href="/join.html">Join Free</a>
<a class="btn btn-ghost" href="/how.html">See How It Works</a>
<a class="btn btn-ghost" href="/why.html">See Why It Works</a>
<a class="btn btn-ghost" href="/demoralization.html">Demoralization Index</a>
</div>
</section>
`;
}

function renderForm(){
app.innerHTML = `
${renderHero()}
<div class="section-title"><h2>The Six Pillars</h2></div>
<div class="badge">Accountability-based growth</div>

<section class="container grid">
${showCard("Physical Discipline", [
"Discipline made visible through physical form.",
"A strong, healthy body reflects order, resilience, and gratitude.",
"Purpose: To extend vitality and serve with energy, courage, and presence."
])}
${showCard("Responsibility to Others", [
"Duty binds the individual to family, community, and nation.",
"Responsibility creates trust, stability, and purpose beyond self.",
"Purpose: To be a protector, provider, and contributor, not a burden."
])}
${showCard("Belief & Morality", [
"Morality gives direction, stability, and higher meaning.",
"A shared belief system builds trust, law, and civilization.",
"Purpose: To align daily action with timeless truth and the transcendent."
])}
${showCard("Skill & Mastery", [
"Skill transforms potential into value; mastery creates legacy.",
"Competence earns respect, independence, and authority.",
"Purpose: To refine talent into contribution that uplifts others."
])}
${showCard("Self-Reliance", [
"Independence guards freedom and preserves dignity.",
"Reliance on oneself builds resilience in hardship and strength in crisis.",
"Purpose: To ensure each person is a pillar, not a liability, in civilization."
])}
${showCard("Integrity & Consistency", [
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
<h1 class="title">How It Works</h1>
<p class="subtitle">Every two weeks you report against six pillars. A real human reads, replies, and holds you to your own standards.</p>
<div class="actions">
<a class="btn" href="#form">Back to Home</a>
<a class="btn btn-primary" href="/join.html">Join Free</a>
</div>
</section>
<!-- you can keep your detailed cadence cards here -->
`;
}

function renderWhy(){
app.innerHTML = `
<section class="main-hero">
<h1 class="title">See Why It Works</h1>
<p class="subtitle">Modern life leaves people lonely, burnt out, and without purpose. The <b>Six Pillars</b> directly target the biggest problems.</p>
<div class="actions">
<a class="btn" href="#form">Back</a>
<a class="btn btn-primary" href="/join.html">Join Free</a>
<a class="btn btn-ghost" href="/demoralization.html">Demoralization Index</a>
</div>
</section>
<!-- keep your WHY_ITEMS list + content here -->
`;
}

function showCard(title, bullets){
return `
<article class="card">
<h3>${title}</h3>
<ul>${bullets.map(v => `<li>${v}</li>`).join("")}</ul>
</article>
`;
}

/* ===== wire up inputs ===== */
function wireUpInputs(){
// keep this empty for now, only needed if forms are added
}

/* ===== boot the homepage ===== */
function boot(){
try {
const appRoot = document.getElementById("app");
if(appRoot){
renderHero();
}
} catch(e){
console.error("Boot error:", e);
}
}

if(document.readyState === "loading"){
document.addEventListener("DOMContentLoaded", boot);
} else {
boot();
}
