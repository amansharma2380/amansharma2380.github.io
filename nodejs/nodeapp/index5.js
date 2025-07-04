import express, { json } from "express";
const app = express();
app.listen(8080, ()=>{
    console.log("SERVER STARTED");
    
});
app.use(express.json())
let product = [];

app.post("/",(req,res)=>{
    const {id, name, price} = req.body;
    const obj={
id,
name,
price,
    };
    product.push(obj);
    res.json({message: "product created"});
});
app.get("/", (req,res)=>{
    res.json(product);
});

app.delete("/:id", (req,res)=>{
const id = number(req.paraams.id);
product = product.filter((products)=> products.id !== pid);
res.json("Product deleted");
});