import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import process from "process";
dotenv.config();
import cookieParser from "cookie-parser";
import multer from "multer";
import { errorHandler } from "./middleware/errorHandler.js";
import { logger } from "./middleware/logger.js";
import connectDB from "./config/db.js";
import userRoutes from "./routes/User.js";
import otpRoutes from "./routes/OTP.js";
import { updateImage } from "./Controllers/User.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

app.use(logger);
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("dev"));

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/auth/otp", otpRoutes);
app.post("/api/v1/auth/updateImage/:id", upload.single("image"), updateImage);

app.use(errorHandler);
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`🚀 server at http://localhost:${port}.`));
connectDB();
