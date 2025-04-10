import { Router } from "express";
const router = Router();


router.get('/',(req, res) =>{
    //Get all categories
});

router.post('/',(req,res)=>{
    //Create category (admin)
});

router.put('/:id',(req, res)=>{
    //Update category (admin)
});

router.delete('/:id',(req, res)=>   {
    //Delete Category (admin)
});

export const categoriesRouter = router;