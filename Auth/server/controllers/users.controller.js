const User = require('../models/users.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
module.exports = {
    findAll: (req, res) => {
        User.find()
            .then(allUsers => res.json(allUsers))
            .catch(err => res.status(400).json(err))
    },
    register: (req, res) => {
        User.create(req.body)
            .then(newUser => {
                const userToken = jwt.sign({
                    id: newUser._id
                }, process.env.SECRET_KEY)

                res
                    .cookie("usertoken", userToken, {httpOnly:true})
                    .json({message: "Successful registration", user: newUser})
            })
            .catch(err => res.status(400).json({message: "Problem with registration", error: err}))
    },
    login: async (req, res) => {
        const user = await User.findOne({email: req.body.email})
        if (user === null) {
            return res.status(400).json({message: "Invalid login"})
        }
        console.log(user)

        // CONGRATULATIONS YOU FOUND THE USER IN THE DATABASE
        const correctPassword = await bcrypt.compare(req.body.password, user.password)

        if (!correctPassword) {
            return res.status(400).json({message: "Invalid login"})
        }

        const userToken = jwt.sign({
            id: user._id
        }, process.env.SECRET_KEY);
     
        // note that the response object allows chained calls to cookie and json
        res
            .cookie("usertoken", userToken, {
                httpOnly: true
            })
            .json({ msg: "success!" });


    },
    logout: (req, res) => {
        res.clearCookie('usertoken');
        res.sendStatus(200);
    }
}