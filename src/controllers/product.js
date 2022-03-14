import mongoose  from "mongoose";
const Product = mongoose.model('Product', { name: String });

// const products = [
//     { id: 1, name: "Product A" },
//     { id: 2, name: "Product B" },
//     { id: 3, name: "Product C" },
// ];

export const list = async (req, res) => { // get all
    try {
        const product =  await Product.find({});
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "không thành công",
        })
    }
    
}

export const get = async (req, res) => { // get a product
    try {
        const product = await Product.findOne({_id:req.params.id}).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "không có sản phẩm",
        })
    }
}

export const create = async (req, res) => { // create product
    try {
        const product = await new Product(req.body).save();
        res.json(product);    
    } catch (error) {
        res.status(400).json({
            message: "Thêm sản phẩm không thành công"
        })
    }
}

export const remove = async (req, res) => { // delete product
    try {
        const product = await Product.findOneAndDelete({_id: req.params.id}).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "Xóa sản phẩm thành công!!"
        })
    }
}
export const update = async (req, res) => { // update product
    const condition = {_id: req.params.id}
    const update = req.body;
    const optional = {new : true};
    try {
        const product =  Product.findOneAndUpdate(condition, update , optional).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "Cập nhận sản phẩm thành công!!"
        })
    }
}