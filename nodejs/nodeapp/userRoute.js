import express from"express";
const  Router = express.Router();


Router.get("/show", (req,res)=>{
    res.send("user");
});
Router.post("/register", (req,res)=>{
    res.send("register");
});
Router.post("/login", (req,res)=>{
    res.send("logged in");
});
export default Router;