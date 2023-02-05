// Set() pada Javascript

// Set()

// const arrayObj = [1, 1, 2, 3, 4, 5, 6, 6];

// const result = new Set(arrayObj);

// console.log(result);

const mySet = new Set([1, 2, 3, 4, 5, 6]);

// mySet.add({ nama: 'Sagala IT', umur: 19 });

mySet.clear();

console.log(mySet);
mySet.add({ nama: 'Sagala IT', umur: 19 });
console.log(mySet.delete(1));
console.log(mySet.size);