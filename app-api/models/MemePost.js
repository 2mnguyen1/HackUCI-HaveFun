const mongoose = require('mongoose');

const MemePostSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,

    },
    picture: {
        type: String,
        default: ""
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