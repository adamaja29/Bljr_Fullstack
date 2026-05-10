import express from "express";
import {
    getProducts,
    createProduct
} from "../controllers/ProductController.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/products", verifyUser, getProducts);
router.post("/product", verifyUser, createProduct);

export default router;