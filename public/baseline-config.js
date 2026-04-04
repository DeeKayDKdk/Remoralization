window.BASELINE_CONFIG = {
totalQuestions: 50,
pillars: [“Physical Discipline”, “Order”, “Responsibility”, “Mastery”],

questions: [

// ─── PHYSICAL DISCIPLINE (12 questions) ───────────────────────────────────

{
key: "body_training_consistency",
pillar: "Physical Discipline",
subpillar: "Consistency",
prompt: "How consistently do you complete your planned training or exercise each week?",
answerType: "ranged_choice",
options: [
{ label: "Every session, every week — no excuses", score: 10 },
{ label: "Most sessions, minor misses only", score: 8 },
{ label: "About half — hit or miss", score: 6 },
{ label: "Inconsistent — more misses than hits", score: 4 },
{ label: "Rarely or never training", score: 2 }
]
},
{
key: "body_sleep_quality",
pillar: "Physical Discipline",
subpillar: "Consistency",
prompt: "How would you rate your sleep quality and consistency over the last 2 weeks?",
answerType: "ranged_choice",
options: [
{ label: "Solid — consistent sleep and wake time, feel rested", score: 10 },
{ label: "Mostly good with occasional disruption", score: 8 },
{ label: "Mixed — some good nights, some bad", score: 6 },
{ label: "Poor — irregular and rarely feel recovered", score: 4 },
{ label: "Very poor — chronic sleep problems", score: 2 }
]
},
{
key: "body_nutrition_discipline",
pillar: "Physical Discipline",
subpillar: "Consistency",
prompt: "How aligned is your nutrition with your physical goals right now?",
answerType: "ranged_choice",
options: [
{ label: "Fully locked in — eating matches my goals", score: 10 },
{ label: "Mostly on track with minor slip-ups", score: 8 },
{ label: "Aware of what I should do but inconsistent", score: 6 },
{ label: "Frequently off — food is a weak point", score: 4 },
{ label: "No real structure around nutrition", score: 2 }
]
},
{
key: "body_waist_awareness",
pillar: "Physical Discipline",
subpillar: "Condition",
prompt: "How aware are you of your current body condition metrics (weight, waist, measurements)?",
answerType: "ranged_choice",
options: [
{ label: "I track regularly and know my numbers", score: 10 },
{ label: "I check occasionally and have a rough idea", score: 8 },
{ label: "I have a general sense but don't track", score: 6 },
{ label: "I avoid checking — don't really want to know", score: 4 },
{ label: "No awareness at all", score: 2 }
]
},
{
key: "body_physical_appearance",
pillar: "Physical Discipline",
subpillar: "Condition",
prompt: "How would you honestly describe your current physical condition?",
answerType: "ranged_choice",
options: [
{ label: "Sharp — lean, strong, and well-maintained", score: 10 },
{ label: "Decent — some room to improve but not embarrassing", score: 8 },
{ label: "Average — clearly not a priority right now", score: 6 },
{ label: "Below where I want to be — declining", score: 4 },
{ label: "Poor — physically neglected", score: 2 }
]
},
{
key: "body_cardio_capability",
pillar: "Physical Discipline",
subpillar: "Capability",
prompt: "How would you rate your current cardiovascular fitness (endurance, stamina)?",
answerType: "ranged_choice",
options: [
{ label: "High — I can push hard without gassing out", score: 10 },
{ label: "Above average — solid base fitness", score: 8 },
{ label: "Average — functional but not impressive", score: 6 },
{ label: "Below average — I get winded easily", score: 4 },
{ label: "Poor — minimal cardio capacity", score: 2 }
]
},
{
key: "body_strength_capability",
pillar: "Physical Discipline",
subpillar: "Capability",
prompt: "How would you rate your current strength and physical output?",
answerType: "ranged_choice",
options: [
{ label: "Strong — I am physically capable and improving", score: 10 },
{ label: "Solid — decent strength, maintained", score: 8 },
{ label: "Average — not a focus, just functional", score: 6 },
{ label: "Weak relative to where I should be", score: 4 },
{ label: "Significantly deconditioned", score: 2 }
]
},
{
key: "body_training_frequency",
pillar: "Physical Discipline",
subpillar: "Capability",
prompt: "How many intentional exercise sessions do you complete in a typical week?",
answerType: "fixed_choice",
options: [
{ label: "5 or more", value: "5+", score: 10 },
{ label: "4", value: "4", score: 8 },
{ label: "3", value: "3", score: 7 },
{ label: "2", value: "2", score: 5 },
{ label: "1", value: "1", score: 3 },
{ label: "0", value: "0", score: 1 }
]
},
{
key: "body_alcohol_substances",
pillar: "Physical Discipline",
subpillar: "Consistency",
prompt: "How much does alcohol or recreational substances affect your physical performance or habits?",
answerType: "ranged_choice",
options: [
{ label: "Minimal or none — not a factor", score: 10 },
{ label: "Occasional and controlled — minor impact", score: 8 },
{ label: "Some impact — I notice it affecting recovery", score: 6 },
{ label: "Regular use — clearly affects my performance", score: 4 },
{ label: "Heavy use — a real problem", score: 2 }
]
},
{
key: "body_recovery_practice",
pillar: "Physical Discipline",
subpillar: "Capability",
prompt: "How intentional are you about recovery (sleep, rest days, mobility, stress management)?",
answerType: "ranged_choice",
options: [
{ label: "Very intentional — recovery is part of my system", score: 10 },
{ label: "I pay attention to it most of the time", score: 8 },
{ label: "I know I should but it's inconsistent", score: 6 },
{ label: "I rarely prioritize it", score: 4 },
{ label: "No attention to recovery at all", score: 2 }
]
},
{
key: "body_physical_standards",
pillar: "Physical Discipline",
subpillar: "Consistency",
prompt: "Do you have a clear physical standard — a minimum baseline you hold yourself to?",
answerType: "ranged_choice",
options: [
{ label: "Yes — clear and enforced consistently", score: 10 },
{ label: "I have one in mind and mostly hold to it", score: 8 },
{ label: "Vague — it shifts depending on my mood", score: 6 },
{ label: "Not really — I react instead of hold a standard", score: 4 },
{ label: "No standard at all", score: 2 }
]
},
{
key: "body_physical_momentum",
pillar: "Physical Discipline",
subpillar: "Condition",
prompt: "Which best describes your physical trajectory over the last 3 months?",
answerType: "ranged_choice",
options: [
{ label: "Improving — making visible progress", score: 10 },
{ label: "Maintaining — holding steady", score: 8 },
{ label: "Flat — no real change", score: 6 },
{ label: "Declining — slowly getting worse", score: 4 },
{ label: "Significantly declining", score: 2 }
]
},

// ─── ORDER (13 questions) ──────────────────────────────────────────────────

{
key: "order_living_space",
pillar: "Order",
subpillar: "Physical Order",
prompt: "Which best matches the current state of your main living space?",
answerType: "ranged_choice",
options: [
{ label: "Clean, organized, and ready for guests at any time", score: 10 },
{ label: "Clean with minor disorder", score: 8 },
{ label: "Mixed — some areas clean, some chaotic", score: 6 },
{ label: "Noticeably messy — embarrassing if someone visited", score: 4 },
{ label: "Chronically cluttered or neglected", score: 2 }
]
},
{
key: "order_home_maintenance",
pillar: "Order",
subpillar: "Physical Order",
prompt: "How many unresolved physical problems exist in your home right now (broken items, things needing repair)?",
answerType: "fixed_choice",
options: [
{ label: "0–1", value: "0-1", score: 10 },
{ label: "2–3", value: "2-3", score: 8 },
{ label: "4–5", value: "4-5", score: 6 },
{ label: "6–7", value: "6-7", score: 4 },
{ label: "8 or more", value: "8+", score: 2 }
]
},
{
key: "order_clothing_standard",
pillar: "Order",
subpillar: "Physical Order",
prompt: "How would you describe the current state of your wardrobe and how you present yourself?",
answerType: "ranged_choice",
options: [
{ label: "Sharp — intentional, well-maintained, and consistent", score: 10 },
{ label: "Good — presentable and mostly deliberate", score: 8 },
{ label: "Average — functional but no real standard", score: 6 },
{ label: "Inconsistent — sometimes decent, often not", score: 4 },
{ label: "Neglected — no real care for appearance", score: 2 }
]
},
{
key: "order_car_state",
pillar: "Order",
subpillar: "Physical Order",
prompt: "If you own a vehicle, what is its current state? (If no car, select 'No vehicle')",
answerType: "ranged_choice",
options: [
{ label: "Clean, organized, and operationally sound", score: 10 },
{ label: "Mostly clean with minor clutter", score: 8 },
{ label: "Messy interior but functional", score: 6 },
{ label: "Messy and has unresolved maintenance issues", score: 4 },
{ label: "No vehicle", value: "no_car", score: 5 }
]
},
{
key: "order_daily_plan",
pillar: "Order",
subpillar: "System Order",
prompt: "How many days in the last 7 did you clearly know your plan before the day began?",
answerType: "fixed_choice",
options: [
{ label: "7", value: "7", score: 10 },
{ label: "6", value: "6", score: 9 },
{ label: "5", value: "5", score: 8 },
{ label: "4", value: "4", score: 6 },
{ label: "3", value: "3", score: 5 },
{ label: "2", value: "2", score: 4 },
{ label: "1", value: "1", score: 2 },
{ label: "0", value: "0", score: 1 }
]
},
{
key: "order_calendar_system",
pillar: "Order",
subpillar: "System Order",
prompt: "Which best describes your calendar and planning system right now?",
answerType: "ranged_choice",
options: [
{ label: "Trusted and used daily — I rely on it", score: 10 },
{ label: "Mostly use a real system — consistent enough", score: 8 },
{ label: "Inconsistent — use it sometimes", score: 6 },
{ label: "Rely on memory or reaction", score: 3 },
{ label: "No real planning system", score: 1 }
]
},
{
key: "order_screen_time",
pillar: "Order",
subpillar: "System Order",
prompt: "What is your average daily screen time on your phone (social media, entertainment, browsing)?",
answerType: "fixed_choice",
options: [
{ label: "Under 1 hour", value: "under1", score: 10 },
{ label: "1–2 hours", value: "1-2", score: 8 },
{ label: "2–3 hours", value: "2-3", score: 6 },
{ label: "3–5 hours", value: "3-5", score: 4 },
{ label: "5+ hours", value: "5+", score: 2 }
]
},
{
key: "order_digital_environment",
pillar: "Order",
subpillar: "System Order",
prompt: "How organized is your digital environment (email inbox, files, phone apps, subscriptions)?",
answerType: "ranged_choice",
options: [
{ label: "Clean and intentional — low clutter", score: 10 },
{ label: "Mostly organized with some mess", score: 8 },
{ label: "Mixed — functional but chaotic underneath", score: 6 },
{ label: "Cluttered — I avoid dealing with it", score: 4 },
{ label: "Chaos — completely out of control", score: 2 }
]
},
{
key: "order_task_completion",
pillar: "Order",
subpillar: "System Order",
prompt: "How often do you complete the tasks you schedule or plan for the week?",
answerType: "ranged_choice",
options: [
{ label: "Almost always — I follow through consistently", score: 10 },
{ label: "Most tasks — minor slippage only", score: 8 },
{ label: "About half — reasonable but not tight", score: 6 },
{ label: "Less than half — I over-plan and under-execute", score: 4 },
{ label: "Rarely finish what I plan", score: 2 }
]
},
{
key: "order_friction_points",
pillar: "Order",
subpillar: "Physical Order",
prompt: "How many recurring friction points disrupt your daily flow (no system for keys, constant searching, disorganized workspace)?",
answerType: "fixed_choice",
options: [
{ label: "0–1 — almost friction-free", value: "0-1", score: 10 },
{ label: "2–3", value: "2-3", score: 8 },
{ label: "4–5", value: "4-5", score: 6 },
{ label: "6–7", value: "6-7", score: 4 },
{ label: "8 or more — constant friction", value: "8+", score: 2 }
]
},
{
key: "order_environment_pride",
pillar: "Order",
subpillar: "Physical Order",
prompt: "How proud are you of your physical environment when you walk into it?",
answerType: "ranged_choice",
options: [
{ label: "Proud — it reflects who I am and where I'm going", score: 10 },
{ label: "Decent — it's acceptable and functional", score: 8 },
{ label: "Neutral — I don't really think about it", score: 6 },
{ label: "Mild shame — I know it's not right", score: 4 },
{ label: "Embarrassed — it's a problem I've been avoiding", score: 2 }
]
},
{
key: "order_morning_structure",
pillar: "Order",
subpillar: "System Order",
prompt: "How structured and intentional is your morning routine?",
answerType: "ranged_choice",
options: [
{ label: "Locked in — consistent and energizing every day", score: 10 },
{ label: "Mostly structured with some variance", score: 8 },
{ label: "Some structure but often chaotic", score: 6 },
{ label: "Reactive — I just respond to what comes", score: 4 },
{ label: "No morning structure whatsoever", score: 2 }
]
},
{
key: "order_promises_to_self",
pillar: "Order",
subpillar: "System Order",
prompt: "How consistently do you keep promises you make to yourself (not others — yourself)?",
answerType: "ranged_choice",
options: [
{ label: "Very consistently — my word to myself means something", score: 10 },
{ label: "Usually — I follow through more than I don't", score: 8 },
{ label: "About half — I let myself off the hook too often", score: 6 },
{ label: "Rarely — I break commitments to myself often", score: 4 },
{ label: "Almost never — I don't trust myself", score: 2 }
]
},

// ─── RESPONSIBILITY (13 questions) ────────────────────────────────────────

{
key: "resp_work_performance",
pillar: "Responsibility",
subpillar: "Duties",
prompt: "How would you honestly rate your work performance or professional output right now?",
answerType: "ranged_choice",
options: [
{ label: "Excellent — executing at a high level", score: 10 },
{ label: "Good — solid and consistent", score: 8 },
{ label: "Average — doing what's required, no more", score: 6 },
{ label: "Below standard — I know I'm underperforming", score: 4 },
{ label: "Poor — or currently unemployed without a plan", score: 2 }
]
},
{
key: "resp_financial_awareness",
pillar: "Responsibility",
subpillar: "Duties",
prompt: "How clearly do you know your current financial position (income, expenses, savings, debt)?",
answerType: "ranged_choice",
options: [
{ label: "Completely clear — I track everything", score: 10 },
{ label: "Mostly aware — I check regularly", score: 8 },
{ label: "Rough idea — I avoid looking too closely", score: 6 },
{ label: "Vague — I prefer not to think about it", score: 4 },
{ label: "No awareness — financially avoidant", score: 2 }
]
},
{
key: "resp_savings_habit",
pillar: "Responsibility",
subpillar: "Duties",
prompt: "Are you consistently saving or building financial security right now?",
answerType: "ranged_choice",
options: [
{ label: "Yes — saving consistently with a clear target", score: 10 },
{ label: "Sometimes — saving when I remember or have extra", score: 7 },
{ label: "Not currently saving but breaking even", score: 5 },
{ label: "Spending more than I earn", score: 3 },
{ label: "In serious financial trouble", score: 1 }
]
},
{
key: "resp_debt_management",
pillar: "Responsibility",
subpillar: "Duties",
prompt: "How in control are you of your debt obligations?",
answerType: "ranged_choice",
options: [
{ label: "Debt-free or fully on top of all payments", score: 10 },
{ label: "Managing debt with a clear plan", score: 8 },
{ label: "Meeting minimum obligations but not reducing debt", score: 6 },
{ label: "Struggling to keep up with payments", score: 4 },
{ label: "Behind on payments or in default", score: 2 }
]
},
{
key: "resp_maintenance_duties",
pillar: "Responsibility",
subpillar: "Duties",
prompt: "How on top of your maintenance responsibilities are you (home repairs, vehicle, health appointments, admin tasks)?",
answerType: "ranged_choice",
options: [
{ label: "On top of everything — nothing pending", score: 10 },
{ label: "Mostly current — a few small items", score: 8 },
{ label: "Some backlog — I'll get to it eventually", score: 6 },
{ label: "Significant backlog — been avoiding it", score: 4 },
{ label: "A serious backlog — things are falling apart", score: 2 }
]
},
{
key: "resp_reliability_to_others",
pillar: "Responsibility",
subpillar: "People",
prompt: "How reliable are you to the people who depend on you?",
answerType: "ranged_choice",
options: [
{ label: "Very reliable — people know they can count on me", score: 10 },
{ label: "Mostly reliable — I follow through more than not", score: 8 },
{ label: "Inconsistent — I disappoint people occasionally", score: 6 },
{ label: "Often unreliable — people have noticed", score: 4 },
{ label: "Not dependable — it's caused real damage", score: 2 }
]
},
{
key: "resp_key_relationships",
pillar: "Responsibility",
subpillar: "People",
prompt: "How intentional are you about investing in your key relationships (family, close friends, partner)?",
answerType: "ranged_choice",
options: [
{ label: "Very intentional — I show up consistently", score: 10 },
{ label: "Mostly intentional — I make real effort", score: 8 },
{ label: "Passive — I'm present but not proactive", score: 6 },
{ label: "Neglectful — relationships suffer because of me", score: 4 },
{ label: "No meaningful effort in any relationship", score: 2 }
]
},
{
key: "resp_communication_follow_through",
pillar: "Responsibility",
subpillar: "People",
prompt: "When you say you will do something for or with someone, how often do you actually do it?",
answerType: "ranged_choice",
options: [
{ label: "Almost always — my word means something", score: 10 },
{ label: "Usually — I follow through most of the time", score: 8 },
{ label: "About half — I intend to but life gets in the way", score: 6 },
{ label: "Rarely — I say yes and don't follow through", score: 4 },
{ label: "I avoid making commitments to others", score: 2 }
]
},
{
key: "resp_avoidance_pattern",
pillar: "Responsibility",
subpillar: "Duties",
prompt: "How many important tasks, calls, or obligations are you currently avoiding?",
answerType: "fixed_choice",
options: [
{ label: "0 — nothing on the avoidance list", value: "0", score: 10 },
{ label: "1–2 minor items", value: "1-2", score: 8 },
{ label: "3–5 — some real things I'm not facing", value: "3-5", score: 6 },
{ label: "6–10 — a pattern of avoidance", value: "6-10", score: 4 },
{ label: "10+ — avoidance is defining me right now", value: "10+", score: 2 }
]
},
{
key: "resp_values_alignment",
pillar: "Responsibility",
subpillar: "People",
prompt: "How aligned are your daily choices with what you actually believe is right?",
answerType: "ranged_choice",
options: [
{ label: "Highly aligned — I live by what I believe", score: 10 },
{ label: "Mostly aligned — small compromises only", score: 8 },
{ label: "Some gaps — I know where I'm drifting", score: 6 },
{ label: "Significant misalignment — I act against my values", score: 4 },
{ label: "Deeply out of integrity — major internal conflict", score: 2 }
]
},
{
key: "resp_open_loops",
pillar: "Responsibility",
subpillar: "Duties",
prompt: "How many open loops do you carry right now — unfinished business, unanswered messages, broken promises, unresolved conflicts?",
answerType: "fixed_choice",
options: [
{ label: "Almost none — I keep a clean slate", value: "0-1", score: 10 },
{ label: "2–4 — manageable", value: "2-4", score: 8 },
{ label: "5–8 — noticeable weight", value: "5-8", score: 6 },
{ label: "9–15 — it affects my energy", value: "9-15", score: 4 },
{ label: "15+ — I feel buried", value: "15+", score: 2 }
]
},
{
key: "resp_conflict_resolution",
pillar: "Responsibility",
subpillar: "People",
prompt: "How do you handle conflict, hard conversations, and interpersonal tension?",
answerType: "ranged_choice",
options: [
{ label: "I address it directly and in a timely way", score: 10 },
{ label: "I usually face it though it's uncomfortable", score: 8 },
{ label: "I delay but eventually address it", score: 6 },
{ label: "I avoid it — let things fester", score: 4 },
{ label: "I consistently avoid hard conversations", score: 2 }
]
},
{
key: "resp_professional_trajectory",
pillar: "Responsibility",
subpillar: "Duties",
prompt: "How would you describe your professional trajectory over the past 6 months?",
answerType: "ranged_choice",
options: [
{ label: "Advancing — clear growth and momentum", score: 10 },
{ label: "Stable — holding my ground well", score: 8 },
{ label: "Flat — not growing but not declining", score: 6 },
{ label: "Declining — slipping or stagnating", score: 4 },
{ label: "In serious trouble or without direction", score: 2 }
]
},

// ─── MASTERY (12 questions) ────────────────────────────────────────────────

{
key: "mastery_pursuit_clarity",
pillar: "Mastery",
subpillar: "Pursuit",
prompt: "Do you have one clear pursuit or skill you are actively developing right now?",
answerType: "ranged_choice",
options: [
{ label: "Yes — one clear thing I am building deliberately", score: 10 },
{ label: "Yes — though I could be more focused", score: 8 },
{ label: "I have ideas but haven't chosen one", score: 6 },
{ label: "I dabble in several things, mastering none", score: 4 },
{ label: "No real pursuit at all", score: 2 }
]
},
{
key: "mastery_deliberate_practice",
pillar: "Mastery",
subpillar: "Practice",
prompt: "How intentional is your practice in your chosen pursuit? Are you practicing deliberately or just going through motions?",
answerType: "ranged_choice",
options: [
{ label: "Highly deliberate — I know what I'm working on each session", score: 10 },
{ label: "Mostly deliberate — clear direction most of the time", score: 8 },
{ label: "Somewhat — some sessions have purpose, some don't", score: 6 },
{ label: "Low intentionality — I show up but drift", score: 4 },
{ label: "No real deliberate practice", score: 2 }
]
},
{
key: "mastery_weekly_hours",
pillar: "Mastery",
subpillar: "Practice",
prompt: "How many hours per week do you invest in deliberate practice or skill development in your main pursuit?",
answerType: "fixed_choice",
options: [
{ label: "10+ hours", value: "10+", score: 10 },
{ label: "7–9 hours", value: "7-9", score: 9 },
{ label: "5–6 hours", value: "5-6", score: 8 },
{ label: "3–4 hours", value: "3-4", score: 6 },
{ label: "1–2 hours", value: "1-2", score: 4 },
{ label: "Less than 1 hour", value: "<1", score: 2 }
]
},
{
key: "mastery_visible_progress",
pillar: "Mastery",
subpillar: "Practice",
prompt: "Can you point to visible, measurable progress in your pursuit over the last 90 days?",
answerType: "ranged_choice",
options: [
{ label: "Yes — clear, undeniable improvement I can show", score: 10 },
{ label: "Yes — meaningful progress though not always visible", score: 8 },
{ label: "Some progress but inconsistent", score: 6 },
{ label: "Minimal — I've been going through motions", score: 4 },
{ label: "No real progress", score: 2 }
]
},
{
key: "mastery_output_proof",
pillar: "Mastery",
subpillar: "Practice",
prompt: "Are you producing real output from your pursuit — work, results, recordings, reps, creations?",
answerType: "ranged_choice",
options: [
{ label: "Yes — consistent tangible output", score: 10 },
{ label: "Mostly — I produce but could be more consistent", score: 8 },
{ label: "Occasionally — I produce in bursts", score: 6 },
{ label: "Rarely — I think about it more than I do it", score: 4 },
{ label: "No real output", score: 2 }
]
},
{
key: "mastery_consistency_streak",
pillar: "Mastery",
subpillar: "Practice",
prompt: "What is your longest recent unbroken streak of deliberate practice in your pursuit?",
answerType: "fixed_choice",
options: [
{ label: "30+ days", value: "30+", score: 10 },
{ label: "14–29 days", value: "14-29", score: 8 },
{ label: "7–13 days", value: "7-13", score: 6 },
{ label: "3–6 days", value: "3-6", score: 4 },
{ label: "2 days or less", value: "0-2", score: 2 }
]
},
{
key: "mastery_distraction_resistance",
pillar: "Mastery",
subpillar: "Pursuit",
prompt: "How well do you protect your practice time from distraction and interruption?",
answerType: "ranged_choice",
options: [
{ label: "Very well — sessions are focused and protected", score: 10 },
{ label: "Mostly — I maintain focus with minor disruptions", score: 8 },
{ label: "Average — I get distracted sometimes", score: 6 },
{ label: "Often distracted — sessions lose focus easily", score: 4 },
{ label: "I can't stay focused in practice", score: 2 }
]
},
{
key: "mastery_feedback_loop",
pillar: "Mastery",
subpillar: "Practice",
prompt: "Do you have feedback, coaching, or measurement to track your actual improvement?",
answerType: "ranged_choice",
options: [
{ label: "Yes — I have clear measurement and/or real feedback", score: 10 },
{ label: "Mostly — I track progress reasonably well", score: 8 },
{ label: "Somewhat — informal tracking only", score: 6 },
{ label: "Minimal — I feel like I'm improving but have no proof", score: 4 },
{ label: "No feedback or measurement at all", score: 2 }
]
},
{
key: "mastery_identity_alignment",
pillar: "Mastery",
subpillar: "Pursuit",
prompt: "How much does your chosen pursuit align with who you are trying to become?",
answerType: "ranged_choice",
options: [
{ label: "Completely — this is central to who I'm becoming", score: 10 },
{ label: "Strongly — it matters a great deal", score: 8 },
{ label: "Reasonably — it's meaningful but not core", score: 6 },
{ label: "Loosely — it's something I do, not who I am", score: 4 },
{ label: "No real connection to identity", score: 2 }
]
},
{
key: "mastery_long_term_commitment",
pillar: "Mastery",
subpillar: "Pursuit",
prompt: "How committed are you to your pursuit long-term — even when it's slow and unrewarding?",
answerType: "ranged_choice",
options: [
{ label: "Fully committed — this is a non-negotiable path", score: 10 },
{ label: "Strongly committed — I won't abandon it easily", score: 8 },
{ label: "Committed but with doubts", score: 6 },
{ label: "Wavering — I've considered quitting", score: 4 },
{ label: "I quit pursuits when they get hard — pattern of starting and stopping", score: 2 }
]
},
{
key: "mastery_skill_gap_awareness",
pillar: "Mastery",
subpillar: "Practice",
prompt: "Do you know specifically what you need to improve in your pursuit right now?",
answerType: "ranged_choice",
options: [
{ label: "Yes — I know my exact next improvement target", score: 10 },
{ label: "Mostly — I have a clear general direction", score: 8 },
{ label: "Somewhat — I have a rough idea", score: 6 },
{ label: "Vague — I practice but can't pinpoint gaps", score: 4 },
{ label: "No clarity on what needs improving", score: 2 }
]
},
{
key: "mastery_environment_support",
pillar: "Mastery",
subpillar: "Pursuit",
prompt: "Does your environment support your practice? (dedicated space, tools, reduced friction to start)",
answerType: "ranged_choice",
options: [
{ label: "Yes — my environment makes it easy to start and stay in", score: 10 },
{ label: "Mostly — setup is manageable", score: 8 },
{ label: "Neutral — no real support but no real barrier", score: 6 },
{ label: "My environment works against my practice", score: 4 },
{ label: "Severe environmental barriers to practice", score: 2 }
]
}
```

]
};
