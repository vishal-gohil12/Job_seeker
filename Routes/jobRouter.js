import { Router } from "express";
import { isAuth } from "../Middlewares/authUser.js";
import { getAllJobs, getMyJobs, postJob, updateJob, deleteJob, getSingleJob } from "../Controller/jobController.js";

export const jobRouter = Router();

jobRouter.get("/getAll", getAllJobs);
jobRouter.get("/getMyJob", isAuth, getMyJobs);
jobRouter.get("/:id", isAuth, getSingleJob);

jobRouter.post("/post", isAuth, postJob);

jobRouter.put("/updateJobs/:id", isAuth, updateJob);

jobRouter.delete("/deleteJob/:id", isAuth, deleteJob);