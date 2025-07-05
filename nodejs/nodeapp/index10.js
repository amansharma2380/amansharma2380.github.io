// const stName = process.argv[2];
// console.log(`hello ${stName}`)

import express from "express";
const app = express();


const server  = process.argv[2] || 8080;
app.listen(server,()=>{
    console.log(`Server started at ${server}`);
    
});


