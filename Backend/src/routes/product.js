import { Router } from "express";
import { getProducts, postAddProduct } from "../controllers/product.js";

const router = Router();

router.get('/products', getProducts);

router.post('/user/addProduct', postAddProduct);

export default router;