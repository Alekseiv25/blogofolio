var users = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true
    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
];
//1
var usersName = users.map(function (users) { return users.name; }).join(', ');
console.log(usersName);
//2
var amountCars = (users.filter(function (users) { return users.cars; }).reduce(function (total, amount) { return total + amount.cars.length; }, 0));
console.log(amountCars);
// //3
function hasEducation(arr) {
    return (arr.filter(function (users) { return users.hasEducation; }));
}
console.log(hasEducation(users));
//4
function hasAnimal(arr) {
    return (arr.filter(function (users) { return users.animals; }));
}
console.log(hasAnimal(users));
//5
function carsName(arr) {
    return arr.filter(function (users) { return users.cars; }).map(function (users) { return users.cars; }).join(',');
}
console.log(carsName(users));
