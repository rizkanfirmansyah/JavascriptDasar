// Class Javascript

class Person {
    constructor(name, birth) {
        this.name = name;
        this.birth = birth;
    }

    age() {
        return new Date().getFullYear() - this.birth;
    }
}

let person1 = new Person();
person1.name = "Rizkan Firmansyah";
person1.birth = 2003;

console.log("Umur adalah : " + person1.age());

export default person1;
