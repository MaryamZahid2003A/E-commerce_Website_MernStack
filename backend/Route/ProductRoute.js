import { GetProduct,GetShan,GetFruit } from "../controller/ProductController.js";
import express from 'express'
const router=express.Router();

router.get('/beverage',GetProduct)
router.get('/shan',GetShan)
router.get('/fruit',GetFruit)



export default router;