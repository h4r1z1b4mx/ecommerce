import { Router } from "express";

const router = Router();
router.post('/checkout',(req, res)=>{
    //Initiate checkout
});

router.post('/webhook',(req, res)=>{
    //handle Stripe webhooks
});

export const paymentRouter = router;