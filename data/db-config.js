const knex = require('knex')
const configs = require('../knexfile')

const env = process.env.NODE_ENV || 'development' //eslint-disable-line

module.exports = knex(configs[env])