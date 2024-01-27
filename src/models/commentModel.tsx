import mongoose from "mongoose";

const commentModel = new mongoose.Schema(
  {
    post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
    commentedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    comment: { type: String },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("Comment", commentModel);
export default Comment;
