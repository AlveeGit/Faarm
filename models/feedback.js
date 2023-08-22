import { Schema, model, models } from "mongoose";

const FeedbackSchema = new Schema({
  name: {
    type: String,
    required: [true, "Fullname is required"],
    minLength: [3, "Fullname must be at least 3 characters"],
    maxlength: [30, "Fullname must be at most 30 characters"],
    
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please enter a valid email",
    ],
  },
  contact: {
    type: String,
    required: [true, "Contact is required"],
  },
  message: {
    type: String,
    required: [true, "Message is required"],
  },
});

const Feedback = models.Feedback || model("Feedback", FeedbackSchema);
export default Feedback;
