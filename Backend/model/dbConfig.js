let mongoose = require('mongoose')

let MongoUrl = "mongodb://localhost:27017/CFTDATA";

mongoose.connect(MongoUrl,).then(()=>{
    console.log("Database Connected...");
}).catch(()=>{
    console.log("Database is not connected..")
})

let connection = mongoose.connection


module.exports = connection