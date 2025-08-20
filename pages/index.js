import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Users, Target, BookOpen, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function OperationRemoralizationSite() {
  const [view, setView] = useState<"home" | "how">("home");
  const [lastBodyFat, setLastBodyFat] = useState("");
  const [currentBodyFat, setCurrentBodyFat] = useState("");
  const [toast, setToast] = useState("");

  const deltaBodyFat = () => {
    const last = parseFloat(lastBodyFat);
    const curr = parseFloat(currentBodyFat);
    if (!isNaN(last) && !isNaN(curr)) {
      const diff = curr - last;
      const sign = diff > 0 ? "+" : "";
      return `${sign}${diff.toFixed(1)}% since last period`;
    }
    return "";
  };

  const handleSubmit = () => {
    setToast("Report submitted successfully!");
    setTimeout(() => setToast(""), 3000);
  };

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
            className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-2xl"
            onClick={() => setView("how")}
          >
            Show How It Works
          </Button>
          <Button
            className="bg-white text-black font-semibold px-6 py-3 rounded-2xl"
            onClick={() => alert("Redirect to checkout placeholder")}
          >
            Join for $10/month
          </Button>
        </div>
      </div>
    );
  }

  if (view === "how") {
    return (
      <div className="min-h-screen bg-gray-100 text-gray-900 p-8">
        <h2 className="text-4xl font-bold mb-6 text-center">How It Works</h2>
        <p className="text-center max-w-2xl mx-auto mb-4">
          Every two weeks you report against six pillars. A real human reads,
          replies, and holds you to your own standards.
        </p>
        <p className="text-center text-yellow-600 font-bold mb-10">
          Exceptional effort and results will be rewarded.
        </p>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "Physical Discipline",
              question:
                "What did you do to maintain or improve your body during this period?",
              example: "Workouts, weight change, diet discipline.",
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
                  {deltaBodyFat() && (
                    <p className="text-sm text-yellow-600 font-semibold">
                      {deltaBodyFat()}
                    </p>
                  )}
                </div>
              ),
            },
            {
              title: "Responsibility to Others",
              question:
                "How did you take care of, support, or serve others during this period?",
              example:
                "Helping family, mentoring, volunteering, small acts of kindness.",
            },
            {
              title: "Belief System & Morality",
              question: "How did you act according to your values?",
              example:
                "Honesty, self-restraint, faith, keeping principles under pressure.",
            },
            {
              title: "Skill & Mastery",
              question:
                "What did you do to improve in your chosen pursuit during this period?",
              example: "Hours studied, practice sessions, key achievements.",
            },
            {
              title: "Self-Reliance",
              question: "How did you increase your independence?",
              example:
                "Savings, cooking instead of takeout, learning a new skill.",
            },
            {
              title: "Integrity & Consistency",
              question:
                "Did you keep your promises and follow through during this period?",
              example: "Yes/No, with short reflection.",
            },
          ].map((pillar, i) => (
            <Card key={i} className="shadow-lg rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{pillar.title}</h3>
                <p className="text-sm mb-2 font-semibold">{pillar.question}</p>
                <p className="text-xs text-gray-600 mb-4">{pillar.example}</p>
                {pillar.extra}
                <Textarea placeholder="My Report..." />
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button
            onClick={handleSubmit}
            className="bg-yellow-500 text-black px-6 py-3 rounded-2xl font-semibold"
          >
            Submit Report
          </Button>
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
}
