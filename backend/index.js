import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/dataBase.js";
// import "./models/UserModels.js"
// import "./models/ProductModel.js"
dotenv.config();

const app = express();
(async()=>{
    await db.sync();
})();

app.listen(process.env.APP_PORT, ()=> {
    console.log("Server up and running...")
})