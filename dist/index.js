import express from "express";
import { adminRouter } from "./Routes/admin.js";
import ProductRouter from "./Routes/product.js";
const app = express();
app.use(express.json());
app.use("/products", ProductRouter);
app.use("/admin", adminRouter);
//any function that handle req/next -> is middleware
app.use(function (req, res, next) {
    console.log("A");
    next();
});
app.use(function (req, res, next) {
    console.log("B");
    next();
});
app.listen(3000, function () {
    console.log("Server running on http://localhost:3000");
});
//aap.use -> 
/* Browser Request
      │
      ▼
Middleware 1
console.log("A")
      │
      ▼
next()
      │
      ▼
Middleware 2
console.log("B")
      │
      ▼
next()
      │
      ▼
No Route Handler */ 
//# sourceMappingURL=index.js.map