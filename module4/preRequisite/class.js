class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    
    welcome(){
        console.log("hello " + this.name);
    }
}

let person = new Person("Aman",23);
console.log(person);
person.welcome();

// Creating an another classs using the class Person with the help of super 
class Teacher extends Person{ 
    constructor(name,age,classStrength){
        super(name,age); // Inheritance from parent Person
        this.classStrength = classStrength;
    }
}

let teacher = new Teacher("Adam",23,56);
console.log(teacher);