import { Router } from "express";
import type { Request, Response } from "express";
import { body, validationResult } from "express-validator";

export interface User {
    name: string;
    price: number;
    category: string;
    inStock: boolean;
    quantity: number;
    description: string;
}

const router = Router();

router.post(
    "/product",
    [
        body("name")
            .trim()
            .notEmpty()
            .withMessage("User name is required")
            .isLength({ min: 4, max: 150 })
            .withMessage("Name must be between 4 and 150 characters"),

        body("description")
            .optional()
            .trim()
            .isLength({max:150})
            .withMessage("Description cannot greater then 150 charaters"),
            
        body("price")
            .notEmpty()
            .withMessage("Price is required")
            .isFloat({ min: 0.01 })
            .withMessage("Price must be positive")
            .toFloat(),

        body("category")
            .trim()
            .notEmpty()
            .withMessage("Category is required")
            .isIn(["electronics", "clothing", "food", "books"])
            .withMessage("Invalid category"),

        body("inStock")
            .optional()
            .isBoolean()
            .withMessage("inStock must be true or false")
            .toBoolean(),

        body("quantity")
            .notEmpty()
            .withMessage("Quantity is Required")
            .isInt({ min:0})
            .withMessage("Quantity cannot be negative")
            .toInt(),

        body("manWebsite")
            .optional()
            .isLength({min:10}).withMessage("Url too short")
            .isURL().withMessage("Invaild URL")
    ],
    (req: Request, res: Response) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
            });
        }

        const user: User = req.body;

        return res.status(201).json({
            message: "user created successfully",
            user,
        });
    }
);

export default router;