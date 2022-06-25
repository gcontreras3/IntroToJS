// Using this
let people = {
    firstName: "Reggie",
    lastName: "Goodlord",
    occupation: "Developer",
    printName: function() {
        console.log(this.firstName, this.lastName)
    }
}
people.printName()
let person = {
    firstName: "Beast",
    lastName: "Beauty",
    printName: function() {
        console.log(this.firstName, this.lastName)
    }
}

person.printName()

people.printName()

































































