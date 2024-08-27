import expressAsyncHandler from "express-async-handler";
import mongoose from "mongoose";


const schema=mongoose.Schema({
    name:{
        type:String,
    },
    type:{
        type:String,
    },
    img:{
        type:String,
    },
    description:{
        type:String,
    },
    price:{
        type:Number,
    }
},{
    timeStamps:true
})

const Product=mongoose.model('products',schema)

export default Product;