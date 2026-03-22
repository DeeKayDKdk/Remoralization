create table if not exists baselines (
id uuid primary key,
user_id uuid not null references profiles(id) on delete cascade,
created_at timestamptz not null default now(),
baseline_number integer not null,
status text not null default 'completed',

body_benchmark_type text,
mastery_pursuit text,
result_name text,
self_identified_weakest_area text,
self_identified_cost_area text,

total_score integer not null,
body_score integer not null,
order_score integer not null,
responsibility_score integer not null,
mastery_score integer not null,

strongest_pillar text not null,
weakest_pillar text not null,
secondary_weakness text,
diagnosis_type text not null,
diagnosis_summary text not null,
main_bottleneck text not null,
recommended_challenge text not null,
next_move text not null,
share_text text not null,

score_band text,
self_perception_match boolean,
prior_baseline_id uuid references baselines(id) on delete set null,
score_change_from_prior integer,
body_change_from_prior integer,
order_change_from_prior integer,
responsibility_change_from_prior integer,
mastery_change_from_prior integer
);
