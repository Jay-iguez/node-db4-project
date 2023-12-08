/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('recipes').truncate()
  await knex('recipes').insert([
    {recipe_name: 'Sushi Burger'},
    {recipe_name: 'Pizza Casserole'},
    {recipe_name: 'Kids Mega Cuisine'}
  ]);
};
