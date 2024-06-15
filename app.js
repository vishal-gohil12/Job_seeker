import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";

import { applicationRoutes } from "./Routes/applicationRoute.js";
import { jobRouter } from "./Routes/jobRouter.js";
import { userRoute } from "./Routes/userRoutes.js";
import { dbConnection } from "./Models/connection.js";
import { errorMiddleware } from "./Middlewares/Error.js"

export const app = express();

app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // Replace with your frontend URL
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/temp/'
}));


app.use("/api/v1/user", userRoute);
app.use("/api/v1/job", jobRouter);
app.use("/api/v1/application", applicationRoutes);

dbConnection();


app.use(errorMiddleware);


