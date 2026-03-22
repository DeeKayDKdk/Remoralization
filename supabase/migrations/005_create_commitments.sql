create table if not exists commitments (
id uuid primary key,
cycle_id uuid not null references cycles(id) on delete cascade,
user_id uuid not null references profiles(id) on delete cascade,
created_at timestamptz not null default now(),
title text not null,
description text,
pillar text not null,
proof_type text,
target_value text,
status text not null default 'pending',
completed_at timestamptz,
sort_order integer not null
);
