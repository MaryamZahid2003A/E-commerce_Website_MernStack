import expressAsyncHandler from "express-async-handler";
import User from "../model/UserModel.js";
import generateToken from "../Authentication/generateToken.js";
// register
const register=expressAsyncHandler(async(req,res)=>{
    try{
        const {name,password,email}=req.body;
        const CheckUser=await User.findOne({email})
        if (CheckUser){
           return res.status(400).json({message: "User Already Exist ! "})
        }
        const user=await User.create({name,password,email})
        if(user){
            generateToken(res,user._id)
            res.status(200).json({
                _id:user._id,
                name:user.name,
                email:user.email,
                password:user.password
            })
        }
       else {
        return res.status(400).json({message: "Invalid Data"})
       }
       
    }
    catch(error){
        console.log(`error in creating User ${error}`)
        console.error('Error In Creating User')
    }
})
//login
const Login=expressAsyncHandler(async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user= await User.findOne({email})

        if (user && (await user.checkPassword(password))){
            generateToken(res,user._id)
            res.status(200).json({
                message : "sucessfully login ",
                _id:user._id,
                name:user.name,
                email:user.email,
                password:user.password
            })
        }
        else {
            return res.status(401).json({message :  " Invalid Credentials"})
        }

       
    }
    catch(error){
        res.status(400).json({message : "Error in Login the user "})
        console.error(error)
    }
})

const Logout=expressAsyncHandler(async(req,res)=>{
    res.cookie('jwt','',{
        httpOnly : true,
        expires: new Date (0)
    })
    res.status(200).json("Logout Successfully ! ")
})

export {register,Login,Logout}