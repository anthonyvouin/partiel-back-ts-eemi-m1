import express, { Router } from "express";
import { createContact, getAllContacts } from "../controllers/contact.controller";

const router: Router = express.Router();

router.post("/", createContact);
router.get("/get-all", getAllContacts);


export default router;
