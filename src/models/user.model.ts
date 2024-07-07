// user.model.ts

import mongoose, { Document, Schema, Model } from "mongoose";
import { UserProps } from "../interface/user/user";

// Interface représentant un document utilisateur, étendant UserProps et Document de Mongoose
export interface UserDocument extends UserProps, Document {}

// Interface représentant le modèle d'utilisateur, étendant Model de Mongoose avec UserDocument
interface UserModel extends Model<UserDocument> {}

// Schéma d'utilisateur basé sur UserDocument et UserModel
const userSchema = new Schema<UserDocument, UserModel>({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  dateNaissance: { type: Date, required: true },
  adresse: { type: String, required: true },
  contactTelephonique: { type: String, required: true },
  email: { type: String, required: true },
  responsableLegal: { type: String },
  dateCreation: { type: Date, default: Date.now }, 
});

// Modèle d'utilisateur utilisant le schéma défini ci-dessus
const User = mongoose.model<UserDocument, UserModel>("User", userSchema);

// Export du modèle d'utilisateur pour pouvoir l'utiliser ailleurs dans votre application
export { User, UserModel };
