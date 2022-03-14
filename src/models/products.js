import mongoose from "mongoose";
const productSchema =  mongoose.Schema({
    name: {
        type: String,
        require: true,
        minLength: 5,
    },
    price: {
        type: Number,
        require: true,
    }
},{ timestamps: true});

export default mongoose.model("Product", productSchema);