import { Router } from "express";

const router = Router();

router.post('/',(req, res)=>{
    //place order
});

router.get('/',(req, res)=>{
    //Get user's orders
});

router.get('/:id',(req, res)=>{
    //Get specific order details 
});

router.put(':id/status', (req, res)=>{
    //Update order status (admin)
});

export const orderRouter = router;