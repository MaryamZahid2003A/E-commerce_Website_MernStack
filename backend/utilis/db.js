import expressAsyncHandler from "express-async-handler";
import mongoose from "mongoose";

const db=async()=>{
    try{
        const database=await mongoose.connect(process.env.MONGO_DB)
        console.log(`Connect to Mongo ${database.connection.host}`)

    }
    catch(error){
        console.log('cannot connect to Mongodb')
        process.exit(1);
    }
}

export default db;
