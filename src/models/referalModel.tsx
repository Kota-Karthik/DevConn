import mongoose from "mongoose";

const referalModel = new mongoose.Schema(
  {
    referalPostedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    resumeLink: {
      type: String,
      required: [true, "please give your resume link"],
    },
    jobId: { type: String },
    jobName: { type: String, required: [true, "please give your job name"] },
    jobApplyLink: { type: String, required: [true, "please give your job"] },
    description: { type: String },
  },
  {
    timestamps: true,
  }
);

const Referral=mongoose.model('Referral', referalModel);

export default Referral;
