class Stack {
    constructor() {
        this.items = [];
    }

    // Pushes an element onto the stack
    push(element) {
        this.items.push(element);
    }

    // Pops the top element from the stack and returns it
    pop() {
        if (this.isEmpty()) {
            return "Underflow"; // Indicate empty stack
        }
        return this.items.pop();
    }

    // Returns the top element of the stack without removing it
    peek() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items[this.items.length - 1];
    }

    // Checks if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }
}

// Example usage
const myStack = new Stack();
myStack.push("apple");
myStack.push("banana");
console.log(myStack.peek()); // Output: "banana" (Top element)
console.log(myStack.pop());   // Output: "banana" (Removed top element)
console.log(myStack.size());  // Output: 1 (Remaining element)



class Stack1 {
    constructor() {
        this.iteam = []

    }
    push(element1) {
        if (elementsss of element1)
        {
            this.iteam.push(elementssss)
        }
    }
    isEmpty(){
        return this.iteam.length==0
    }

}
const jyo = new Stack()
jyo.push(["jyothi", "jyothiii"])



class Stack2
{
  constructor() 
  {
    this.items = [];
  }
  /*Pushes an element onto the stack
  push(element) {
    this.items.push(element);
  }*/

  // Pushes multiple elements onto the stack (using a loop)
    pushMultiple(elements) 
 {
    for (const element of elements)
    {
       this.items.push(element);
    }
    console.log(this.items)
  }
  pop()
  {
      if(this.isEmpty())
      {
          return "Empty stack"
      }
      return this.iteam.pop()
  }
  isEmpty(){
        return this.iteam.length==0
    }
    console.log(this.items)
    
}

// Example usage
const myStack = new Stack();
//const elementsToPush = [];
myStack.pushMultiple(["apple", "banana", "orange"]);

