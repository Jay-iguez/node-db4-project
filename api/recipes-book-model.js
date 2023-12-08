const db = require('../data/db-config')

const create_error = (status, msg) => {
    const error = new Error(msg)
    error.status = status
    return error
}

const getRecipeById = async (recipe_id) => {
    const [recipe] = await db('recipes as r').where('recipe_id', recipe_id)

    const date = new Date().toLocaleString()

    const formatted_recipe = { ...recipe }
    formatted_recipe.created_at = date
    formatted_recipe.steps = []

    const steps = await db('steps as s')
        .where('recipe_id', recipe_id)

    if (steps.length === 0) {
        return formatted_recipe
    }

    formatted_recipe.steps = steps
    formatted_recipe.steps.forEach(step => {
        step.ingredients = []
    });


    const ingredients = await db('ingredients as ing')
        .where('step_id', steps[0].step_id)

    if (ingredients.length === 0) {
        return formatted_recipe
    }

    formatted_recipe.steps.forEach((step, index) => {
        if (step.step_id === ingredients[index].step_id){
            step.ingredients = [...step.ingredients, ingredients[index]]
        }
    })

    return formatted_recipe

}


const getAll = async () => {
    const recipes = await db('recipes')
    return recipes
}

module.exports = {
    getRecipeById,
    getAll,
    create_error
}