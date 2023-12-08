const express = require('express')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        res.status(200).json({
            message: "yes"
        })
    } catch(err) {
        res.status(500).json({
            message: 'no'
        })
    }
})

module.exports = router