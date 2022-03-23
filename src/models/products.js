import mongoose, { ObjectId } from "mongoose";
const productSchema =  mongoose.Schema({
    name: {
        type: String,
        require: true,
        minLength: 5,
    },
    slug: {
        type: String,
        lowercase: true,
        unique: true,
        index: true,
    },
    description: {
        type: String,

    },
    price: {
        type: Number,
        require: true,
    },
    caterogy: {
        type: ObjectId,
        ref: "Category",
    }
},{ timestamps: true});

export default mongoose.model("product", productSchema);