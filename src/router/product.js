const { router, Router } = require("express");
const {checkAuth} = require("/src/middleware/checkAuth");

const router = Router();
router.get("/", (req, res) => {
    res.send("<h1> Home Pages</h1>")
});
router.get("/api/products", checkAuth, (req , res) => {
    const products = [
        {
            id: 1,
            name: "Products A"
        },
        {
            id: 2,
            name: "Products B"
        }
    ];
    res.json(products);
});
router.post("/api/products",checkAuth, (req, res) => {
    const products = [
        {
            id: 1,
            name: "Products A"
        },
        {
            id: 2,
            name: "Products B"
        }

    ];
    products.push(req.body);
    res.json(products);
})