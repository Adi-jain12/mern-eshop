import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import path from "path";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

const app = express(); // creates express app for us

app.use(cookieParser()); // it helps to read the cookies coming with the request
app.use(express.json()); // it helps to convert the body of API request into json automatically for us
app.use(express.urlencoded({ extended: true })); //parses the url to create parameters

// cors is a security thing which will prevent certain requests from certain urls
app.use(
  cors({
    origin: process.env.FRONTEND_URL, //only accepts url that is defined in .env file which will protect app from other suspicious urls
    credentials: true, // it checks that the url must include http cookie in the request for verify
  })
);

//this means go to frontend dist folder which has compiled front end static assets and serve those static assets on the root of our URL that the backend runs on
app.use(express.static(path.join(__dirname, "../../frontend/dist")));

// all request that aren't API routes go to index.html of frontend
app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
});

app.listen(7000, () => {
  console.log("Server is running on localhost:7000");
});
