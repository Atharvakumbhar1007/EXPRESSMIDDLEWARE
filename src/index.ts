import express from "express";
import type { Request, Response, NextFunction} from "express";
import {adminRouter} from "./Routes/admin.js";
const app = express();
//any function that handle req/next -> is middleware
app.use(function(req:Request, res:Response, next: NextFunction){
    console.log("A");
    next();
});
app.use(function(req:Request, res:Response, next: NextFunction){
    console.log("B");
    next();
});

app.listen(3000, function(){
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