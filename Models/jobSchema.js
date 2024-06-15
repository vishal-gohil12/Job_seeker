import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a title."],
        minLength: [3, "Title must contain at least 3 Characters!"],
        maxLength: [30, "Title cannot exceed 30 Characters!"],
    },
    description: {
        type: String,
        required: [true, "Please provide decription."],
        minLength: [30, "Description must contain at least 30 Characters!"],
        maxLength: [500, "Description cannot exceed 500 Characters!"],
    },
    category: {
        type: String,
        required: [true, "Please provide a category."],
    },
    country: {
        type: String,
        required: [true, "Please provide a country name."],
    },
    city: {
        type: String,
        required: [true, "Please provide a city name."],
    },
    location: {
        type: String,
        required: [true, "Please provide location."]
    },
    fixedSalary: {
        type: Number
    },
    salaryFrom: {
        type: Number
    },
    salaryTo: {
        type: Number
    },
    expired: {
        type: Boolean,
        default: false,
    },
    jobPostedOn: {
        type: Date,
        default: Date.now,
    },
    postedBy: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
});

export const Job = mongoose.model("Job", jobSchema);