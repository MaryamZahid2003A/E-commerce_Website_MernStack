import { GetProduct } from "../controller/ProductController.js";
import express from 'express'
const router=express.Router();

router.get('/beverage',GetProduct)

export default router;