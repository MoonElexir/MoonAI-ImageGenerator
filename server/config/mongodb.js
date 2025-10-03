import mongoose from "mongoose";



const connectDb = async  () =>{
    try {
     await  mongoose
          .connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
          .then(() => console.log("MongoDB Connected!"));
    } catch (error) {
        console.log(`Error Connecting MongoDB ${error}`);
    }
}


export {connectDb};