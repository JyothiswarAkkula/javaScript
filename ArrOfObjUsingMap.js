// Sample array of objects representing users
const users = [
    { name: "Jyothiswar", age: 25 },
    { name: "RAmesh", age: 30 },
    { name: "Deva", age: 22 },
  ];
  
  // Function to create greetings with formatted age
  function createGreeting(user) 
  {
    return `Hello, ${user.name}! You are ${user.age} years old.`;
  }
  // Apply map() to create greetings for each user
  const greetings = users.map(createGreeting);
  
  console.log("Original users:", users);
  console.log("Greetings:", greetings);
  