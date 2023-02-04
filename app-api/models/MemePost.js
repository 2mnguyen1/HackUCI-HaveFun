const mongoose = require('mongoose');

const MemePostSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true
    },
    picture: {
        type: String,
        default: ""
    },
    title: {
        type: String,
        default: "No Title"
    },

    description: {
        type: String,
        default: ""
    },
    like: {
        type: Number,
        default: 0,
        
    },

}, {timestamps: true})

module.exports = mongoose.model("MemePost", MemePostSchema)