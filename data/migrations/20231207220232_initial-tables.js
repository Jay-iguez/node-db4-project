const { table } = require("../db-config"); //eslint-disable-line

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    await knex.schema
        .createTable('recipes', table => {
            table.increments('recipe_id')
            table.string('recipe_name').unique()

        })
        .createTable('steps', table => {
            table.increments('step_id')
            table.integer('step_number')
            table.string('step_instruction')
            table.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('recipe_id')
                .inTable('recipes')
                .defaultTo(1)
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
               

        })
        .createTable('quantities', table => {
            table.increments('quantity_id')
            table.string('quantity_amount')
        })
        .createTable('ingredients', table => {
            table.increments('ing_id')
            table.string('ing_name')
            table.integer('step_id')
                .unsigned()
                .notNullable()
                .references('step_id')
                .inTable('steps')
                .defaultTo(1)
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
            table.integer('quantity_id')
                .unsigned()
                .notNullable()
                .references('quantity_id')
                .inTable('quantities')
                .defaultTo(1)
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
                
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    await knex.schema
        .dropTableIfExists('ingredients')
        .dropTableIfExists('quantities')
        .dropTableIfExists('steps')
        .dropTableIfExists('recipes')
};
