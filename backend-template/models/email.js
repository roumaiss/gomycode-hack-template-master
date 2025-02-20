import { Schema, model } from "mongoose";

const productSchema = new Schema(
    {
        sender: { type: String, required: true },
        receiver: { type: String, required: true },
        subject: { type: String, required: true },
        message: {
            type: String,
        },
        price: {
            current: { type: Number, required: true },
            original: { type: Number },
        },
        stock: { type: Number, default: 0 },
        image: { type: String },
    },
    {
        timestamps: true,
    }
);

const productModel = model("Product", productSchema);
export default productModel;
