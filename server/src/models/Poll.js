import mongoose from "mongoose";

const optionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  votes: {
    type: Number,
    default: 0,
  },
});

const pollSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
      trim: true,
    },
    options: {
      type: [optionSchema],
      validate: {
        validator: (options) => options.length >= 2,
        message: "At least 2 options are required",
      },
    },
  },
  {
    timestamps: true,
  },
);

const Poll = mongoose.model("Poll", pollSchema);

export default Poll;
