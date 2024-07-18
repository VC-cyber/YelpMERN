const mongoose = require('mongoose')

const Schema = mongoose.Schema

const reviewSchema = new Schema({
    restaurantName: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    description: {
        type:String,
        required: true
    },
    groupchats: {
        type: [String],
        required: true
    }, 
    photo: {
        type: Buffer,
        required: false
    },
    photoMimeType: {
        type: String,
        required: false
    }

}, {timestamps: true})

module.exports = mongoose.model('Review', reviewSchema)