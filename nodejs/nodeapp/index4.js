import express from 'express'
const app = express();
app.listen(8080,()=>{
    console.log("server started");
});
// const logger = (req,res,next)=>{
//     req.msg = "hello"
//     next();
// };
// app.use(logger);
// app.get("/",(req,res)=>{
//     res.send(req.msg + " world");
// });
// app.get("/products",(req,res)=>{
//     res.send(req.msg + " products");
// });

const auth = (req,res,next)=>{
    const name = req.params.name;
    if(name === "john"){
        next();
    }
    else{
        res.send("Access Denied");
    }
};
app.get("/:name", auth, (req,res)=>{
    res.send("Hello world");
});