import {Router} from 'express';
import res, { get } from 'express/lib/response';
import { create, list, remove, update } from '../controllers/products';
import checkAuth from '../middleware/checkAuth';

const router = Router();

router.get("/", (req, res) => {
    res.send("<h1> Home Pages</h1>")
});
router.get("/products", checkAuth, list)
router.post("/products", checkAuth , get)
router.get("/products/:id", checkAuth , create)
router.delete("/products/:id", checkAuth , remove)
router.put("/product/:id", checkAuth , update)

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