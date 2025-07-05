import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const app = express();
const SECRET = "sometext";
app.listen(8080,()=>{
    console.log("Server started");
    
})
const user = [{
    name:"john",
    email:"john@gmail",
    password:"1234",
    role:"user",
},{
    name:"martin",
    email:"martin@gmail",
    password:"1234",
    role:"admin",
}]

app.use(express.json());

const auth = (req , res, next) => {
    try{
        let token = req.headers.authorization;
        token = token.split(" ")[1];
        const user = jwt.verify(token, SECRET);
        req.role = user.role;
        next();
        // res.json(token);
    }
    catch(err){
        return res.json({message:"access denied"});
    }
}

const authorize = (role) => {
    return (req, res, next)=>{
        
        if (req.role === role) {
            next();
        }
        else{
           return res.json({ message: "Forbidden: Insufficient privileges" });
        }
    };
};


app.post("/login",(req,res)=>{
    const {email, password} = req.body;
    const found = user.find(
        (user) => user.email === email && user.password === password
    );
    if(found){
const token = jwt.sign(found,SECRET);
res.status(200).json({user:found, token});
    }else{
        res.status(400).json({message: "Access denied"});
    }
})


app.get("/users", auth, authorize("admin"), (req,res)=>{
    res.json(user);
});


app.post("/register",(req,res)=>{
    const {name,email,password,role} = req.body;
    const hashedpwd = bcrypt.hash(password,10);
    const user = {
        name,
        email,
        password:hashedpwd,
        role,
    };
    user.push(user);
    res.json(user);

});