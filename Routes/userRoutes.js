import { Router } from "express";
import { login, register, logout, getUser } from "../Controller/userController.js";
import { isAuth } from "../Middlewares/authUser.js";


export const userRoute = Router();

userRoute.post('/register', register);
userRoute.post('/login', login);

userRoute.get("/logout", isAuth, logout);
userRoute.get("/getuser", isAuth, getUser);