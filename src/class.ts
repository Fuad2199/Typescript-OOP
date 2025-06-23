class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet():void {
        console.log(`Hello my name is ${this.name} and I'm ${this.age} years old.`);
    }
}

// Creating an object
const person1 = new Person("Alice", 25);
person1.greet();