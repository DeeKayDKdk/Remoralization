"use client";

import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export default function Page() {
  const [view, setView] = useState("home");

  // physical delta inputs
  const [lastBodyFat, setLastBodyFat] = useState("");
  const [currentBodyFat, setCurrentBodyFat] = useState("");

  // toast + submit state
  const [toast, setToast] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // pillars
  const [pillars, setPillars] = useState([
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
      example: "Helping family, mentoring, volunteering.",
      report: "",
      score: 0,
    },
    {
      title: "Belief System & Morality",
      question: "How did you act according to your values?",
      example: "Honesty, self-restraint, faith under pressure.",
      report: "",
      score: 0,
    },
    {
      title: "Skill & Mastery",
      question: "What did you do to improve in your pursuit?",
      example: "Hours studied, practice sessions, achievements.",
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
      title: "Integrity & Consistency",
      question: "Did you keep promises and follow through?",
      example: "Yes/No with brief reflection.",
      report: "",
      score: 0,
    },
  ]);

  // wire the Physical Discipline "extra" inputs after state exists
  const pillarsWithExtras = useMemo(() => {
    const copy = [...pillars];
    copy[0] = {
      ...copy[0],
      extra: (
        <div className="space-y-2">
          <Input
            placeholder="Last Period Body Fat %"
            value={lastBodyFat}
            onChange={(e) => setLastBodyFat(e.target.value)}
          />
          <Input
            placeholder="Current Body Fat %"
            value={currentBodyFat}
            onChange={(e) => setCurrentBodyFat(e.target.value)}
          />
          {deltaBodyFat(lastBodyFat, currentBodyFat) && (
            <p className="text-sm text-yellow-600 font-semibold">
              {deltaBodyFat(lastBodyFat, currentBodyFat)}
            </p>
          )}
        </div>
      ),
    };
    return copy;
  }, [pillars, lastBodyFat, currentBodyFat]);

  const totalScore = useMemo(
    () =>
      pillars.reduce(
        (sum, p) => sum + (Number.isFinite(p.score) ? p.score : 0),
        0
      ),
    [pillars]
  );
  const eligible = totalScore >= 18; // 6 pillars * 4 = 24 max

  function deltaBodyFat(lastStr, currStr) {
    const last = parseFloat(lastStr);
    const curr = parseFloat(currStr);
    if (!isNaN(last) && !isNaN(curr)) {
      const diff = curr - last;
      const sign = diff > 0 ? "+" : diff < 0 ? "" : "±";
      return `${sign}${diff.toFixed(1)}% since last period`;
    }
    return "";
  }

  function updateReport(i, report) {
    setPillars((prev) => {
      const next = [...prev];
      next[i] = { ...next[i], report };
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

  async function handleSubmit() {
    setSubmitting(true);
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
    setSubmitting(false);
  }

  // HOME VIEW
  if (view === "home") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col items-center justify-center p-6">
        <motion.h1
          className="text-5xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Operation Remoralization
        </motion.h1>
        <p className="text-lg max-w-xl text-center mb-8">
          Six pillars. Bi-weekly reporting. Human accountability.
        </p>
        <div className="flex gap-4">
          <Button
            className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-2xl hover:bg-yellow-400"
            onClick={() => setView("how")}
            aria-label="Show How It Works"
          >
            Show How It Works
          </Button>
          <Button
            className="bg-white text-black font-semibold px-6 py-3 rounded-2xl border border-gray-200 hover:bg-gray-100"
            onClick={() => alert("Redirect to checkout placeholder")}
            aria-label="Join for $10/month"
          >
            Join for $10/month
          </Button>
        </div>
      </div>
    );
  }

  // HOW IT WORKS / REPORTING VIEW
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-8">
      <h2 className="text-4xl font-bold mb-6 text-center">How It Works</h2>
      <p className="text-center max-w-2xl mx-auto mb-1">
        Every two weeks you report against six pillars. A real human reads,
        replies, and holds you to your own standards.
      </p>
      <p className="text-center text-yellow-600 font-bold mb-10">
        Exceptional effort and results will be rewarded.
      </p>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {pillarsWithExtras.map((pillar, i) => (
          <Card key={pillar.title} className="shadow-lg rounded-2xl">
            <CardContent className="p-6 space-y-3">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-bold">{pillar.title}</h3>
                <div className="flex items-center gap-2">
                  <label htmlFor={`score-${i}`} className="text-sm text-gray-600">
                    Score
                  </label>
                  <select
                    id={`score-${i}`}
                    className="h-9 rounded-md border border-gray-300 bg-white px-2 text-sm"
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
              </div>

              <p className="text-sm font-semibold">{pillar.question}</p>
              <p className="text-xs text-gray-600">{pillar.example}</p>

              {pillar.extra}

              <Textarea
                placeholder="My Report..."
                value={pillar.report}
                onChange={(e) => updateReport(i, e.target.value)}
              />
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex flex-col items-center mt-8 gap-3">
        <div className="flex gap-3">
          <Button
            onClick={handleSubmit}
            className="bg-yellow-500 text-black px-6 py-3 rounded-2xl font-semibold hover:bg-yellow-400 disabled:opacity-60"
            aria-label="Submit Report"
            disabled={submitting}
          >
            {submitting ? "Submitting…" : "Submit Report"}
          </Button>
          <Button
            onClick={() => setView("home")}
            className="bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-100"
            aria-label="Back to Home"
          >
            Back to Home
          </Button>
        </div>

        <p className="text-sm text-gray-600">
          Total score: <span className="font-semibold">{totalScore}</span> / 24
        </p>
        {eligible ? (
          <p className="text-green-700 text-sm font-semibold">
            Eligible for reward this period
          </p>
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
        <p className="font-bold text-lg mt-4">People need a purpose.</p>
        <p className="font-bold text-lg">
          People need simple standards and human accountability.
        </p>
      </div>
    </div>
  );
}
