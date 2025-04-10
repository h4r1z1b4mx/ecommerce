import { Router } from "express";

const router = Router();

router.get('/',(req,res)=>{
    // Get current user's cart
});

router.post('/',(req,res)=>{
    //Add/update items in cart
});

router.delete('/clear',(req, res)=>{
    //Clear the cart
});

export const cartRouter = router;