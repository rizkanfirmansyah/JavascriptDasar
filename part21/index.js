// Map pada Javascript

const people = [
    { firstname: "Rizkan", lastname: "Firmansyah", age: 19 },
    { firstname: "Ahmad", lastname: "Bajuri", age: 29 },
    { firstname: "Dadang", lastname: "Kurniawan", age: 18 },
];
console.log(people);

let result = people.map((p) => {
    return {
        fullname: `${p.firstname} ${p.lastname}`,
        age: p.age,
    }
})

console.log(result);