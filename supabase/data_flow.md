# Remoralization data flow

1. A user signs up or logs in.
2. A profile row is created or loaded.
3. The user completes a baseline.
4. A baselines row is created.
5. The baseline answers are saved into baseline_answers.
6. The app computes total score, pillar scores, diagnosis, bottleneck, and recommended challenge.
7. The baseline results page loads from the saved baseline row.
8. When the user starts a 14-day challenge, a cycles row is created.
9. The challenge actions are saved as commitments.
10. Future retakes compare new baseline rows against prior baseline rows.
