import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/dataBase.js";
// import "./models/UserModels.js"
// import "./models/ProductModel.js"
import UserRoute from "./Routes/UserRoute.js";
import ProductRoute from "./Routes/ProductRoute.js"
dotenv.config();

const app = express();

// (async()=>{
//     await db.sync();
// })();

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));

app.use(express.json());
app.use(UserRoute);
app.use(ProductRoute);

app.listen(process.env.APP_PORT, ()=> {
    console.log("Server up and running...")
})