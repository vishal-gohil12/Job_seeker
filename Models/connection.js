import mongoose from "mongoose";
import { config } from "dotenv";

config();

const url = process.env.MONGO_URL;

export const dbConnection = () => {
    if (!url.startsWith('mongodb://') && !url.startsWith('mongodb+srv://')) {
        console.error('Invalid MongoDB connection string format. It must start with "mongodb://" or "mongodb+srv://".');
        return;
    }
    try {
        const connection = mongoose.connect(url)
            .then(e => console.log("Database is connected"))
            .catch(e => console.error(e));

    } catch (error) {
        console.error('Error connecting to the database', error);
    }
}

//mongodb://localhost:27017/Job_Seeker
