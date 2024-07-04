// event.controller.ts

import { Request, Response } from "express";
import { EventDocument,  Event } from "../models/event.model";
import { EventProps } from "../interface/event/event";
import { RegisterResponse } from "../interface/response/response";

export const createEvent = async (
  req: Request<any, any, EventProps>,
  res: Response<RegisterResponse>
) => {
  try {
    const eventData: EventProps = req.body;

    const newEvent: EventDocument = new Event({
      ...eventData,
    });

    await newEvent.save();

    res
      .status(201)
      .json({ message: "Événement créé avec succès !" });
  } catch (error: any) {
    console.error("Erreur lors de la création de l'événement :", error.message);
    res.status(500).json({ message: "Erreur serveur" });
  }
};


export const getAllEvents = async (req: Request, res: Response) => {
  try {
    const contacts: EventDocument[] = await Event.find();
    res.json(contacts);
  } catch (error: any) {
    console.error(
      "Erreur lors de la récupération des événements:",
      error.message
    );
    res.status(500).json({ message: "Erreur serveur" });
  }
};