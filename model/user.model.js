const mongoose = require("mongoose")

const schema = mongoose.Schema({
    firstName:{
        type:String,
        require:true,
    },
    middleName:{
        type:String,
        require:true,
    },
    lastName:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    },

})

const userModel = mongoose.model("userModel",schema)
module.exports = userModel;