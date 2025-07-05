import express from "express";
import userRouter from "./userRoute.js";
import productRouter from "./product.route.js";

const app = express();

app.listen(8080,()=>{
    console.log("Server started");
    
})

app.use("/api/user",userRouter);
app.use("/api/product",productRouter);