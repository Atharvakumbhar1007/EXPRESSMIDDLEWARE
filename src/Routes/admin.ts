import express, { type NextFunction, type Request, type Response } from "express";

const app = express();
const adminRouter = express.Router();

// Middleware
adminRouter.use(function (req: Request, res: Response, next: NextFunction) {
    console.log("Admin Area accessed at ", new Date().toISOString());
    next();
});

adminRouter.get("/dashboard", function (req: Request, res: Response): void {
    console.log("Admin Dashboard");
    res.send("Admin Dashboard");
});
export { adminRouter };