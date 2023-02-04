const express = require('express')
const router = express.Router()
const User = require('../models/User')
// register
router.post('/register', async (req, res) => {
    try {       
        const newUser = await new User({
            username: req.body.username,
            password: req.body.password,
            profilePicture: req.body.profilePicture
        })
        const user = await newUser.save()
        res.status(200).json(user)
    } catch (err) {
        console.log(err)
    }
})
//login
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({
            username: req.body.username,
        })

        if (!user) {
            return res.status(404).json('user not found')
        }
        else {
            if (req.body.password !== user.password)
                return res.status(404).json("invalid password");
        }
        res.status(200).json(user)
    } catch (err) {

        res.status(500).json(err)
    }
})

module.exports = router