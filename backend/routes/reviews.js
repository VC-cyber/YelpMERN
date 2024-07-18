const express = require('express')
const {} = require('../controllers/reviewController')
const { 
    createReview,
    getReviews,
    getReview, 
    deleteReview,
    updateReview
} = require('../controllers/reviewController')

const router = express.Router()

//GET all workouts
router.get('/', getReviews)

//get a single workout
router.get('/:id', getReview)

//POST a workout
router.post('/', createReview)

//DELETE a workout
router.delete('/:id', deleteReview)

//UPDATE a workout
router.patch('/:id', updateReview)

module.exports = router