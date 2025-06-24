//promises
// function f1(){
//     return 5;
//     // setTimeout(() => {
//     //     return 5;
//     // }, 1000);
// }

function f1(){
    return new Promise((resolve, reject)=>{
         resolve(5);
        //  reject("Something went wrong!");
    });
}

function f2(x){
    console.log(x+7);
    
}

// const n = f1();
// const result = f2(n);
// console.log(result);

f1()
    .then((n)=>f2(n))
    .catch((err) => console.log(err));


