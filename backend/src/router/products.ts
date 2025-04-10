import { Router } from "express";

const router = Router();

router.get('/',(req,res)=>{
    //Get all products
});

router.get('/:id',(req,res)=>{
    //Get single product
});

router.post('/',(req,res)=>{
    //create prodcut (admin)
});

router.put('/:id',(req,res)=>{
    //update product (admin)
});

router.delete('/:id',(req,res)=>{
    //delete product(admin)
});

export const productsRouter = router;