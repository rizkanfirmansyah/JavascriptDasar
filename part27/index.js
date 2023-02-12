// JSON / Javascript Object Notation

let data = `{
    "id":"1",
    "title":"Kisah seorang ",
    "description":"Biografi khusus seorang programmer",
    "price":"75000",
    "rating":"5",
    "created_at":"2022-11-19 10:45:07.789",
    "updated_at":"2022-11-19 10:45:07.789",
    "deleted_at":null}
`;

let result = JSON.parse(data);

console.log(result.description);

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