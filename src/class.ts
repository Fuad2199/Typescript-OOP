// Example class
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

// ================================================================================================

class student {
    fullName: string;
    age: number;
    studentId: string;
    grades: number[];


    constructor(fullName: string, age: number, studentId: string, grades: number[]) {
        this.fullName = fullName;
        this.age = age;
        this.studentId = studentId;
        this.grades = grades;
    }

    getAverageGrade(): number {
        const total = this.grades.reduce((sum, grade) => sum + grade, 0);
        return total / this.grades.length;
    }

    getStudentInfo(): string {
        return `Student ${this.fullName} (${this.studentId}) is ${this.age} years old and have an average grade of `;
    }

}

const student1 = new student("John Doe", 20, "S101", [90, 85, 80])

console.log(student1.getStudentInfo() + student1.getAverageGrade() + ".")