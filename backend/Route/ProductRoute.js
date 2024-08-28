import { GetProduct,GetShan } from "../controller/ProductController.js";
import express from 'express'
const router=express.Router();

router.get('/beverage',GetProduct)
router.get('/shan',GetShan)


export default router;