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


const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
};

app.use(cors(corsOptions));

app.options('*', cors(corsOptions));

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


