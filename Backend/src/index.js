import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./libs/connectDB.js";
import userRoutes from "./routes/userRoutes.js";
import clientRoutes from "./routes/clientRoutes.js";
import freelancerRoutes from "./routes/freelancerRoutes.js";

connectDB();
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT;

app.use("/api/user", userRoutes);
app.use("/api/client", clientRoutes);
app.use("/api/freelancer", freelancerRoutes);

app.listen(port, () => {
  console.log("Server running on: ", port);
});
