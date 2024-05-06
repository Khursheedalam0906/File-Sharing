import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DbConfig = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connect to database");
  } catch (error) {
    console.log("Error while connecting to database", error);
  }
};

export default DbConfig;
