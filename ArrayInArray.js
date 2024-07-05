//@ Exapmle1
// Create an array to hold multiple inner arrays
const data = [
    ["Name", "Jyothiswar", 25], // Inner array with information about jyothi
    ["City", "chittoor", 10000000], // Inner array with city information
    ["Job", "Software Engineer", 80000], // Inner array with job information
];

// Access data from inner arrays
console.log(`Name: ${data[0][1]}`); // Access Alice's name
console.log(`City Population: ${data[1][2]}`); // Access city population
console.log(data[2][2]); //Acess the role of jyothi

//two ways of looping an array in javascript.

// Loop through the outer array and print inner arrays
for (const item of data) {
    console.log(item); // Print each inner array
}

//loping with index
for (let i = 0; i < data.length; i++) {
    // Your code to be executed for each element
    console.log(data[i]); // Example: prints each element
}


//@2 Exapmle2
// Create an array to store multiple shopping lists
const shoppingLists = [
    // First list
    ["Milk", "Bread", "Eggs"],
    // Second list
    ["Apples", "Bananas", "Oranges", ["Yogurt", "Cheese"]],
];

// Accessing elements
console.log("First list:", shoppingLists[0]); // Output: ["Milk", "Bread", "Eggs"]

// Accessing elements within a sub-array
console.log("Second list, first item:", shoppingLists[1][0]);
// Output: "Apples"
console.log("Second list, dairy items:", shoppingLists[1][3]);
// Output: ["Yogurt", "Cheese"]

// Looping through the outer array
for (const list of shoppingLists) {
    console.log("Shopping List:");
    for (const item of list) {
        console.log("-", item);
    }
}




