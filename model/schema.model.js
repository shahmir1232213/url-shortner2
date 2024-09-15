const mongoose = require("mongoose")
const Schema = mongoose.Schema({
    shortID:{
        type:String,
        required:true,
        unique:true
    },
    redirectURL:{
        type:String,
        required:true
    },
    click:{
        type:Number,
        default: 0 
    }
},
{timestamps:true}
) 

const model = mongoose.model("url",Schema);
module.exports = model;