// Function this keyword Javascript

const car = {
    name: 'Lamborghini',
    color: 'red',
    publish: 2007,
    id: 1009,
    codename: function() {
        return this.total + "/" + this.buy;
    }
}

const sales = {
    total: 1000000,
    buy: 108,
    personName: "Jack Laguna"
}

console.log(car.codename.call(sales));