import { Router } from "express";
const router = Router();

router.get('/:id',(req, res)=>{
    //Get user profile
});

router.put('/:id',(req, res)=>{
    //update user profile
});

router.delete('/:id',(req, res)=>{
    //delete user (admin)
});

router.get('/',(req, res)=>{
    //Get all users
});

export const usersRouter = router;