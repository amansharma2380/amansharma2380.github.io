//Arrays

// const score = [2,1,3,4,7];
// console.log(score);
// console.log(score[0]);
// score.push(9);
// console.log(score);
// console.log(score.length);


// const newscore = [...score,9];
// console.log(newscore);

// const scorea = [5,9,8];
// const newscore = [...score,...scorea];

// const cart = {
//     1:5,
//     5:3,
// };
// const newCart = ({...cart, 2:9});
// console.log(newCart);

let cart = {};
const product = [
    {id: 1, name: "product 1", price: 20},
    {id: 2, name: "product 2", price: 50},
    {id: 3, name: "product 3", price: 70},
];
// const newProduct = [...product,{id: 4, name: "product 4", price: 56}];
function addToCart(id){
    cart = {...cart,[id]:1};
}
function increase(id){
    const qty = cart[id] ? cart[id]+1 : 1;
    cart = {...cart,[id]:qty};
}
function decrease(id){
    const qty = cart[id] ? cart[id]-1 : 1;
    cart = {...cart,[id]:qty};
}

addToCart(1);
console.log(cart);
addToCart(3);
console.log(cart);
addToCart(3);
console.log(cart);
increase(3)
console.log(cart);


decrease(3)
console.log(cart);
decrease(3)
console.log(cart);

