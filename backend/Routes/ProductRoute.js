import express from "express";
import {
    getProducts,
    createProduct,
    deleteProduct,
    updateProduct
} from "../controllers/ProductController.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/products", verifyUser, getProducts);
router.post("/product", verifyUser, createProduct);
router.delete("/product/:id", verifyUser, deleteProduct);
router.patch("/product/:id", verifyUser, updateProduct);
// router.post("/product", verifyUser, createProduct);

export default router;