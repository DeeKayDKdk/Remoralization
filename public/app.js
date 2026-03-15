const $ = (s, c = document) => c.querySelector(s);
const app = $("#app");

function sectionLabel(text) {
return `<div class="eyebrow">${text}</div>`;
}

function pillarCard(title, desc, metrics) {
return `
<article class="card pillar-card">
<h3>${title}</h3>
<p class="card-copy">${desc}</p>
<ul class="metric-list">
${metrics.map(item => `<li>${item}</li>`).join("")}
</ul>
</article>
`;
}

function stepCard(number, title, desc) {
return `
<article class="card step-card">
<div class="step-number">${number}</div>
<h3>${title}</h3>
<p class="card-copy">${desc}</p>
</article>
`;
}

function scoreRow(label, score, tone = "") {
return `
<div class="score-row">
<span>${label}</span>
<strong class="${tone}">${score}</strong>
</div>
`;
}

function homePage() {
return `
<header class="topbar">
<div class="brand">REMORALIZATION</div>
<nav class="top-actions">
<a class="btn btn-ghost" href="/how.html">How It Works</a>
<a class="btn btn-ghost" href="/why.html">Why It Works</a>
<a class="btn btn-primary" href="/join.html">Join Free</a>
</nav>
</header>

<main>
<section class="hero container">
<div class="hero-copy">
${sectionLabel("Structured accountability for men")}
<h1>Build integrity through visible progress.</h1>
<p class="subtitle">
Remoralization is a real accountability system for men who want measurable improvement in
<strong>Physical Discipline</strong>, <strong>Order</strong>, <strong>Responsibility</strong>, and
<strong>Skill / Mastery</strong>. Report every two weeks. Review monthly. Build proof that your life is changing.
</p>

<div class="actions">
<a class="btn btn-primary" href="/join.html">Join Free</a>
<a class="btn btn-ghost" href="/how.html">See How It Works</a>
</div>

<div class="hero-points">
<span>Biweekly scorecards</span>
<span>Monthly review</span>
<span>Visible progress</span>
<span>Real human accountability</span>
</div>
</div>

<div class="hero-panel card">
<div class="panel-label">Sample biweekly score</div>
<div class="score-block">
${scoreRow("Physical Discipline", "19 / 25", "tone-good")}
${scoreRow("Order", "17 / 25", "tone-mid")}
${scoreRow("Responsibility", "21 / 25", "tone-good")}
${scoreRow("Skill / Mastery", "18 / 25", "tone-mid")}
</div>

<div class="score-total">
<span>Total</span>
<strong>75 / 100</strong>
</div>

<div class="mini-divider"></div>

<div class="panel-meta">
<div>
<div class="meta-label">Biggest win</div>
<p>Kept physical routine, cleaned up living space, and hit key work sessions.</p>
</div>
<div>
<div class="meta-label">Next focus</div>
<p>Tighten order, complete 3 responsibility commitments, and advance one main pursuit.</p>
</div>
</div>
</div>
</section>

<section class="container section">
<div class="section-heading narrow">
${sectionLabel("Who this is for")}
<h2>For men who are tired of drifting</h2>
<p>
This is for men who feel scattered, inconsistent, under-structured, or below their potential.
They do not need more passive content. They need a system that makes progress visible and drift harder to ignore.
</p>
</div>
</section>

<section class="container section">
<div class="section-heading">
${sectionLabel("How it works")}
<h2>A simple accountability loop</h2>
<p>
The product should feel concrete. A member joins, defines his focus, reports every two weeks,
reviews monthly, and builds visible proof over time.
</p>
</div>

<div class="grid grid-4">
${stepCard("01", "Baseline Assessment", "Define your current state, body goal, primary pursuit, and next commitments.")}
${stepCard("02", "Biweekly Scorecard", "Report progress every two weeks across the 4 pillars with clear evidence and honest scoring.")}
${stepCard("03", "Monthly Review", "Review the trend, identify misses, tighten standards, and reset the next phase.")}
${stepCard("04", "Visible Progress", "Track score improvement, promises kept, better body composition, more order, and stronger follow-through.")}
</div>
</section>

<section class="container section">
<div class="section-heading">
${sectionLabel("The 4 pillars")}
<h2>The core of the system</h2>
<p>
These are the measurable fields where integrity becomes visible.
</p>
</div>

<div class="grid grid-2">
${pillarCard(
"Physical Discipline",
"Train the body and build visible proof of discipline.",
["workouts completed", "bodyweight / waist trend", "nutrition compliance", "sleep consistency"]
)}
${pillarCard(
"Order",
"Bring structure to your environment, schedule, and life systems.",
["room / workspace reset", "weekly planning", "admin handled", "loose ends reduced"]
)}
${pillarCard(
"Responsibility",
"Carry real obligations to others and to real life.",
["commitments kept", "punctuality", "family / work duties", "burdens handled beyond self"]
)}
${pillarCard(
"Skill / Mastery",
"Advance in a meaningful pursuit through focused effort and measurable progress.",
["hours practiced", "sessions completed", "milestones reached", "output produced"]
)}
</div>
</section>

<section class="container section split-section">
<div class="split-copy">
${sectionLabel("What gets measured")}
<h2>Not vague self-improvement. A real score.</h2>
<p>
Most men do not fail from lack of information. They fail from lack of structure,
follow-through, and real accountability. Remoralization turns discipline into something visible:
scored, reviewed, and reinforced over time.
</p>

<ul class="big-list">
<li><strong>Physical Discipline:</strong> body, training, food, sleep</li>
<li><strong>Order:</strong> environment, schedule, admin, life control</li>
<li><strong>Responsibility:</strong> obligations, dependability, duties carried</li>
<li><strong>Skill / Mastery:</strong> focused practice, milestones, real output</li>
</ul>
</div>

<div class="card proof-card">
<div class="panel-label">What changes in 30–90 days</div>
<ul class="proof-list">
<li>better body composition or physical consistency</li>
<li>cleaner environment and stronger routines</li>
<li>more promises kept</li>
<li>less chaos and avoidance</li>
<li>real momentum in a chosen pursuit</li>
<li>higher self-respect from visible proof</li>
</ul>
</div>
</section>

<section class="container section">
<div class="section-heading narrow">
${sectionLabel("Free and paid")}
<h2>Start with the front door, then step into the full system</h2>
<p>
Free should introduce the idea and let a man see where he stands.
Paid should deliver the actual accountability mechanism.
</p>
</div>

<div class="grid grid-2">
<article class="card pricing-card">
<div class="pricing-label">Free</div>
<h3>Front door</h3>
<ul class="metric-list">
<li>baseline assessment</li>
<li>first score preview</li>
<li>introduction to the 4 pillars</li>
<li>clear next step into the system</li>
</ul>
</article>

<article class="card pricing-card pricing-card-featured">
<div class="pricing-label">Paid membership</div>
<h3>The accountability system</h3>
<ul class="metric-list">
<li>biweekly scorecards</li>
<li>monthly review</li>
<li>progress tracking</li>
<li>real human follow-through</li>
</ul>
</article>
</div>
</section>

<section class="container section final-cta">
<div class="card final-cta-card">
${sectionLabel("Join")}
<h2>Stop drifting. Start measuring.</h2>
<p>
Build discipline, restore order, carry responsibility, and advance in mastery —
with a structure that makes your progress real.
</p>
<div class="actions center">
<a class="btn btn-primary" href="/join.html">Join Free</a>
<a class="btn btn-ghost" href="/how.html">See How It Works</a>
</div>
</div>
</section>
</main>

<footer class="footer">
Remoralization is a structured accountability system for measurable progress in body, order, responsibility, and mastery.
</footer>
`;
}

(function boot() {
try {
app.innerHTML = homePage();
} catch (e) {
console.error(e);
app.innerHTML = `
<div style="max-width:720px;margin:40px auto;color:#ffb4b4;padding:0 16px;">
<h2>Load error</h2>
<pre>${String(e)}</pre>
</div>
`;
}
})();
