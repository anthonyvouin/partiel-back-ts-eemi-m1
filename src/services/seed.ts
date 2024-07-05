import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "../../config/db.config";
import { Contact } from "../models/contact.model";
import { Event } from "../models/event.model";
import { User } from "../models/user.model";

dotenv.config();

const seedDatabase = async () => {
  try {
    await connectDB();

    await Contact.deleteMany({});
    await Event.deleteMany({});
    await User.deleteMany({});

    const contacts = [
      {
        lastName: "Doe",
        firstName: "John",
        email: "john.doe@example.com",
        objet: "Question",
        message: "How can I reset my password?",
        date: new Date(),
      },
      {
        lastName: "Smith",
        firstName: "Jane",
        email: "jane.smith@example.com",
        objet: "Feedback",
        message: "Great service!",
        date: new Date(),
      },
    ];

    const events = [
      {
        name: "Summer Festival",
        date: new Date("2024-07-20"),
        location: "Central Park",
        description: "A fun festival with music and food.",
        capacity: 5000,
        finished: true,
      },
      {
        name: "Tech Conference",
        date: new Date("2024-09-15"),
        location: "Convention Center",
        description: "A conference for tech enthusiasts.",
        capacity: 2000,
        finished: false,
      },
    ];

    await Contact.insertMany(contacts);
    await Event.insertMany(events);

    const users = [
      {
        nom: "Dupont",
        prenom: "Pierre",
        dateNaissance: new Date("1985-05-15"),
        adresse: "123 Rue de Paris, Paris, France",
        contactTelephonique: "0123456789",
        email: "pierre.dupont@example.com",
        responsableLegal: "Jean Dupont",
      },
      {
        nom: "Martin",
        prenom: "Lucie",
        dateNaissance: new Date("1990-11-25"),
        adresse: "456 Avenue des Champs, Lyon, France",
        contactTelephonique: "0987654321",
        email: "lucie.martin@example.com",
        responsableLegal: "Marie Martin",
      },
    ];

    await User.insertMany(users);

    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();
