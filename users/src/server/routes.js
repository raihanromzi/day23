const express = require('express')
const router = express.Router()
const { getAllUsersHandler } = require('../handlers/users/index')

router.get('/api/users', getAllUsersHandler)

module.exports = router