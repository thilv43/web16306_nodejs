import { Router } from 'express';
import { create, get, list, remove, update } from '../controllers/product';
import { checkAuth, isAuth , requireSignin } from '../middleware/checkAuth';

const router = Router();

router.get("/products", list);
router.get("/product/:id", get);
router.post('/products', checkAuth,requireSignin, isAuth, create);
router.delete("/product/:id",checkAuth, remove);
router.put("/product/:id",checkAuth, update)

export default router;