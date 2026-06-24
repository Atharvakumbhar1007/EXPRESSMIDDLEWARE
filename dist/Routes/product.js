import { Router } from "express";
import { body, validationResult } from "express-validator";
const router = Router();
router.post("/product", [
    body("name")
        .trim()
        .notEmpty()
        .withMessage("Product name is required")
        .isLength({ min: 4, max: 150 })
        .withMessage("Name must be between 4 and 150 characters"),
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
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array(),
        });
    }
    const product = req.body;
    return res.status(201).json({
        message: "Product created successfully",
        product,
    });
});
export default router;
//# sourceMappingURL=product.js.map