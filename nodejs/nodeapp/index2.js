import http from "http";

// const result = http.add(2,4); // this is how we use built-in modules 
// console.log(result);

const server = http.createServer((req,res)=>{
    res.end("Radhe Radhe!!!")
});

server.listen(8080,()=>{
    console.log("server started");
});