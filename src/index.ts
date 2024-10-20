import express, { Request, Response } from "express";
import mongoose from "mongoose";
import "dotenv/config";
import webhookRouter from './routers/webhook.route';

const app = express();
const cors = require("cors");
const displayRoutes = require("express-routemap");
app.use(cors());

const port = process.env.PORT || 3000;
const dbURL = process.env.DB_CONNECTION_URL;

const yellow = "\x1b[33m";
const green = "\x1b[32m";
const red = "\x1b[31m";

// Services
app.use("/api", webhookRouter);

// Connect to MongoDB
mongoose
  .connect(dbURL!, {})
  .then(() => {
    console.warn(`${yellow}Connected to MongoDB 🗂️`);

    app.listen(port, () => {
      console.warn(`${green}Application is running at port : ${port} 🚀`);
      displayRoutes(app);
    });
  })
  .catch((err) => {
    console.error(`${red}MongoDB connection error 🧨 : ${err}`);
  });
