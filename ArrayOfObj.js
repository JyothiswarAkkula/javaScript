
/*RAW DATA
    #1
    name: "T-Shirt",
    price: 25.99,
    category: "Clothing",  
    #2
    name: "Laptop",
    price: 799.99,
    category: "Electronics",
    #3
    name: "Coffee Mug",
    price: 9.99,
    category: "Kitchen"
    #4(PUSh)
     id: 4,
    name: "Headphones",
    price: 49.99,
    category: "Electronics"
    #5(POP#1)
*/
// Create an array of objects
const Mart = [
    {
        id: 1,
        name: "T-Shirt",
        price: 25.99,
        category: "Clothing",
    },
    {
        id: 2,
        name: "Laptop",
        price: 799.99,
        category: "Electronics",
    },
    {
        id: 3,
        name: "Coffee Mug",
        price: 9.99,
        category: "Kitchen",
    },
];

// Access a specific product using its index
//#1
const firstProduct = Mart[0];
console.log("FIRST_PRODUCT=", firstProduct)
const SecondProduct = Mart[1];
console.log("SECOND_PRODUCT=", SecondProduct)
const trideProduct = Mart[2];
console.log("TRIDE_PRODUCT=", trideProduct)

// Loop through all products using a for loop
for (let i = 0; i < Mart.length; i++) {
    const product = Mart[i];
    console.log(`Product ID=${product.id}, NAME=${product.name},COST= ${product.price}`);
}
//#2
for (let j in Mart) {
    console.log(j)
}
//#3
for (let key of Mart) {
    console.log(key)
}

// Update the price of a product
Mart[1].price = 849.99;
console.log("Updated product prices:", Mart);


console.log("length of an array", Mart.length)


// Add a new product to the array
Mart.push({
    id: 4,
    name: "Headphones",
    price: 49.99,
    category: "Electronics",
});
console.log("Products with new addition:", Mart);

console.log("length of an array after adding new iteam", Mart.length)
//Remove the latest elements are newly addd elements in the Array
Mart.pop()
console.log(Mart)








