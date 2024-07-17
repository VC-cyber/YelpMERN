const express = require('express')
const {} = require('../controllers/workoutController')
const { 
    createWorkout,
    getWorkouts,
    getWorkout, 
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

const router = express.Router()

//GET all workouts
router.get('/', getWorkouts)

//get a single workout
router.get('/:id', getWorkout)

//POST a workout
router.post('/', createWorkout)

//DELETE a workout
router.delete('/:id', deleteWorkout)

//UPDATE a workout
router.patch('/:id', updateWorkout)

module.exports = router