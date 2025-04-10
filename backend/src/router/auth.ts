import { Router } from "express";

const router = Router();

router.post('/register',(req, res)=>{
    //register new user
});

router.post('/login',(req, res)=>{
    //Login user
});

router.get('/logout',(req, res)=>{
    //logout user
});

router.get('/me',(req,res)=>{
    //Get logged in user
});

router.post('/forgot-password',(req, res)=> {
    //Send reset link
});

router.post('/reset-password' ,(req, res)=>{
    //reset password
});

export const authRouter = router;