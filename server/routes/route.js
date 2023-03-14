import express from 'express';


import { userSignup,userLogin, verifyEmail, updatePassword } from '../controllers/user-controller.js';

const router=express.Router();

router.post("/signup",userSignup);
router.post("/login",userLogin);
router.post("/email",verifyEmail);
router.put("/updatePassword",updatePassword);

export default router;