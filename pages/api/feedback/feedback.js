import { connectToMongoDB } from "../../../lib/mongodb";
import Feedback from "../../../models/feedback";
import mongoose from "mongoose";

const handler = async (req, res) => {
  connectToMongoDB().catch((err) => res.json(err));

  if (req.method === "POST") {
    if (!req.body) return res.status(400).json({ error: "Data is missing" });

    const { name, email, contact, message } = req.body;

    try {
      const newFeedback = await Feedback.create({
        name,
        email,
        contact,
        message,
      });

      const feedback = {
        name: newFeedback.name,
        email: newFeedback.email,
        contact: newFeedback.contact,
        message: newFeedback.message,
        _id: newFeedback._id,
      };

      return res.status(201).json({
        success: true,
        feedback,
      });
    } catch (error) {
      if (error instanceof mongoose.Error.ValidationError) {
        for (let field in error.errors) {
          const msg = error.errors[field].message;
          return res.status(409).json({ error: msg });
        }
      }
      return res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};

export default handler;
