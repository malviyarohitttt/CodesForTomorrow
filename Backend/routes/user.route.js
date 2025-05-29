let User = require('../model/user.schema')
let express = require('express');
let { Signup,Signin,GetAllUsers} = require('../controller/user.controller')

let router = express.Router()

router.post("/signup", Signup)

router.post("/signin", Signin)

router.get("/getallusers",GetAllUsers)



module.exports = router;