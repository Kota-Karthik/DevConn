import mongoose from "mongoose";

const messageModel = new mongoose.Schema(
  {
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: { type: String, trim: true },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("Message", messageModel);

export default Message;
