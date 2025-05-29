let User = require('../model/user.schema')
let bcrypt = require('bcrypt')
let JWT = require('jsonwebtoken')


const Signup = async (req, res) => {
    let userData = req.body
    if (!(userData.firstname && userData.lastname && userData.email && userData.password)) {
        return res.json({ status: false, message: "All fields are required" })
    }
    try {
        let isUserAlreadyExist = await User.findOne({ email: userData.email })

        if (isUserAlreadyExist) {
            return res.json({ status: false, message: "User Already Exist..." })
        }

        // passwordhashing
        let salt = bcrypt.genSaltSync(10)
        let hashedPassword = bcrypt.hashSync(userData.password, salt)

        userData.password = hashedPassword;

        let newUser = new User(userData)
        await newUser.save()
        return res.json({ status: true, message: "Signup Success..", newUser })

    } catch (error) {
        return res.json({ status: false, message: error.message })
    }
}

const Signin = async (req, res) => {
    let userData = req.body;

    if (!(userData.email && userData.password)) {
        return res.json({ status: false, message: "All fields are required" })
    }

    try {
        let user = await User.findOne({ email: userData.email })
        if (!(user)) {
            return res.json({ status: false, message: "User not found please signup!" })
        }

        let matchPassword = await bcrypt.compare(userData.password, user.password)

        if (!(matchPassword)) {
            return res.json({ status: false, message: "Incorrect Password" })
        }

        // JWT TOKEN
        let token = JWT.sign({ _id: user._id, email: user.email }, process.env.JWTSECRETKEY, {
            expiresIn: '5m'
        })

        // Setting user password to undefined
        user.password = undefined

        return res.json({ status: true, message: "Signin Success", user, token })

    } catch (error) {
        return res.json({ status: false, message: error.message })
    }
}

const GetAllUsers = async (req, res) => {
    try {
        let allUsers = await User.find()
        return res.json({ status: true, allUsers, totalUsers: allUsers.length })
    } catch (error) {
        return res.json({
            status: false, message: error.message
        })

    }
}

module.exports = { Signup, Signin, GetAllUsers }