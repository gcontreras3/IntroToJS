// let bgc = {
//     bR: 251,
//     bG: 255,
//     bB: 0
// }

// function setup() {
//     createCanvas(500,500);
// }

// function draw() {
//     background(bgc.bR, bgc.bG, bgc.bB);
//     fill(0);
//     rect(25, 15, 450, )
// }

// let names = "Daniel";

// console.log(names.length);

// let name02 = "John";
// let eyeColor02 = "Brown";
// let age02 = 35;

// let name03 = "Daniel";
// let eyeColor03 = "Blue";
// let age03 = 27;

// let name01 = "Jane";
// let eyeColor01 = "Brown";
// let age01 = 47;

// // new Object() way

// let person = new Object();

// person.name = "Daniel";
// person.eyeColor = "Blue";
// person.age = 27;
// // creating methods inside the object
// person.updateAge = function() {
//     return ++person.age;
// }

// console.log(person.age);
// person.updateAge();
// console.log(person.age);

let personMe = {
    firstName: "Jerry",
    lastName: "Contreras",
    age: 25,
    born: 1996,
    jobTitle: "Software Engineer",
    updateage: function() {
        return ++personMe.age;
    }
}
console.log(personMe);
personMe.updateage();
console.log(personMe);










