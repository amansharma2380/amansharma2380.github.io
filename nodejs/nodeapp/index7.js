import express from "express";
const app = express();
app.use("/images", express.static("images"));
app.use(express.static("public"));
app.listen(8080, ()=>{
    console.log("server started");
});

app.get("/products",(req,res)=>{
    res.send("product list");
});

