import mongoose from "mongoose";

const hackathonModel = new mongoose.Schema(
  {
    hackathonLink: {
      type: String,
      required: [true, "please provide the hackathon link!"],
    },
    techStackRequired: [
      {
        type: String,
        required: [true, "please provide the tech stack needed!"],
      },
    ],
    numberOfTeammatesRequired: {
      type: Number,
      required: [true, "please provide the number of teammates needed!"],
    },
    description: { type: String },
    deadline: { type: Date, required: [true, "please provide the deadline"] },
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const Hackathon = mongoose.model("Hackathon", hackathonModel);

export default Hackathon;
