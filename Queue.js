class Queue {
    constructor() {
        this.data = []
    }
    enqueue(inserttt) {
        /*
        // passing singlr element into queue
        this.data.push(Elements)
          console.log("Queue after pushing the first elemnt into a array = ",this.data)*/
        for (const elemet of inserttt) {
            this.data.push(elemet)
        }
        console.log("Passsing multy elements into array = ", this.data)
    }
    dequeue() {
        this.data.shift(); //shift is a aray method it removes the first element in array
        console.log("After dequeue from the array = ", this.data)
    }
    peek() {
        const a = this.data[0]
        console.log("After Peek from the array = ", a)
    }
    lengthh() {
        const b = this.data.length
        console.log("The lengthof of an array = ", b)
    }
}
const jyo = new Queue()
jyo.enqueue(["Akkula", "Bharathi", "Ramesh", "Jyothiswar", "Lavanya"])
jyo.dequeue()
jyo.peek()
jyo.lengthh()

