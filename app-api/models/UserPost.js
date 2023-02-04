const mongoose = require('mongoose');

const UserPostSchema = new mongoose.Schema({
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

    comments: {
        typeArray,
        default:[]
    }


}, {timestamps: true})

module.exports = mongoose.model("UserPost", UserPostSchema)