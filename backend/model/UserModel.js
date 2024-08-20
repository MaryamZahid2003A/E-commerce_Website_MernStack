import expressAsyncHandler from "express-async-handler";
import bcrypt from 'bcryptjs'
import mongoose from "mongoose";

const schema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},
{
    timeStamps:true
})


schema.pre('save',async function(next){
    if(!this.isModified(this.password)){
        this.password=await bcrypt.hash(this.password,12)
    }
    next();
})

schema.methods.checkPassword=async function(databasePassword){
    return await bcrypt.compare(databasePassword,this.password)
}


const User=mongoose.model('User',schema)

export default User;