import slugify from "slugify";
import Product from "../models/products";
import Category from "../models/category";

//create product
export const create = async (req, res ) => {
    req.body.slug = slugify(req.body.name);
    try {
        const category = await new Category(req.body).save();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            message: "Thêm danh mục không thành công"
        })
    }
}

// get all 
export const list = async (req, res) => {
    try {
        const categories = await Category.find().exec();
        res.json(categories);
    } catch (error) {
        res.status(400).json({
            message:  "lỗi",
        })
    }
}
// get all 
export const read = async ( req, res ) => {
    try {
        const category =  await Category.findOne({slug: req.params.slug}).exec();
        const product = await (await Product.find({category: category}).populate("category").select("-category")).exec();
        console.log("product", product);
        res.json({
            category, product
        });
    } catch (error) {
        res.status(400).json({
            message:"lỗi",
        })
    }
}