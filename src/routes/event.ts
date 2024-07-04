import express, { Router } from "express";
import { createEvent } from "../controllers/event";

const router: Router = express.Router();

router.post("/", createEvent);

export default router;
