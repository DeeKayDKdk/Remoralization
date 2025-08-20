"use client";

export default function Page() {
  return (
    <main>
      <style>{`
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
        .grid { display: grid; gap: 20px; grid-template-columns: repeat(1, minmax(0,1fr)); }
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
      `}</style>

      {/* HOME VIEW */}
      <section id="homeView" className="center-screen">
        <h1>Operation Remoralization</h1>
        <p className="subtitle">Six pillars. Bi-weekly reporting. Human accountability.</p>
        <div className="row">
          <button id="showHowBtn" className="btn btn-primary" aria-label="Show How It Works">Show How It Works</button>
          <button id="joinBtn" className="btn btn-ghost" aria-label="Join for $10/month">Join for $10/month</button>
        </div>
      </section>

      {/* HOW IT WORKS / REPORTING VIEW */}
      <section id="howView" className="hidden">
        <div className="container">
          <h2 className="title">How It Works</h2>
          <p className="lead">Every two weeks you report against six pillars. A real human reads, replies, and holds you to your own standards.</p>
          <p className="highlight">Exceptional effort and results will be rewarded.</p>

          <div id="cards" className="grid"></div>

          <div style={{ textAlign: "center", marginTop: 24 }}>
            <div className="row" style={{ justifyContent: "center", marginBottom: 10 }}>
              <button id="submitBtn" className="btn btn-primary" aria-label="Submit Report">Submit Report</button>
              <button id="backBtn" className="btn btn-ghost" aria-label="Back to Home">Back to Home</button>
            </div>
            <p className="muted">Total score: <span id="totalScore" style={{ fontWeight: 700 }}>0</span> / 24</p>
            <p id="eligibility" className="muted"></p>
          </div>

          <div className="footer">
            <p>People don’t need more AI slop.</p>
            <p>People don’t need an algorithm to reaffirm themselves.</p>
            <p>People don’t need more consumption.</p>
            <p>People don’t need long self-help books.</p>
            <p style={{ fontWeight: 800, fontSize: 18, marginTop: 10 }}>People need a purpose.</p>
            <p style={{ fontWeight: 800, fontSize: 18 }}>People need simple standards and human accountability.</p>
          </div>
        </div>
      </section>

      <div id="toast" className="toast" role="status" aria-live="polite"></div>

      {/* Inline vanilla JS—no imports, no hooks */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          (function(){
            var ELIGIBLE_THRESHOLD = 18;
            var pillars = [
              { title:"Physical Discipline", question:"What did you do to maintain or improve your body?", example:"Workouts, weight change, diet discipline.", report:"", score:0 },
              { title:"Responsibility to Others", question:"How did you support or serve others?", example:"Helping family, mentoring, volunteering.", report:"", score:0 },
              { title:"Belief System & Morality", question:"How did you act according to your values?", example:"Honesty, self-restraint, faith under pressure.", report:"", score:0 },
              { title:"Skill & Mastery", question:"What did you do to improve in your pursuit?", example:"Hours studied, practice sessions, achievements.", report:"", score:0 },
              { title:"Self-Reliance", question:"How did you increase independence?", example:"Savings, cooking, new practical skills.", report:"", score:0 },
              { title:"Integrity & Consistency", question:"Did you keep promises and follow through?", example:"Yes/No with brief reflection.", report:"", score:0 }
            ];
            var lastBodyFat = ""; var currentBodyFat = "";

            var homeView = document.getElementById("homeView");
            var howView = document.getElementById("howView");
            var showHowBtn = document.getElementById("showHowBtn");
            var joinBtn = document.getElementById("joinBtn");
            var backBtn = document.getElementById("backBtn");
            var submitBtn = document.getElementById("submitBtn");
            var cardsEl = document.getElementById("cards");
            var totalScoreEl = document.getElementById("totalScore");
            var eligibilityEl = document.getElementById("eligibility");
            var toastEl = document.getElementById("toast");

            function deltaBodyFatText(lastStr, currStr) {
              var last = parseFloat(lastStr);
              var curr = parseFloat(currStr);
              if (!isNaN(last) && !isNaN(curr)) {
                var diff = curr - last;
                var sign = diff > 0 ? "+" : diff < 0 ? "" : "±";
                return sign + diff.toFixed(1) + "% since last period";
              }
              return "";
            }
            function computeTotalScore() {
              var sum = 0;
              for (var i=0; i<pillars.length; i++) {
                var s = pillars[i].score;
                sum += (isFinite(s) ? s : 0);
              }
              return sum;
            }
            function updateTotalsUI() {
              var total = computeTotalScore();
              totalScoreEl.textContent = total;
              if (total >= ELIGIBLE_THRESHOLD) {
                eligibilityEl.className = "green";
                eligibilityEl.textContent = "Eligible for reward this period";
              } else {
                eligibilityEl.className = "muted";
                eligibilityEl.textContent = "Need " + Math.max(0, ELIGIBLE_THRESHOLD - total) + " more points for eligibility";
              }
            }
            function showToast(msg) {
              toastEl.textContent = msg;
              toastEl.style.display = "block";
              setTimeout(function(){ toastEl.style.display = "none"; }, 3000);
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
            function renderCards() {
              var html = "";
              for (var i=0; i<pillars.length; i++) {
                var p = pillars[i];
                var isPhysical = (i === 0);
                html += '<div class="card">';
                html +=   '<div class="flex-between">';
                html +=     '<h3>' + p.title + '</h3>';
                html +=     '<div class="score">';
                html +=       '<label for="score-' + i + '">Score</label>';
                html +=       '<select id="score-' + i + '" class="select" aria-label="Score for ' + p.title + '">';
                html +=         '<option value="0"' + (p.score===0 ? ' selected' : '') + '>0 – none</option>';
                html +=         '<option value="1"' + (p.score===1 ? ' selected' : '') + '>1 – minimal</option>';
                html +=         '<option value="2"' + (p.score===2 ? ' selected' : '') + '>2 – decent</option>';
                html +=         '<option value="3"' + (p.score===3 ? ' selected' : '') + '>3 – strong</option>';
                html +=         '<option value="4"' + (p.score===4 ? ' selected' : '') + '>4 – exceptional</option>';
                html +=       '</select>';
                html +=     '</div></div>';
                html +=   '<p style="font-weight:700; font-size:14px; margin:10px 0 6px;">' + p.question + '</p>';
                html +=   '<p class="hint">' + p.example + '</p>';

                if (isPhysical) {
                  html += '<div style="margin: 10px 0 8px;">';
                  html +=   '<input id="lastBodyFat" class="input" placeholder="Last Period Body Fat %" value="' + (lastBodyFat || '') + '">';
                  html +=   '<div style="height:8px;"></div>';
                  html +=   '<input id="currentBodyFat" class="input" placeholder="Current Body Fat %" value="' + (currentBodyFat || '') + '">';
                  html +=   '<p id="deltaText" class="delta">' + deltaBodyFatText(lastBodyFat, currentBodyFat) + '</p>';
                  html += '</div>';
                }

                html +=   '<textarea id="report-' + i + '" class="textarea" placeholder="My Report...">' + (p.report || '') + '</textarea>';
                html += '</div>';
              }
              cardsEl.innerHTML = html;

              for (var i=0; i<pillars.length; i++) {
                (function(idx){
                  var scoreSel = document.getElementById("score-" + idx);
                  var reportArea = document.getElementById("report-" + idx);
                  scoreSel.addEventListener("change", function(e){
                    pillars[idx].score = Number(e.target.value);
                    updateTotalsUI();
                  });
                  reportArea.addEventListener("input", function(e){
                    pillars[idx].report = e.target.value;
                  });
                })(i);
              }

              var lastBF = document.getElementById("lastBodyFat");
              var currBF = document.getElementById("currentBodyFat");
              var deltaText = document.getElementById("deltaText");
              if (lastBF && currBF && deltaText) {
                var handler = function(){
                  lastBodyFat = lastBF.value;
                  currentBodyFat = currBF.value;
                  deltaText.textContent = deltaBodyFatText(lastBodyFat, currentBodyFat);
                };
                lastBF.addEventListener("input", handler);
                currBF.addEventListener("input", handler);
              }
            }

            showHowBtn.addEventListener("click", function(){ switchView("how"); });
            backBtn.addEventListener("click", function(){ switchView("home"); });
            joinBtn.addEventListener("click", function(){ alert("Redirect to checkout placeholder"); });

            submitBtn.addEventListener("click", function(){
              submitBtn.disabled = true;
              var payload = {
                timestamp: new Date().toISOString(),
                pillars: pillars,
                lastBodyFat: lastBodyFat,
                currentBodyFat: currentBodyFat,
                totalScore: computeTotalScore(),
                eligible: computeTotalScore() >= ELIGIBLE_THRESHOLD
              };
              try {
                localStorage.setItem("operation-remoralization:lastSubmission", JSON.stringify(payload));
                showToast("Report submitted successfully!");
              } catch (e) {
                showToast("Saved for this session (localStorage unavailable).");
              }
              setTimeout(function(){ submitBtn.disabled = false; }, 500);
            });
          })();
        `}}
      />
    </main>
  );
}
