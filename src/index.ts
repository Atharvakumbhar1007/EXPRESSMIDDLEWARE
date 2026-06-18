import express from "express";
import type { Request, Response, NextFunction} from "express";
const app = express();

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