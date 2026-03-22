# Remoralization schema notes

## profiles
Stores one row per user and current summary values for dashboard loading.

## baselines
Stores one row per completed baseline assessment, including computed scores, diagnosis, bottleneck, and recommended challenge.

## baseline_answers
Stores every answer from each baseline so results can be compared over time at the question level.

## cycles
Stores one row per 14-day cycle, including focus pillar, challenge, progress direction, and start/end score snapshots.

## commitments
Stores the specific commitments inside each cycle so the challenge becomes trackable and operational.
