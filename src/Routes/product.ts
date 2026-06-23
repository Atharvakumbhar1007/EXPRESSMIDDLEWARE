export interface Product{
    name:string;
    price:number;
    category:string;
    instock:boolean;
}
import express from "express";
import { body } from "express-validator";

// VALIDATION - Checks data is correct or not 
const app = express();
app.use(express.json());
app.post("/product", [
    body("name")
    .trim()
    .notEmpty().withMessage("Product name is required")
    .isLength({min:4, max:150}).withMessage(("Name too Short"))
]);