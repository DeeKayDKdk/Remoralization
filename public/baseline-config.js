window.BASELINE_CONFIG = {
pillars: [
"Order",
"Responsibility",
"Mastery",
"Physical Discipline"
],

totalQuestions: 4,

questions: [
{
key: "q1_physical_order_state",
pillar: "Order",
subpillar: "Physical Order",
prompt: "Which best matches the current state of your main living space?",
answerType: "ranged_choice",
options: [
{ label: "Extremely clean and ready for guests", score: 10 },
{ label: "Clean with minor disorder", score: 8 },
{ label: "Mixed", score: 6 },
{ label: "Noticeably messy", score: 4 },
{ label: "Chronically cluttered or embarrassing", score: 2 }
]
},
{
key: "q2_physical_friction_points",
pillar: "Order",
subpillar: "Physical Order",
prompt: "How many unresolved physical friction points are currently in your daily environment?",
answerType: "fixed_choice",
options: [
{ label: "0-1", value: "0-1", score: 10 },
{ label: "2-3", value: "2-3", score: 8 },
{ label: "4-5", value: "4-5", score: 6 },
{ label: "6-7", value: "6-7", score: 4 },
{ label: "8+", value: "8+", score: 2 }
]
},
{
key: "q4_days_with_plan",
pillar: "Order",
subpillar: "Time / Digital Order",
prompt: "How many days in the last 7 did you clearly know your plan before the day began?",
answerType: "fixed_choice",
options: [
{ label: "7", value: 7, score: 10 },
{ label: "6", value: 6, score: 9 },
{ label: "5", value: 5, score: 8 },
{ label: "4", value: 4, score: 6 },
{ label: "3", value: 3, score: 5 },
{ label: "2", value: 2, score: 4 },
{ label: "1", value: 1, score: 2 },
{ label: "0", value: 0, score: 1 }
]
},
{
key: "q5_calendar_system",
pillar: "Order",
subpillar: "Time / Digital Order",
prompt: "Which best describes your calendar and planning system right now?",
answerType: "ranged_choice",
options: [
{ label: "Trusted system", score: 10 },
{ label: "Mostly use a real system", score: 8 },
{ label: "Inconsistent", score: 6 },
{ label: "Rely on memory or reaction", score: 3 },
{ label: "No real planning system", score: 1 }
]
}
]
};
