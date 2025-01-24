import express from "express";
import dotenv from "dotenv"
import authRoutes from "./routes/auth-route.js"
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import messageRoute from "./routes/message-route.js";

dotenv.config()
const app = express();

const PORT = process.env.PORT

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("api/message", messageRoute);
app.listen(5001, () => {
    console.log("Server is on " + PORT)
    connectDB();
});

