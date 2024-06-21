class Person {
    constructor(name, age, place) {
        this.name = name;
        this.age = age;
        this.place = place;
    }
    greeting() {
        console.log("my name is " + this.name);
        console.log("i am " + this.age + " years old");
        console.log("i am from " + this.place)
    }
}

// Create a new Persons object
const person1 = new Person("jyothiswar", 24, "Bangalore");
const person2 = new Person("rakesh", 25, "chittoor");

// Call the greet method on the person1 object
person1.greeting()
person2.greeting()
