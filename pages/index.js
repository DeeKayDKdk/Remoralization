<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Operation Remoralization</title>
  <style>
    :root {
      --bg-dark: #0b0b0b;
      --bg-darker: #000;
      --bg-light: #f3f4f6;
      --text: #111827;
      --muted: #6b7280;
      --brand: #f59e0b;
      --white: #fff;
      --card: #fff;
      --border: #e5e7eb;
      --green: #047857;
      --yellow-600: #ca8a04;
      --shadow: 0 10px 25px rgba(0,0,0,.12);
      --radius: 16px;
    }
    * { box-sizing: border-box; }
    html, body { height: 100%; }
    body {
      margin: 0;
      font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
      color: var(--text);
      background: var(--bg-light);
    }
    .hidden { display: none !important; }
    /* Buttons */
    .btn {
      appearance: none; border: 1px solid transparent; cursor: pointer;
      padding: 12px 20px; border-radius: 16px; font-weight: 700; font-size: 14px;
      transition: transform .02s ease, opacity .2s ease;
    }
    .btn:active { transform: translateY(1px); }
    .btn-primary { background: var(--brand); color: #111; }
    .btn-primary:hover { opacity: .9; }
    .btn-ghost { background: var(--white); color: #111; border-color: var(--border); }
    .btn-ghost:hover { opacity: .95; }
    .btn:disabled { opacity: .6; cursor: not-allowed; }
    /* Layouts */
    .center-screen {
      min-height: 100vh; display: flex; flex-direction: column;
      align-items: center; justify-content: center; padding: 24px;
      color: #fff;
      background: radial-gradient(1000px 600px at 50% -20%, #1f2937, transparent),
                  radial-gradient(800px 500px at 100% 10%, #111827, transparent),
                  linear-gradient(135deg, #111827, #000);
      text-align: center;
    }
    h1 { font-size: clamp(32px, 5vw, 56px); margin: 0 0 16px; }
    .subtitle { font-size: 18px; max-width: 700px; margin: 0 auto 28px; opacity: .9; }
    .row { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; }
    /* How view */
    .container { max-width: 1140px; margin: 0 auto; padding: 32px 16px; }
    .title { text-align: center; font-size: clamp(28px, 4vw, 40px); font-weight: 800; margin: 0 0 16px; }
    .lead { text-align: center; max-width: 820px; margin: 0 auto 8px; }
    .highlight { text-align: center; color: var(--yellow-600); font-weight: 800; margin: 8px 0 28px; }
    .grid {
      display: grid; gap: 20px;
      grid-template-columns: repeat(1, minmax(0,1fr));
    }
    @media (min-width: 900px) { .grid { grid-template-columns: repeat(2, minmax(0,1fr)); } }
    .card {
      background: var(--card); border: 1px solid var(--border); border-radius: var(--radius);
      box-shadow: var(--shadow); padding: 20px;
    }
    .card h3 { margin: 0; font-size: 18px; }
    .flex-between { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
    .score { display: flex; align-items: center; gap: 8px; color: var(--muted); font-size: 13px; }
    .select, .input, .textarea {
      width: 100%; border: 1px solid var(--border); border-radius: 10px; padding: 10px 12px;
      font-size: 14px; background: #fff; color: #111;
    }
    .textarea { min-height: 100px; resize: vertical; }
    .hint { color: var(--muted); font-size: 12px; margin: 6px 0 10px; }
    .delta { color: var(--yellow-600); font-weight: 700; font-size: 13px; margin: 4px 0 0; }
    .center { text-align: center; }
    .muted { color: var(--muted); }
    .green { color: var(--green); font-weight: 700; }
    .footer {
      margin-top: 48px; text-align: center; max-width: 760px; margin-left: auto; margin-right: auto;
      color: #374151;
    }
    .toast {
      position: fixed; right: 24px; bottom: 24px; background: #000; color: #fff;
      padding: 10px 14px; border-radius: 10px; box-shadow: var(--shadow); display: none;
    }
  </style>
</head>
<body>

  <!-- HOME VIEW -->
  <section id="homeView" class="center-screen">
    <h1>Operation Remoralization</h1>
    <p class="subtitle">Six pillars. Bi-weekly reporting. Human accountability.</p>
    <div class="row">
      <button id="showHowBtn" class="btn btn-primary" aria-label="Show How It Works">Show How It Works</button>
      <button id="joinBtn" class="btn btn-ghost" aria-label="Join for $10/month">Join for $10/month</button>
    </div>
  </section>

  <!-- HOW IT WORKS / REPORTING VIEW -->
  <section id="howView" class="hidden">
    <div class="container">
      <h2 class="title">How It Works</h2>
      <p class="lead">Every two weeks you report against six pillars. A real human reads, replies, and holds you to your own standards.</p>
      <p class="highlight">Exceptional effort and results will be rewarded.</p>

      <div id="cards" class="grid"></div>

      <div class="center" style="margin-top: 24px;">
        <div class="row" style="justify-content:center; margin-bottom: 10px;">
          <button id="submitBtn" class="btn btn-primary" aria-label="Submit Report">Submit Report</button>
          <button id="backBtn" class="btn btn-ghost" aria-label="Back to Home">Back to Home</button>
        </div>
        <p class="muted">Total score: <span id="totalScore" style="font-weight:700">0</span> / 24</p>
        <p id="eligibility" class="muted"></p>
      </div>

      <div class="footer">
        <p>People don’t need more AI slop.</p>
        <p>People don’t need an algorithm to reaffirm themselves.</p>
        <p>People don’t need more consumption.</p>
        <p>People don’t need long self-help books.</p>
        <p style="font-weight:800; font-size:18px; margin-top:10px;">People need a purpose.</p>
        <p style="font-weight:800; font-size:18px;">People need simple standards and human accountability.</p>
      </div>
    </div>
  </section>

  <div id="toast" class="toast" role="status" aria-live="polite"></div>

  <script>
    // ----- State -----
    const ELIGIBLE_THRESHOLD = 18;
    const pillars = [
      {
        title: "Physical Discipline",
        question: "What did you do to maintain or improve your body?",
        example: "Workouts, weight change, diet discipline.",
        report: "",
        score: 0
      },
      {
        title: "Responsibility to Others",
        question: "How did you support or serve others?",
        example: "Helping family, mentoring, volunteering.",
        report: "",
        score: 0
      },
      {
        title: "Belief System & Morality",
        question: "How did you act according to your values?",
        example: "Honesty, self-restraint, faith under pressure.",
        report: "",
        score: 0
      },
      {
        title: "Skill & Mastery",
        question: "What did you do to improve in your pursuit?",
        example: "Hours studied, practice sessions, achievements.",
        report: "",
        score: 0
      },
      {
        title: "Self-Reliance",
        question: "How did you increase independence?",
        example: "Savings, cooking, new practical skills.",
        report: "",
        score: 0
      },
      {
        title: "Integrity & Consistency",
        question: "Did you keep promises and follow through?",
        example: "Yes/No with brief reflection.",
        report: "",
        score: 0
      }
    ];

    let lastBodyFat = "";
    let currentBodyFat = "";

    // ----- Elements -----
    const homeView = document.getElementById("homeView");
    const howView = document.getElementById("howView");
    const showHowBtn = document.getElementById("showHowBtn");
    const joinBtn = document.getElementById("joinBtn");
    const backBtn = document.getElementById("backBtn");
    const submitBtn = document.getElementById("submitBtn");
    const cardsEl = document.getElementById("cards");
    const totalScoreEl = document.getElementById("totalScore");
    const eligibilityEl = document.getElementById("eligibility");
    const toastEl = document.getElementById("toast");

    // ----- Helpers -----
    function deltaBodyFatText(lastStr, currStr) {
      const last = parseFloat(lastStr);
      const curr = parseFloat(currStr);
      if (!isNaN(last) && !isNaN(curr)) {
        const diff = curr - last;
        const sign = diff > 0 ? "+" : diff < 0 ? "" : "±";
        return `${sign}${diff.toFixed(1)}% since last period`;
      }
      return "";
    }

    function computeTotalScore() {
      return pillars.reduce((sum, p) => sum + (Number.isFinite(p.score) ? p.score : 0), 0);
    }

    function updateTotalsUI() {
      const total = computeTotalScore();
      totalScoreEl.textContent = total;
      if (total >= ELIGIBLE_THRESHOLD) {
        eligibilityEl.className = "green";
        eligibilityEl.textContent = "Eligible for reward this period";
      } else {
        eligibilityEl.className = "muted";
        eligibilityEl.textContent = `Need ${Math.max(0, ELIGIBLE_THRESHOLD - total)} more points for eligibility`;
      }
    }

    function showToast(msg) {
      toastEl.textContent = msg;
      toastEl.style.display = "block";
      setTimeout(() => { toastEl.style.display = "none"; }, 3000);
    }

    function switchView(which) {
      if (which === "how") {
        homeView.classList.add("hidden");
        howView.classList.remove("hidden");
        renderCards();
        updateTotalsUI();
      } else {
        howView.classList.add("hidden");
        homeView.classList.remove("hidden");
      }
    }

    // ----- Rendering -----
    function renderCards() {
      // Build HTML once
      const html = pillars.map((pillar, i) => {
        const isPhysical = i === 0;
        return `
          <div class="card">
            <div class="flex-between">
              <h3>${pillar.title}</h3>
              <div class="score">
                <label for="score-${i}">Score</label>
                <select id="score-${i}" class="select" aria-label="Score for ${pillar.title}">
                  <option value="0"${pillar.score===0?" selected":""}>0 – none</option>
                  <option value="1"${pillar.score===1?" selected":""}>1 – minimal</option>
                  <option value="2"${pillar.score===2?" selected":""}>2 – decent</option>
                  <option value="3"${pillar.score===3?" selected":""}>3 – strong</option>
                  <option value="4"${pillar.score===4?" selected":""}>4 – exceptional</option>
                </select>
              </div>
            </div>
            <p style="font-weight:700; font-size:14px; margin:10px 0 6px;">${pillar.question}</p>
            <p class="hint">${pillar.example}</p>

            ${isPhysical ? `
              <div style="margin: 10px 0 8px;">
                <input id="lastBodyFat" class="input" placeholder="Last Period Body Fat %" value="${lastBodyFat}">
                <div style="height:8px;"></div>
                <input id="currentBodyFat" class="input" placeholder="Current Body Fat %" value="${currentBodyFat}">
                <p id="deltaText" class="delta">${deltaBodyFatText(lastBodyFat, currentBodyFat)}</p>
              </div>
            ` : ``}

            <textarea id="report-${i}" class="textarea" placeholder="My Report...">${pillar.report || ""}</textarea>
          </div>
        `;
      }).join("");
      cardsEl.innerHTML = html;

      // Attach listeners
      pillars.forEach((_, i) => {
        const scoreSel = document.getElementById(`score-${i}`);
        const reportArea = document.getElementById(`report-${i}`);

        scoreSel.addEventListener("change", (e) => {
          pillars[i].score = Number(e.target.value);
          updateTotalsUI();
        });
        reportArea.addEventListener("input", (e) => {
          pillars[i].report = e.target.value;
        });
      });

      // Physical extras listeners
      const lastBF = document.getElementById("lastBodyFat");
      const currBF = document.getElementById("currentBodyFat");
      const deltaText = document.getElementById("deltaText");
      if (lastBF && currBF && deltaText) {
        const handler = () => {
          lastBodyFat = lastBF.value;
          currentBodyFat = currBF.value;
          deltaText.textContent = deltaBodyFatText(lastBodyFat, currentBodyFat);
        };
        lastBF.addEventListener("input", handler);
        currBF.addEventListener("input", handler);
      }
    }

    // ----- Events -----
    showHowBtn.addEventListener("click", () => switchView("how"));
    backBtn.addEventListener("click", () => switchView("home"));
    joinBtn.addEventListener("click", () => alert("Redirect to checkout placeholder"));

    submitBtn.addEventListener("click", () => {
      submitBtn.disabled = true;
      const payload = {
        timestamp: new Date().toISOString(),
        pillars,
        lastBodyFat,
        currentBodyFat,
        totalScore: computeTotalScore(),
        eligible: computeTotalScore() >= ELIGIBLE_THRESHOLD
      };
      try {
        localStorage.setItem("operation-remoralization:lastSubmission", JSON.stringify(payload));
        showToast("Report submitted successfully!");
      } catch {
        showToast("Saved for this session (localStorage unavailable).");
      }
      setTimeout(() => { submitBtn.disabled = false; }, 500);
    });

    // Start on HOW view if you prefer:
    // switchView("how");
  </script>
</body>
</html>
