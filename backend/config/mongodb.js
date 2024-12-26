import mongoose from "mongoose";
const connectDB = async () => {
    mongoose.connection.on('connected',()=>console.log('database connected'))
    // it will create a new database named ---travellbook---
    await mongoose.connect(`${process.env.MONGODB_URI}/travellbook`)
}

export default connectDB