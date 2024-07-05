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



export const getAllUser = async (req: Request, res: Response) => {
  try {
    const contacts: UserDocument[] = await User.find();
    res.json(contacts);
  } catch (error: any) {
    console.error(
      "Erreur lors de la récupération des contacts :",
      error.message
    );
    res.status(500).json({ message: "Erreur serveur" });
  }
};


export const getByDay = async (req: Request, res: Response) => {
  try {
    const counts = await User.aggregate([
      {
        $group: {
          _id: {
            $dateToString: { format: '%Y-%m-%d', date: '$dateCreation' }
          },
          count: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } } // Trie par date croissante
    ]);

    // Vérifiez les résultats de l'agrégation
    console.log('Résultats de l\'agrégation :', counts);

    // Si counts est vide ou null, cela pourrait indiquer un problème avec l'agrégation
    if (!counts) {
      return res.status(404).json({ message: 'Aucune donnée trouvée' });
    }

    // Crée un tableau avec les résultats formatés pour inclure la date et le nombre d'utilisateurs inscrits
    const formattedCounts = counts.map((item: any) => ({
      date: item._id,
      count: item.count
    }));

    res.json(formattedCounts);
  } catch (error: any) {
    console.error('Erreur lors du comptage des utilisateurs par jour :', error.message);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};