//  For IN Looping

const car = { color: "red", name: "Lamborghini", launch: 2010 };

const ganjil = [1, 3, 5, 7, 9, 11];

let result = "";

for (c in ganjil) {
    console.log(c);
    result += ganjil[c];
}

console.log(result);