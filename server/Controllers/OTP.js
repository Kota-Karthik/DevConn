import OTP from "../model/OTP.js";
import User from "../model/User.js";
import otpGenerator from "otp-generator";
import { sendMailer } from "../utils/sendmail.js";

export const verifyOtp = async (req, res) => {
  try {
    const { otp, email } = req.body;

    const verifyOTP = await OTP.findOne({ email, otp });
    if (!verifyOTP) {
      throw new Error("Invalid OTP or Email");
    }

    const user = await User.findOneAndUpdate({ email }, { isVerified: true });
    if (!user) {
      throw new Error("User not found");
    }

    res.status(200).json({ message: "User verified successfully" });
  } catch (err) {
    console.error(err);
    if (err.message === "Invalid OTP") {
      res.status(401).json({ error: err.message });
    } else if (err.message === "User not found") {
      res.status(404).json({ error: err.message });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
};

/* Resending the OTP */
export const resendOtp = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      throw new Error("User not found");
    }

    const otp = otpGenerator.generate(6, { digits: true });
    const email = user.email;

    await OTP.create({ otp, email });
    sendMailer(email, otp, user.username, "resendOTP");

    res.status(200).json({ message: "OTP sent successfully" });
  } catch (err) {
    console.error(err);
    if (err.message === "User not found") {
      res.status(404).json({ error: err.message });
    } else {
      res.status(500).json({ error: "Failed to resend OTP" });
    }
  }
};

/* Verifying the OTP sent for account deletion */
export const sendDeleteOtp = async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.body;

    const user = await User.findById(id);
    if (!user) {
      throw new Error("User not found");
    }

    if (user.email !== email) {
      throw new Error("Unauthorized email");
    }

    const otp = otpGenerator.generate(6, { digits: true });
    await OTP.create({ otp, email });
    sendMailer(email, otp, user.UserName, "deleteAccount");

    res.status(200).json({ message: "OTP sent successfully" });
  } catch (err) {
    console.error(err);
    if (err.message === "User not found") {
      res.status(404).json({ error: err.message });
    } else if (err.message === "Unauthorized email") {
      res.status(401).json({ error: err.message });
    } else {
      res
        .status(500)
        .json({ error: "Failed to send OTP for account deletion" });
    }
  }
};
