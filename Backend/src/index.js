import express from "express";
import "dotenv/config";
import connectDB from "./libs/connectDB.js";

connectDB();
const app = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log("Server running on: ", port);
});
