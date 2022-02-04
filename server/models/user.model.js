const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        minlength:8,
    },
    phone_no:{
        type:Number,
        required:true,
        minlength:10,
        maxlength:10,
    },
})

const User= mongoose.model("user",userSchema)
module.exports=User;