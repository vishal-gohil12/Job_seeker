import { Router } from "express";
import { jobseekerDeleteApplication, jobseekerGetAllApplications, employerGetAllApplications, postApplication } from "../Controller/applicationController.js";
import { isAuth } from "../Middlewares/authUser.js";

export const applicationRoutes = Router();

applicationRoutes.get("/jobseeker/getAll", isAuth, jobseekerGetAllApplications);
applicationRoutes.get("/employer/getAll", isAuth, employerGetAllApplications);

applicationRoutes.post("/post", isAuth, postApplication);

applicationRoutes.delete("/delete/:id", isAuth, jobseekerDeleteApplication);
