import mongoose from "mongoose";

const postModel = new mongoose.Schema(
  {
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    image: { type: String },
    description: {
      type: String,
      required: [true, "please give use your description!"],
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
    likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postModel);

export default Post;
