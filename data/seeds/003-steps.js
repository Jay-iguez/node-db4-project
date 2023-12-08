/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('steps').truncate()
  await knex('steps').insert([
    {step_number: 1, step_instruction: "Thaw sushi", recipe_id: 1},
    {step_number: 2, step_instruction: "Bake pepperonis", recipe_id: 2},
    {step_number: 3, step_instruction: "Mix brownie section with cookie spoon", recipe_id: 3}
  ]);
};
