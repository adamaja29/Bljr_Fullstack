import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/dataBase.js"
dotenv.config();

const app = express();


app.listen(process.env.APP_PORT, ()=> {
    console.log("Server up and running...")
})