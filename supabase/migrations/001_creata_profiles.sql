create table if not exists profiles (
id uuid primary key,
created_at timestamptz not null default now(),
updated_at timestamptz not null default now(),
display_name text,
email text,
current_total_score integer,
current_body_score integer,
current_order_score integer,
current_responsibility_score integer,
current_mastery_score integer,
current_strongest_pillar text,
current_weakest_pillar text,
current_diagnosis_type text,
current_cycle_id uuid,
baseline_count integer not null default 0,
cycle_count integer not null default 0
);
