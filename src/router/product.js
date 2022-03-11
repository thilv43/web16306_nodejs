import {Router} from 'express';
import { create, getAll, list, remove, update } from '../controllers/products';
import checkAuth from '../middleware/checkAuth';

const router = Router();
router.get("/", (req, res) => {
    res.send("<h1> Home Pages</h1>")
});
router.post("/products", checkAuth , getAll);
router.get("product/:id", checkAuth , list)
router.get("/products/:id", checkAuth , create);
router.delete("/products/:id", checkAuth , remove);
router.put("/product/:id", checkAuth , update);

// router.get("/products", checkAuth, (req , res) => {
//     const products = [
//         {
//             id: 1,
//             name: "Products A"
//         },
//         {
//             id: 2,
//             name: "Products B"
//         }
//     ];
//     res.json(products);
// });
// router.post("/products",checkAuth, (req, res) => {
//     const products = [
//         {
//             id: 2,
//             name: "Products B"
//         }

//     ];
//     products.push(req.body);
//     res.json(products);
// })

export default router;