import mongoose from "mongoose";

const chatModel = new mongoose.Schema(
  {
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    latestMessage: { type: String, ref: "Message" },
    groupAdmins: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);

const Chat = mongoose.model("Chat", chatModel);

export default Chat;
