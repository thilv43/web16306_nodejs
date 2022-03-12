import { Router } from 'express';
import { create, get, list, remove, update } from '../controllers/product';
import { checkAuth } from '../middleware/checkAuth';

const router = Router();

router.get("/products", checkAuth, list);
router.get("/product/:id",checkAuth, get);
router.post('/products', checkAuth, create);
router.delete("/product/:id",checkAuth, remove);
router.put("/product/:id",checkAuth, update)

export default router;