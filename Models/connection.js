import mongoose from "mongoose";

export const dbConnection = () => {
    const connection = mongoose.connect("mongodb://localhost:27017/Job_Seeker")
        .then(e => console.log("Database is connected"))
        .catch(e => console.error(e));

}


