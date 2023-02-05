// Built In Function MATH & DATES

let nilai = 4.9;

console.log(Math.pow(12, 2));
console.log(Math.sqrt(144));
console.log(Math.max(14, 10, 5, 6, 78, 98));
console.log(Math.min(14, 10, 5, 6, 78, 98));
console.log(Math.random());

const date = new Date();

setInterval(() => {
    console.log(date.getMinutes());
}, 1000);