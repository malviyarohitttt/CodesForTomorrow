let mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        unique: true,
        required: true,
        type: String
    },
    password: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("User",userSchema)