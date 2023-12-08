/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('quantities').del()
  await knex('quantities').insert([
    {quantity_amount: 5},
    {quantity_amount: 0.56},
    {quantity_amount: 3.14}
  ]);
};
