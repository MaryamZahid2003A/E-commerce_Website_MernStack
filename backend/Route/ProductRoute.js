import { GetProduct,GetShan,GetFruit,GetMeat, GetDairy } from "../controller/ProductController.js";
import express from 'express'
const router=express.Router();

router.get('/beverage',GetProduct)
router.get('/shan',GetShan)
router.get('/fruit',GetFruit)
router.get('/meat',GetMeat)
router.get('/dairy',GetDairy)





export default router;