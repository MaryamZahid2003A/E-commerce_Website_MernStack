import expressAsyncHandler from "express-async-handler";
import Product from "../model/ProductModel.js";

const GetProduct = expressAsyncHandler(async (req, res) => {
    try {
        const products = await Product.find({type:'Beverage'});
        console.log(products)
        if (products.length > 0) {
            res.status(200).json(products.map(product => ({
                _id: product._id,
                name: product.name,
                type: product.type,
                img: product.img,
                quantity:product.quantity,
                price: product.price,
                description: product.description
            })));
        } else {
            res.status(404).json({ message: "No products found" });
        }
    } catch (error) {
        console.error("Error in Getting the Product Data:", error);
        res.status(500).json({
            message: "Error in Getting the Product Data",
            error: error.message, 
        });
    }
});
const GetShan= expressAsyncHandler(async (req, res) => {
    try {
        const products = await Product.find({type:'shan'});
        console.log(products)
        if (products.length > 0) {
            res.status(200).json(products.map(product => ({
                _id: product._id,
                name: product.name,
                type: product.type,
                img: product.img,
                quantity:product.quantity,
                price: product.price,
                description: product.description
            })));
        } else {
            res.status(404).json({ message: "No products found" });
        }
    } catch (error) {
        console.error("Error in Getting the Product Data:", error);
        res.status(500).json({
            message: "Error in Getting the Product Data",
            error: error.message, 
        });
    }
});

const GetFruit= expressAsyncHandler(async (req, res) => {
    try {
        const products = await Product.find({type:'fruit'});
        console.log(products)
        if (products.length > 0) {
            res.status(200).json(products.map(product => ({
                _id: product._id,
                name: product.name,
                type: product.type,
                img: product.img,
                quantity:product.quantity,
                price: product.price,
                description: product.description
            })));
        } else {
            res.status(404).json({ message: "No products found" });
        }
    } catch (error) {
        console.error("Error in Getting the Product Data:", error);
        res.status(500).json({
            message: "Error in Getting the Product Data",
            error: error.message, 
        });
    }
});
const GetMeat= expressAsyncHandler(async (req, res) => {
    try {
        const products = await Product.find({type:'chicken'});
        console.log(products)
        if (products.length > 0) {
            res.status(200).json(products.map(product => ({
                _id: product._id,
                name: product.name,
                type: product.type,
                img: product.img,
                quantity:product.quantity,
                price: product.price,
                description: product.description
            })));
        } else {
            res.status(404).json({ message: "No products found" });
        }
    } catch (error) {
        console.error("Error in Getting the Product Data:", error);
        res.status(500).json({
            message: "Error in Getting the Product Data",
            error: error.message, 
        });
    }
});
const GetDairy= expressAsyncHandler(async (req, res) => {
    try {
        const products = await Product.find({type:'dairy'});
        console.log(products)
        if (products.length > 0) {
            res.status(200).json(products.map(product => ({
                _id: product._id,
                name: product.name,
                type: product.type,
                img: product.img,
                quantity:product.quantity,
                price: product.price,
                description: product.description
            })));
        } else {
            res.status(404).json({ message: "No products found" });
        }
    } catch (error) {
        console.error("Error in Getting the Product Data:", error);
        res.status(500).json({
            message: "Error in Getting the Product Data",
            error: error.message, 
        });
    }
});
export { GetProduct,GetShan,GetFruit,GetMeat,GetDairy};
