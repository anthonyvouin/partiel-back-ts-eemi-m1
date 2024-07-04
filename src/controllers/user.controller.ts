import { Request, Response } from "express";
import { User, UserDocument } from "../models/user.model";
import { RegisterResponse } from "../interface/response/response";
import { UserProps } from "../interface/user/user";

export const createUser = async (req: Request<any, any, UserProps, any>, res: Response<RegisterResponse>) => {
  try {
    const userData: UserProps = req.body;

    const newUser: UserDocument = new User({
      ...userData,
    });

    await newUser.save();

    res.status(201).json({ message: "Utilisateur créé avec succès !" });
  } catch (error: any) {
    console.error(
      "Erreur lors de la création de l'utilisateur :",
      error.message
    );
    res.status(500).json({ message: "Erreur serveur" });
  }
};
