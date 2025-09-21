/* ===== tiny view router (kept simple) ===== */
const $ = (s, c=document) => c.querySelector(s);
const app = $("#app");

/* ===== pages ===== */
function hero() {
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
</section>`;
}

function card(title, bullets){
return `
<article class="card">
<h3>${title}</h3>
<ul>${bullets.map(b => `<li>${b}</li>`).join("")}</ul>
</article>`;
}

function sixPillars() {
return `
<div class="section-title">
<h2>The Six Pillars</h2>
<div class="badge">Accountability-based growth</div>
</div>

<section class="container grid">
${card("Physical Discipline", [
"Discipline made visible through physical form.",
"A strong, healthy body reflects order, resilience, and gratitude.",
"Purpose: To extend vitality and serve with energy, courage, and presence."
])}
${card("Responsibility to Others", [
"Duty binds the individual to family, community, and nation.",
"Responsibility creates trust, stability, and purpose beyond self.",
"Purpose: To be a protector, provider, and contributor, not a burden."
])}
${card("Belief & Morality", [
"Morality gives direction, stability, and higher meaning.",
"A shared belief system builds trust, law, and civilization.",
"Purpose: To align daily action with timeless truth and the transcendent."
])}
${card("Skill & Mastery", [
"Skill transforms potential into value; mastery creates legacy.",
"Competence earns respect, independence, and authority.",
"Purpose: To refine talent into contribution that uplifts others."
])}
${card("Self-Reliance", [
"Independence guards freedom and preserves dignity.",
"Reliance on oneself builds resilience in hardship and strength in crisis.",
"Purpose: To ensure each person is a pillar, not a liability, in civilization."
])}
${card("Integrity & Consistency", [
"Integrity unites word and deed; consistency compounds virtue into legacy.",
"Trust, leadership, and stability flow from steady, honest action.",
"Purpose: To live by principle daily, protecting against corruption and collapse."
])}
</section>`;
}

function renderHome() {
app.innerHTML = hero() + sixPillars();
}

/* ===== boot ===== */
(function boot(){
try { renderHome(); }
catch (e) {
console.error(e);
app.innerHTML = `<div style="max-width:720px;margin:40px auto;color:#ff8a8a">
<h2>Load error</h2><pre>${String(e)}</pre></div>`;
}
})();
