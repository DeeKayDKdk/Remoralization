"use client";

import { useMemo, useState, useEffect } from "react";

/**
* Simple, dependency-free Next.js page.
* - No TypeScript
* - No external UI components
* - Works with just next/react/react-dom
*/

export default function Page() {
// routing between views (home / how)
const [view, setView] = useState("home");

// physical delta inputs
const [lastBodyFat, setLastBodyFat] = useState("");
const [currentBodyFat, setCurrentBodyFat] = useState("");

// toast + submit state
const [toast, setToast] = useState("");
const [isSubmitting, setIsSubmitting] = useState(false);

// pillars
const [pillars, setPillars] = useState(() => [
{
title: "Physical Discipline",
question: "What did you do to maintain or improve your body?",
example: "Workouts, weight change, diet discipline.",
report: "",
score: 0,
},
{
title: "Responsibility to Others",
question: "How did you support or serve others?",
example: "Helping family, mentoring, volunteering, small acts of kindness.",
report: "",
score: 0,
},
{
title: "Integrity & Morality",
question: "How did you act according to your values?",
example: "Honesty, self-restraint, keeping principles under pressure.",
report: "",
score: 0,
},
{
title: "Skill & Mastery",
question: "What did you do to improve in your pursuit?",
example: "Hours studied, practice sessions, key achievements.",
report: "",
score: 0,
},
{
title: "Self-Reliance",
question: "How did you increase independence?",
example: "Savings, cooking, new practical skills.",
report: "",
score: 0,
},
{
title: "Consistency",
question: "Did you keep promises and follow through?",
example: "Yes/No with brief reflection.",
report: "",
score: 0,
},
]);

// --- helpers ---------------------------------------------------------------

function updateReport(i, text) {
setPillars((prev) => {
const next = [...prev];
next[i] = { ...next[i], report: text };
return next;
});
}

function updateScore(i, score) {
setPillars((prev) => {
const next = [...prev];
next[i] = { ...next[i], score };
return next;
});
}

function deltaBodyFat(lastStr, currStr) {
const last = parseFloat(lastStr);
const curr = parseFloat(currStr);
if (isNaN(last) || isNaN(curr)) return "";
const diff = curr - last;
const sign = diff > 0 ? "+" : diff < 0 ? "−" : "";
return `${sign}${Math.abs(diff).toFixed(1)}% since last period`;
}

const totalScore = useMemo(
() => pillars.reduce((sum, p) => sum + (Number.isFinite(p.score) ? p.score : 0), 0),
[pillars]
);

const eligible = totalScore >= 18; // out of 24

// Insert “extras” UI into the first pillar (physical) on the fly
const pillarsWithExtras = useMemo(() => {
const copy = [...pillars];
copy[0] = {
...copy[0],
extra: (
<div className="space-y-2">
<input
placeholder="Last Period Body Fat %"
value={lastBodyFat}
onChange={(e) => setLastBodyFat(e.target.value)}
className="w-full rounded border px-2 py-1 text-sm"
/>
<input
placeholder="Current Body Fat %"
value={currentBodyFat}
onChange={(e) => setCurrentBodyFat(e.target.value)}
className="w-full rounded border px-2 py-1 text-sm"
/>
{deltaBodyFat(lastBodyFat, currentBodyFat) && (
<p className="text-xs text-yellow-600 font-semibold">
{deltaBodyFat(lastBodyFat, currentBodyFat)}
</p>
)}
</div>
),
};
return copy;
}, [pillars, lastBodyFat, currentBodyFat]);

// --- submit ---------------------------------------------------------------

async function handleSubmit() {
setIsSubmitting(true);
const payload = {
timestamp: new Date().toISOString(),
pillars,
lastBodyFat,
currentBodyFat,
totalScore,
eligible,
};
try {
localStorage.setItem(
"operation-remoralization:lastSubmission",
JSON.stringify(payload)
);
setToast("Report submitted successfully!");
} catch {
setToast("Saved for this session (localStorage unavailable).");
}
setTimeout(() => setToast(""), 3000);
setIsSubmitting(false);
}

// --- views ----------------------------------------------------------------

if (view === "home") {
return (
<main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white flex flex-col items-center justify-center p-6">
<h1 className="text-5xl font-bold mb-6 text-center">Operation Remoralization</h1>

<div className="flex gap-4">
<button
onClick={() => setView("how")}
className="bg-yellow-500 text-black px-6 py-3 rounded-2xl font-semibold hover:bg-yellow-400"
aria-label="Show How It Works"
>
Show How It Works
</button>

<button
onClick={() => alert("Redirect to checkout placeholder")}
className="bg-white text-gray-900 border border-gray-200 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-100"
aria-label="Join"
>
Join for $10/month
</button>
</div>

{/* Copy */}
<div className="mt-16 text-center max-w-2xl mx-auto text-gray-300 space-y-2">
<p>People don’t need more AI slop.</p>
<p>People don’t need an algorithm to reaffirm themselves.</p>
<p>People don’t need more consumption.</p>
<p>People don’t need long self-help books.</p>
<p className="font-bold text-lg mt-4">People need a PURPOSE.</p>
<p className="font-bold text-lg">People need simple standards and human accountability.</p>
</div>
</main>
);
}

// HOW IT WORKS / REPORTING VIEW
return (
<main className="min-h-screen bg-white text-gray-900 p-6">
<h2 className="text-4xl font-bold mb-6 text-center">How It Works</h2>
<p className="text-center max-w-2xl mx-auto mb-8">
Every two weeks you report against six pillars. A real human reads, replies, and
holds you to your own standards. Exceptional effort and results will be rewarded.
</p>

<div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
{pillarsWithExtras.map((pillar, i) => (
<div key={pillar.title} className="rounded-2xl border border-gray-200 p-4 shadow-sm">
<h3 className="font-semibold text-lg">{pillar.title}</h3>

<div className="mt-3">
<label className="text-sm font-semibold">Score</label>
<select
className="mt-1 w-full rounded border px-2 py-1 text-sm"
value={pillar.score}
onChange={(e) => updateScore(i, Number(e.target.value))}
>
<option value={0}>0 – none</option>
<option value={1}>1 – minimal</option>
<option value={2}>2 – decent</option>
<option value={3}>3 – strong</option>
<option value={4}>4 – exceptional</option>
</select>
</div>

<p className="mt-3 text-sm font-semibold">{pillar.question}</p>
<p className="text-xs text-gray-600 mb-2">{pillar.example}</p>

{pillar.extra}

<textarea
placeholder="My Report…"
value={pillar.report}
onChange={(e) => updateReport(i, e.target.value)}
className="mt-3 w-full min-h-[90px] rounded border px-2 py-2 text-sm"
/>
</div>
))}
</div>

<div className="flex flex-col items-center mt-8 gap-3">
<button
onClick={handleSubmit}
className="bg-yellow-500 text-black px-6 py-3 rounded-2xl font-semibold hover:bg-yellow-400 disabled:opacity-60"
aria-label="Submit Report"
disabled={isSubmitting}
>
{isSubmitting ? "Submitting…" : "Submit Report"}
</button>

<button
onClick={() => setView("home")}
className="bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-100"
aria-label="Back to Home"
>
Back to Home
</button>

<div className="text-sm text-gray-600">
Total score: <span className="font-semibold">{totalScore}</span> / 24
</div>

{eligible ? (
<p className="text-green-700 text-sm font-semibold">Eligible for reward this period</p>
) : (
<p className="text-gray-500 text-sm">
Need {Math.max(0, 18 - totalScore)} more points for eligibility
</p>
)}
</div>

{toast && (
<div className="fixed bottom-6 right-6 bg-black text-white px-4 py-2 rounded-lg shadow-lg">
{toast}
</div>
)}

<div className="mt-16 text-center max-w-2xl mx-auto text-gray-700 space-y-2">
<p>People don’t need more AI slop.</p>
<p>People don’t need an algorithm to reaffirm themselves.</p>
<p>People don’t need more consumption.</p>
<p>People don’t need long self-help books.</p>
<p className="font-bold text-lg mt-4">People need a PURPOSE.</p>
<p className="font-bold text-lg">People need simple standards and human accountability.</p>
</div>
</main>
);
}
