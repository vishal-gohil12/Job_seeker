import jwt from "jsonwebtoken";
import { catchAsyncError } from "./AsyncError.js";
import ErrorHandler from "./Error.js";
import { User } from "../Models/userSchema.js"

export const isAuth = catchAsyncError(async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return next(new ErrorHandler("User Not Authorized", 401));
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.user = await User.findById(decoded.id);
        next();

    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return next(new ErrorHandler("Token expired. Please login again.", 401));
        }
        return next(new ErrorHandler("User Not Authorized", 401));
    }
});