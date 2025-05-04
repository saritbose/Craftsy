import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./libs/connectDB.js";
import authRoutes from "./routes/authRoutes.js";

connectDB();
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT;

app.use("/api/user", authRoutes);

app.listen(port, () => {
  console.log("Server running on: ", port);
});
