import express, {} from "express";
const app = express();
const adminRouter = express.Router();
// Middleware
adminRouter.use(function (req, res, next) {
    console.log("Admin Area accessed at ", new Date().toISOString());
    next();
});
adminRouter.get("/dashboard", function (req, res) {
    console.log("Admin Dashboard");
    res.send("Admin Dashboard");
});
export { adminRouter };
//# sourceMappingURL=admin.js.map