 import express from "express"

const app = express();
app.listen(8000,()=>{
    console.log("Server started"); 
 });


// // app.get("/",(req,res)=>{
// //     res.send("Radhe Radhe!!!");
// // });

// // app.get("/user",(req,res)=>{
// //     res.send("Radhe Radhe!!! and Jai shree Krishna");
// // });

// // app.get("/ab*cd",(req,res)=>{
// //     res.send("Hello mohit");
// // });

// app.get("/products/:id", (req, res) => {

//     const prod=[
//         {name:"Product 1" , price:299},
//         {name:"Product 2" , price:399},
//         {name:"Product 3" , price:199}
//     ];
//     const pid = req.params.id;
//     res.json(prod[pid-1]);
// });

// app.get("/:name",(req,res)=>{
//     res.send(req.params.name);
// });

// // app.get("/name",(req,res)=>{
// //     res.send("hello");
// // });

// app.get("/student/:name/:age",(req,res)=>{
//     res.send(req.params.name+" "+req.params.age)
// })

app.get("/",(req,res)=>{
    res.send(req.headers.authorization);
});

// app.get("/",(req,res)=>{
//     res.send(req.query.name+req.query.age);
// });
