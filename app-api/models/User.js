const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 1,
        max: 20,
        unique: true
    },
    password: {
        type: String,
        requied: true,
        min: 1,

    },
    profilePicture: {
        type: String,
        default: ""
    },

}, {timestamps: true})

module.exports = mongoose.model("User", UserSchema)