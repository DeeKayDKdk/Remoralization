create table if not exists cycles (
id uuid primary key,
user_id uuid not null references profiles(id) on delete cascade,
baseline_id uuid references baselines(id) on delete set null,
created_at timestamptz not null default now(),
updated_at timestamptz not null default now(),
cycle_number integer not null,
start_date date not null,
end_date date not null,
status text not null default 'planned',

focus_pillar text not null,
bottleneck text,
challenge_name text not null,
challenge_summary text,

completion_status text,
outcome_direction text,
reflection text,
next_move text,

proof_required_summary text,
proof_submitted_summary text,

starting_total_score integer,
ending_total_score integer,
starting_body_score integer,
ending_body_score integer,
starting_order_score integer,
ending_order_score integer,
starting_responsibility_score integer,
ending_responsibility_score integer,
starting_mastery_score integer,
ending_mastery_score integer
);
