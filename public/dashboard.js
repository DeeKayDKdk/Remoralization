import { createClient } from “https://esm.sh/@supabase/supabase-js@2”;

const SUPABASE_URL = “https://qsvelfkcaaqxgaewwwog.supabase.co”;
const SUPABASE_ANON_KEY = “sb_publishable_USsQxIcLcsFdpJsKRPwN5Q_Sk66z890”;

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
window.supabase = supabase;

const $ = (s, c = document) => c.querySelector(s);
const app = $(”#app”);
let latestBaseline = null;
let currentUser = null;

// ─── Load user + baseline ────────────────────────────────────────────────────

async function loadData() {
const { data: { session } } = await supabase.auth.getSession();

if (!session?.user?.id) {
window.location.href = “/login.html”;
return;
}

currentUser = session.user;

const { data, error } = await supabase
.from(“baselines”)
.select(”*”)
.eq(“user_id”, session.user.id)
.order(“created_at”, { ascending: false })
.limit(1)
.maybeSingle();

if (error) {
console.error(“Dashboard baseline load error:”, error);
latestBaseline = null;
return;
}

latestBaseline = data || null;
}

// ─── Score helpers ────────────────────────────────────────────────────────────

function getScoreLabel(score) {
if (score === null || score === undefined) return { label: “No data”, tone: “tone-muted” };
if (score >= 85) return { label: “Excellent”, tone: “tone-good” };
if (score >= 70) return { label: “Strong”, tone: “tone-good” };
if (score >= 55) return { label: “Average”, tone: “tone-mid” };
if (score >= 40) return { label: “Weak”, tone: “tone-low” };
return { label: “Critical”, tone: “tone-danger” };
}

function getTrend(current, previous) {
if (current === null || previous === null) return “”;
if (current > previous + 2) return “↑”;
if (current < previous - 2) return “↓”;
return “→”;
}

function scoreBar(label, score, tone) {
const pct = score ?? 0;
return `<div class="pillar-bar-row"> <div class="pillar-bar-label"> <span>${label}</span> <strong class="${tone}">${score !== null ? score : "—"}</strong> </div> <div class="bar-track"> <div class="bar-fill ${tone}" style="width:${pct}%"></div> </div> </div>`;
}

// ─── Render ───────────────────────────────────────────────────────────────────

function dashboardPage() {
const b = latestBaseline;

const bodyScore = b?.body_score ?? null;
const orderScore = b?.order_score ?? null;
const respScore = b?.responsibility_score ?? null;
const masteryScore = b?.mastery_score ?? null;
const totalScore = b?.total_score ?? null;

const bodyLabel = getScoreLabel(bodyScore);
const orderLabel = getScoreLabel(orderScore);
const respLabel = getScoreLabel(respScore);
const masteryLabel = getScoreLabel(masteryScore);

const noBaseline = !b;

return `
<header class="topbar">
<div class="brand">REMORALIZATION</div>
<nav class="top-actions">
<a class="btn btn-ghost" href="/start-report.html">
${noBaseline ? “Take Baseline” : “Retake Baseline”}
</a>
<a class="btn btn-ghost" href="/index.html">Home</a>
<button class="btn btn-ghost" id="signOutBtn">Sign Out</button>
</nav>
</header>

```
<main class="dashboard-shell">

${noBaseline ? `
<section class="container section">
<div class="card final-cta-card">
<div class="eyebrow">Welcome</div>
<h1>Your dashboard is ready.</h1>
<p class="subtitle">Complete your baseline assessment to see your scores, identify your weakest pillar, and get your first action plan.</p>
<div class="actions" style="margin-top:24px;">
<a class="btn btn-primary" href="/start-report.html">Take Your Baseline →</a>
</div>
</div>
</section>
` : `

<!-- OVERALL SCORE -->
<section class="container section">
<div class="dashboard-hero card">
<div class="eyebrow">Overall Score</div>
<div class="overall-score-block">
<div class="score-orb">
<strong>${totalScore ?? "—"}</strong>
<span>/ 100</span>
</div>
<div class="score-meta">
<div class="score-meta-row">
<span>Strongest Pillar</span>
<strong class="tone-good">${b.strongest_pillar ?? "—"}</strong>
</div>
<div class="score-meta-row">
<span>Weakest Pillar</span>
<strong class="tone-danger">${b.weakest_pillar ?? "—"}</strong>
</div>
<div class="score-meta-row">
<span>Archetype</span>
<strong>${b.archetype_name ?? b.diagnosis_type ?? "—"}</strong>
</div>
</div>
</div>
</div>
</section>

<!-- PILLAR CARDS -->
<section class="container section">
<div class="eyebrow" style="margin-bottom:16px;">Pillar Breakdown</div>
<div class="grid grid-2">

<!-- BODY -->
<article class="card pillar-card">
<div class="pillar-card-header">
<h3>Physical Discipline</h3>
<span class="pillar-score ${bodyLabel.tone}">${bodyScore ?? "—"}</span>
</div>
<div class="pillar-label-row">
<span class="${bodyLabel.tone}">${bodyLabel.label}</span>
</div>
${scoreBar("Condition", null, "tone-muted")}
${scoreBar("Capability", null, "tone-muted")}
${scoreBar("Consistency", null, "tone-muted")}
<p class="pillar-note">Condition, Capability, and Consistency scores unlock after your first biweekly check-in.</p>
</article>

<!-- ORDER -->
<article class="card pillar-card">
<div class="pillar-card-header">
<h3>Order</h3>
<span class="pillar-score ${orderLabel.tone}">${orderScore ?? "—"}</span>
</div>
<div class="pillar-label-row">
<span class="${orderLabel.tone}">${orderLabel.label}</span>
</div>
${scoreBar("Physical Order", null, "tone-muted")}
${scoreBar("System Order", null, "tone-muted")}
<p class="pillar-note">Subpillar scores unlock after your first biweekly check-in.</p>
</article>

<!-- RESPONSIBILITY -->
<article class="card pillar-card">
<div class="pillar-card-header">
<h3>Responsibility</h3>
<span class="pillar-score ${respLabel.tone}">${respScore ?? "—"}</span>
</div>
<div class="pillar-label-row">
<span class="${respLabel.tone}">${respLabel.label}</span>
</div>
${scoreBar("Duties", null, "tone-muted")}
${scoreBar("People", null, "tone-muted")}
<p class="pillar-note">Subpillar scores unlock after your first biweekly check-in.</p>
</article>

<!-- MASTERY -->
<article class="card pillar-card">
<div class="pillar-card-header">
<h3>Mastery</h3>
<span class="pillar-score ${masteryLabel.tone}">${masteryScore ?? "—"}</span>
</div>
<div class="pillar-label-row">
<span class="${masteryLabel.tone}">${masteryLabel.label}</span>
</div>
${scoreBar("Practice", null, "tone-muted")}
${scoreBar("Pursuit", null, "tone-muted")}
<p class="pillar-note">Subpillar scores unlock after your first biweekly check-in.</p>
</article>

</div>
</section>

<!-- ACTION PLAN -->
<section class="container section">
<div class="grid grid-3">

<article class="card pillar-card">
<h3>Main Bottleneck</h3>
<p class="card-copy">${b.main_bottleneck ?? "Complete your baseline to see your bottleneck."}</p>
</article>

<article class="card pillar-card">
<h3>Next Move</h3>
<p class="card-copy">${b.next_move ?? "Complete your baseline to get your next move."}</p>
</article>

<article class="card pillar-card">
<h3>Diagnosis</h3>
<p class="card-copy">${b.diagnosis_summary ?? b.diagnosis_type ?? "Complete your baseline to see your diagnosis."}</p>
</article>

</div>
</section>

`}

</main>

<footer class="footer">
Remoralization — structured accountability for men.
</footer>
```

`;
}

// ─── Boot ────────────────────────────────────────────────────────────────────

async function boot() {
try {
await loadData();
app.innerHTML = dashboardPage();

```
// Sign out
const signOutBtn = document.getElementById("signOutBtn");
if (signOutBtn) {
signOutBtn.addEventListener("click", async () => {
await supabase.auth.signOut();
window.location.href = "/index.html";
});
}
```

} catch (e) {
console.error(e);
app.innerHTML = `<div style="max-width:720px;margin:40px auto;color:#ffb4b4;padding:0 16px;"> <h2>Load error</h2> <pre>${String(e)}</pre> </div>`;
}
}

boot();
