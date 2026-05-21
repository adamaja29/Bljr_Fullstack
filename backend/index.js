import express from "express";
import cors from "cors";
import session from "express-session";
import SequelizeStore from "connect-session-sequelize";
import dotenv from "dotenv";
import db from "./config/dataBase.js";
// import "./models/UserModels.js"
// import "./models/ProductModel.js"
import UserRoute from "./Routes/UserRoute.js";
import ProductRoute from "./Routes/ProductRoute.js";
import AuthRoute from "./Routes/AuthRoute.js";
dotenv.config();

const app = express();

// (async()=>{
//     await db.sync();
// })();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
    db: db
});

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {
        secure: false,
        maxAge: 24 * 60 * 60 * 1000
    }
}));

// store.sync();

app.use(express.json());

app.use(UserRoute);
app.use(ProductRoute);
app.use(AuthRoute);

app.listen(process.env.APP_PORT, ()=> {
    console.log("Server up and running...")
})