let express = require('express')
let logger = require('morgan')
let cors = require('cors')
let connection = require('./model/dbConfig')
require('dotenv').config()

let app = express();

app.use(logger('dev'))
app.use(express.json())
app.use(cors())


let userRouter = require('./routes/user.route')

app.use("/user",userRouter)

app.use(express.urlencoded({extended:false}))

let port = process.env.PORT;

app.listen(port,function(){
    console.log("Server is running on port ",port);
})

module.children = app