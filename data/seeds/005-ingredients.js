/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('ingredients').truncate()
    await knex('ingredients').insert([
      {ing_name: 'Sushi', step_id: 1, quantity_id: 1},
      {ing_name: 'Pepperonis', step_id: 2, quantity_id: 2},
      {ing_name: 'Cookie spoon', step_id: 3, quantity_id: 3}
    ]);
  };
  