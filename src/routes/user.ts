import express, { Router } from "express";
import { createUser, getAllUser,getByDay } from "../controllers/user.controller";
const router: Router = express.Router();

router.post("/", createUser);
router.get("/get-all", getAllUser);
router.get("/get-by-day", getByDay);

export default router;
