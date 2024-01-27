import mongoose from "mongoose";

const userModel = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please tell us your name"],
  },
  email: {
    type: String,
    required: [true, "please tell us your email address"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "please provide us your password"],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "please provide us your password"],
  },
  techStack: {
    type: [{ type: String }],
  },
  profilePic: {
    type: String,
    default:
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  },
  bio: { type: String },
});

const User = mongoose.model("User", userModel);

export default User;
