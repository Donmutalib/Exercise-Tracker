const express = require('express')
const router = express.Router()
const { createUser, getAllUsers, createExercise, getUserLogs } = require('../controllers/user')

router.route('/').post(createUser)
router.route('/').get(getAllUsers)
router.route('/:_id/exercises').post(createExercise)
router.route('/:_id/logs').get(getUserLogs)

module.exports = router