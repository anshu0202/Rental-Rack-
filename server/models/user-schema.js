import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema= new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:20
    },
    lastname:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:20
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
          type:Number,
          required:true
    }
})




const user= mongoose.model('user', userSchema);
export default user;


