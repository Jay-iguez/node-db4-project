const express = require('express')
const Middle = require('./recipes-book-middleware')
const Data = require('./recipes-book-model')

const router = express.Router()

router.get('/:id', Middle.checkId, async (req, res, next) => { //eslint-disable-line
    try {
        const {id} = req.params
        const recipe = await Data.getRecipeById(id)
        res.status(200).json(recipe)
    } catch(err) {
        res.status(500).json({
            message: 'Error in getting recipe of id: ' + req.params.id + "."
        })
    }
})

router.get('/', async (req, res, next) => { //eslint-disable-line
    try {
        const recipes = await Data.getAll()
        res.status(200).json(recipes)
    } catch(err) {
        res.status(500).json({
            message: 'Error in getting recipes'
        })
    }
})

router.use((err, req, res, next) => { //eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message
    })
})

module.exports = router