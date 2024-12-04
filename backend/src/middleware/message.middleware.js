import express from "express";
import { protectRoute } from "./auth.middleware.js";
import {getUserFroSidebar} from "../controllers/message.controller.js";

const router = express.Router();

router.get("/users",protectRoute, getUserFroSidebar);

export default router;