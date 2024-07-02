//@1creating a set data structure 
let a=new Set([1, "apple", "apple", "true", 1, "banana"])

//console.log(a)
function check(aa) 
{
  for (let i of aa) 
  {
    console.log(i);
  }
}

// Print the Set elements
check(a);

// @2Create a Set
const mySet = new Set([1, "apple", true, 1, "banana"]); // Duplicates will be ignored

// Function to iterate and print Set elements
function printSet(set) 
{
  for (const element of set) 
  {
    console.log(element);
  }
}

// Print the Set elements
printSet(mySet);
