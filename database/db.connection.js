const mongoose = require("mongoose")

async function connnectMongoose(){
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/urlDB")
        console.log("Mongoose Connected")
    }
    catch(err){
        console.log("Error: ",err)
    }
}

module.exports = connnectMongoose;