const Review = require('../models/reviewModel')
const mongoose = require('mongoose')
//get all workouts
const getReviews = async (req, res) => {
    const reviews = await Review.find({}).sort({createdAt: -1})
    res.status(200).json(reviews)
}
const getReview = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'No such review'})
    }
    const review = await Review.findById(id)
    if (!review) {
        return res.status(404).json({error: 'Review not found'})
    }
    return res.status(200).json(review)
}


//create new workout
const createReview = async (req, res) => {
    const {restaurantName, rating, city, state, description, groupchats} = req.body
    emptyFields = []
    if(!restaurantName){
        emptyFields.push('restaurantName')
    }
    if(!rating){
        emptyFields.push('rating')
    }
    else if (rating > 10){
        emptyFields.push('rating')
    }
    if(!city){
        emptyFields.push('city')
    }
    if(!state){
        emptyFields.push('state')
    }
    if(!description){
        emptyFields.push('description')
    }
    if(!groupchats){
        emptyFields.push('groupchats')
    }
    if(emptyFields.length > 0){
        return res.status(400).json({error: `Please fill in the following fields:`, emptyFields})
    }
    try {
        
        const review = await Review.create({restaurantName, rating, city, state, description, groupchats})
        res.stats(200).json(review)
    }catch(error) {
        res.status(400).json({error: error.message})
    }
}


//delete a workout
const deleteReview = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'No such review'})
    }

    const review = await Review.findOneAndDelete({_id: id})
    if(!review){
        return res.status(404).json({error: 'Review not found'})
    }

    res.status(200).json(review)
}

//update a workout
const updateReview = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'No such review'})
    }

    const review = await Review.findOneAndUpdate({_id: id}, {...req.body})
    if(!review){
        return res.status(404).json({error: 'Review not found'})
    }

    res.status(200).json(review)
}

module.exports = {
    createReview, 
    getReviews,
    getReview,
    deleteReview,
    updateReview
}