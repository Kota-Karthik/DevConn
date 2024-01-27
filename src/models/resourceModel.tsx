import mongoose from "mongoose";

const resourceModel = new mongoose.Schema(
  {
    resourceName: {
      type: "string",
      required: [true, "please provide the resource name"],
    },
    resourceLink: {
      type: "string",
      required: [true, "please provide the resource link"],
    },
    techStack: [
      {
        type: "string",
        required: [true, "please provide the tech stack of resource"],
      },
    ],
    description: { type: "string" },
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    rating: { type: Number },
  },
  {
    timestamps: true,
  }
);

const Resource = mongoose.model("Resource", resourceModel);

export default Resource;
