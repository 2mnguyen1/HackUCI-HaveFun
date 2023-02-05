const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        default: "No Title"
    },

    description: {
        type: String,
        default: ""
    },

    isDone:{
        type: Boolean,
        default: false,
    }


}, {timestamps: true})

module.exports = mongoose.model("Todo", TodoSchema)