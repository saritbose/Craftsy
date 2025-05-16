import mongoose from "mongoose";

// Connection to the DataBase MongoDb through Mongoose

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
