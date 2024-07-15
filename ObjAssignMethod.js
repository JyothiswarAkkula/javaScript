/*
Object.assign it is a static methode the copies all the variables data
 if any data is similar it gives preference to the frequently added variables 
*/

const target = { a: 1, b: 2 ,c:20};
const source = { b: 10, c: 5 ,d:100};

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true
