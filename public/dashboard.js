import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://qsvelfkcaaqxgaewwwog.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_USsQxIcLcsFdpJsKRPwN5Q_Sk66z890";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const $ = (s, c = document) => c.querySelector(s);
const app = $("#app");
let latestBaseline = null;

async function loadLatestBaseline() {
const {
data: { session },
} = await supabase.auth.getSession();

if (!session?.user?.id) {
latestBaseline = null;
return;
}

const { data, error } = await supabase
.from("baselines")
.select("*")
.eq("user_id", session.user.id)
.order("created_at", { ascending: false })
.limit(1)
.maybeSingle();

if (error) {
console.error("Dashboard baseline load error:", error);
latestBaseline = null;
return;
}

latestBaseline = data || null;
}

function dashboardPage() {
return `
<header class="topbar">
<div class="brand">REMORALIZATION</div>
<nav class="top-actions">
<a class="btn btn-ghost" href="/start-report.html">Retake Baseline</a>
<a class="btn btn-ghost" href="/index.html">Home</a>
</nav>
</header>

<main>
<section class="container section">
<div class="card final-cta-card">
<div class="eyebrow">Member home</div>
<h1>Your dashboard</h1>
<p class="subtitle">
This will become the home base for your score, your strongest and weakest pillar,
and your next 14-day action plan.
</p>

<div class="grid grid-3" style="margin-top:24px;">
<article class="card pillar-card">
<h3>Latest baseline</h3>
<p class="card-copy">Coming next: latest saved score and date.</p>
</article>

<article class="card pillar-card">
<h3>Main bottleneck</h3>
<p class="card-copy">Coming next: your current weakest point.</p>
</article>

<article class="card pillar-card">
<h3>Next move</h3>
<p class="card-copy">Coming next: start your 14-day cycle.</p>
</article>
</div>
</div>
</section>
</main>
`;
}

function boot() {
try {
app.innerHTML = dashboardPage();
} catch (e) {
console.error(e);
app.innerHTML = `
<div style="max-width:720px;margin:40px auto;color:#ffb4b4;padding:0 16px;">
<h2>Load error</h2>
<pre>${String(e)}</pre>
</div>
`;
}
}

boot();
