import { Request, Response } from "express";
import { ContactDocument, Contact } from "../models/contact.model";
import { ContactProps } from "../interface/contact/contact";
import { RegisterResponse } from "../interface/response/response";

export const createContact = async ( req: Request<any, any, ContactProps, any>, res: Response<RegisterResponse>) => {
  try {
    const contactData: ContactProps = req.body;

    const newContact: ContactDocument = new Contact({
      ...contactData,
      date: contactData.date,
    });

    await newContact.save();

  

    res.status(201).json({ message: "Message envoyé avec succès !" });
  } catch (error: any) {
    console.error("Erreur lors de l'envoi du message:", error.message);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

export const getAllContacts = async (req: Request, res: Response) => {
    try {
        const contacts: ContactDocument[] = await Contact.find();
        res.json(contacts);
    } catch (error: any) {
        console.error("Erreur lors de la récupération des contacts :", error.message);
        res.status(500).json({ message: "Erreur serveur" });
    }
};