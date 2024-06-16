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

app.use(cors({
    origin: "http://localhost:5173"
}));



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


