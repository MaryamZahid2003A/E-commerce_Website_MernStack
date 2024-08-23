import express from 'express'
import { register,Login,Logout } from "../controller/UserController.js";
const router=express.Router();

router.post('/register',register)
router.post('/login',Login)
router.post('/logout',Logout)

export default router;
