import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provid a valid email"]
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ["Job Seeker", "Employer"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }

    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (enterPass) {
    return await bcrypt.compare(enterPass, this.password);
}

userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_KEY, {
        expiresIn: process.env.JWT_EXPIRES
    });
};

export const User = mongoose.model("User", userSchema);