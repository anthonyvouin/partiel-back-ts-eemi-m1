import express, { Router } from "express";
import { createUser, getAllUser } from "../controllers/user.controller";
const router: Router = express.Router();

router.post("/", createUser);
router.get("/get-all", getAllUser);

export default router;
