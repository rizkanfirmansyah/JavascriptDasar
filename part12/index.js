// Array Mannipulation

const cars = ["Honda", "Lamborghini", "Mustang", "Ferari"];

// Access
console.log(cars[0]);

// Pop
cars.pop()
console.log(cars);

// Shift
cars.shift()
console.log(cars);

// Push
cars.push("Honda")
console.log(cars);

// Unshift
cars.unshift("Ferari")
console.log(cars);

// Length
console.log(cars.length);

// Delete
delete cars[1]
console.log(cars[1]);

// Merge
const carsNew = ['Toyota', 'Suzuki', 'Audi'];
const carsNew2 = ["Bugati"];
console.log(cars.concat(carsNew, carsNew2));

// Splice
cars.splice(0, 2, "Bugatti");
console.log(cars);
cars.splice(1, 1, "Bugatti");
console.log(cars);