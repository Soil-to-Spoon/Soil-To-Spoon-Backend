import { Router } from "express";
import { createConsumerProfile, deleteConsumerProfile, getConsumerProfile, updateConsumerProfile } from "../controllers/consumer_controller.js"
import { checkUserSession } from "../middlewares/auth.js";
import { remoteUpload } from "../middlewares/uploads.js";

export const consumerRouter = Router()

consumerRouter.post("/users/consumers", remoteUpload.single('profilePhoto'), checkUserSession, createConsumerProfile);

consumerRouter.patch("/users/consumers/:id", remoteUpload.single('profilePhoto'), checkUserSession, updateConsumerProfile);

consumerRouter.get("/users/consumers/:id", checkUserSession, getConsumerProfile);

consumerRouter.delete("/users/consumers/:id", checkUserSession, deleteConsumerProfile);