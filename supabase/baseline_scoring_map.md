# Remoralization baseline scoring map

## Principle
Each baseline question needs:
- answer type
- answer choices
- score values
- storage format

## Answer types
- ranged_choice
- fixed_choice
- number_input
- short_text

## Q1–Q30
For each question, define:
- question_key
- answer_type
- answer options shown to user
- score attached to each option
- what gets stored in baseline_answers

## Example format

### Q1
- question_key: q1_physical_order_state
- answer_type: ranged_choice
- prompt: Which best matches the current state of your main living space?
- options:
- Extremely clean and ready for guests = 10
- Clean with minor disorder = 8
- Mixed = 6
- Noticeably messy = 4
- Chronically cluttered or embarrassing = 2
- store:
- raw_answer_option
- score_value

### Q4
- question_key: q4_days_with_plan
- answer_type: fixed_choice
- prompt: How many days in the last 7 did you clearly know your plan before the day began?
- options:
- 7 = 10
- 6 = 9
- 5 = 8
- 4 = 6
- 3 = 5
- 2 = 4
- 1 = 2
- 0 = 1
- store:
- raw_answer_number
- score_value

## Rule
No question should go into the app until its answer choices and scores are defined here.
