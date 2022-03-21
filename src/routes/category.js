import { Router } from "express";
import { checkAuth } from "../middleware/checkAuth";
import { create, list, read } from "../controllers/category";

const router = Router();

router.get("/categories", checkAuth, list);
router.post("/category", checkAuth, create);
router.get("/category/:slug", checkAuth , read);

export default router;