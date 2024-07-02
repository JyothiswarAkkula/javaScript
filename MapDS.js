//@1creating a map
let a=new Map()
a.set("apple","red")
a.set("dates","black")
a.set("mango","yellow")
a.set("grapes","green")

//console.log(a)
function check(i)
{
    for(let i of a)
    {
        console.log(i)
        console.log()
    }
}
check(a)



// @2Creating  a Map
const fruitColors = new Map();

// Add elements to the Map
fruitColors.set("apple", "red");
fruitColors.set("banana", "yellow");
fruitColors.set("grape", "purple");

// Function to iterate and print Map entries
function printMap(map) {
    for (const [key, value] of map.entries()) {
        console.log(`Key: ${key}, Value: ${value}`);
    }
}

// Print the Map elements
printMap(fruitColors);
