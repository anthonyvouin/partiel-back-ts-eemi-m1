import express, { Router } from "express";
import { createEvent, getAllEvents } from "../controllers/event";

const router: Router = express.Router();

router.post("/", createEvent);
router.get("/get-all", getAllEvents);



export default router;
