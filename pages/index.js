"use client";
import { useState } from "react";

export default function Home() {
const [isSubmitting, setSubmitting] = useState(false);
const [toast, setToast] = useState("");
const [totalScore, setTotalScore] = useState(0);

function handleSubmit() {
setSubmitting(true);
setToast("Report submitted!");
setTimeout(() => {
setSubmitting(false);
setToast("");
}, 1500);
}

return (
<div className="p-6">
{/* Actions */}
<div className="flex flex-col items-center mt-8 gap-3">
<button
onClick={handleSubmit}
className="bg-yellow-500 text-black px-6 py-3 rounded-2xl font-semibold hover:bg-yellow-400 disabled:opacity-60"
aria-label="Submit Report"
disabled={isSubmitting}
>
{isSubmitting ? "Submitting..." : "Submit Report"}
</button>

<button
onClick={() => setTotalScore(s => Math.min(24, s + 1))}
className="bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-100"
aria-label="Add one point"
>
+1 point
</button>
</div>

{/* Score */}
<div className="text-gray-600 mt-6">
Total Score: <span className="font-semibold">{totalScore}</span> / 24
</div>

{totalScore >= 18 ? (
<p className="text-green-700 text-sm font-semibold">
Eligible for reward this period
</p>
) : (
<p className="text-gray-500 text-sm">
Need {18 - totalScore} more points for eligibility
</p>
)}

{/* Toast */}
{toast && (
<div className="fixed bottom-6 right-6 bg-black text-white px-4 py-2 rounded-lg shadow-lg">
{toast}
</div>
)}

{/* Copy */}
<div className="mt-16 text-center max-w-2xl mx-auto text-gray-700 space-y-2">
<p>People don’t need more AI slop.</p>
<p>People don’t need an algorithm to reaffirm themselves.</p>
<p>People don’t need more consumption.</p>
<p>People don’t need long self-help books.</p>
<p className="font-bold text-lg mt-4">People need a PURPOSE.</p>
<p className="font-bold text-lg">
People need simple standards and human accountability.
</p>
</div>
</div>
);
}
