import { Router } from "express";
import { authRouter } from "./auth";
import { usersRouter } from "./users";
import { productsRouter } from "./products";
import { categoriesRouter } from "./categories";
import { cartRouter } from "./cart";
import { orderRouter } from "./order";
import { paymentRouter } from "./payment";
const router = Router();

router.use('/auth',authRouter);
router.use('/users', usersRouter);
router.use('/products',productsRouter);
router.use('/categories', categoriesRouter);
router.use('/cart',cartRouter);
router.use('/order',orderRouter);
router.use('/payment',paymentRouter);
router.get('/admin/orders', (req, res)=> {
    //Get all orders (admin)
});

export const baseRouter = router;