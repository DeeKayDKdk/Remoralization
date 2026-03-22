create table if not exists baseline_answers (
id uuid primary key,
baseline_id uuid not null references baselines(id) on delete cascade,
user_id uuid not null references profiles(id) on delete cascade,
created_at timestamptz not null default now(),
question_key text not null,
pillar text,
subcategory text,
question_text text not null,
answer_type text not null,
raw_answer_text text,
raw_answer_number numeric,
raw_answer_option text,
score_value integer,
display_order integer not null
);
