import mongoose from "mongoose";
import { ENV } from "./env.ts";

export const connectDB = async() => {
    try {
        const connection = await mongoose.connect(ENV.DB_URL);
        console.log(`Connected to MONGODB: ${connection.connection.host} successfully!!!`);
    } catch (error) {
        console.error("MONGODB CONNECTION ERROR");
        process.exit(1); // exit code 1 means failure, 0 means success
    }
}