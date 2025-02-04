import express, { Request, Response, Express } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRoute from "./src/routes/user";
import contactRoute from "./src/routes/contact";
import eventRoute from "./src/routes/event";

import connectDB from "./config/db.config";

// Serveur
const app: Express = express();
const port: number = 3000;

// Connexion à la base de données
connectDB();

// Utilisation de bodyParser pour parser le corps des requêtes en JSON
app.use(bodyParser.json());
app.use(cors());

// Middleware pour servir les fichiers statiques du dossier 'uploads'

//Appel route
app.use("/contact", contactRoute);
app.use("/user", userRoute);
app.use("/event", eventRoute);


app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});
