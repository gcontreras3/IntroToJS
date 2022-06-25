// direct for-of loops

// ES6 part 2 classes and constructors
// High order functions, You will use them alot in react.
//Mapping over an array of objects, 

const moviePatrons = [
    {name: "Dyl", age: 28},
    {name: "Joe", age: 15},
    {name: "Rick", age: 45},
    {name: "Peter", age: 18},
    {name: "Ned", age: 12},
    {name: "Katie", age: 26},
    {name: "Tristyn", age: 24},
    {name: "Cam", age: 17}
]
// for(let i = 0; i<moviePatrons.length; i++){
//     // setTimeout(5000)
//     console.log(moviePatrons[i])
// }
const checkAge = (patrons) => {

}
const movieGoerInfo = moviePatrons.map(patrons => {
    if(patrons.age >= 17){
        patrons.canWatchR = true
    }else {
        patrons.canWatchR = false
    }
    if(patrons.age >= 13){
        patrons.canWatchpg13 = true
    }else {
        patrons.canWatchpg13 = false
    }
    return {
        //return an object
        name: patrons.name,
        canWatchR: patrons.canWatchR,
        canWatchPG13: patrons.canWatchpg13
    }
})
console.log(movieGoerInfo);

// Constructors to classes - having a blueprint to an object

class Pokemon {
    constructor(name, type) {
        this.name = name; // looks like an object but not because we are using = sign
        this.type = type;
    }
    sayName(){
        console.log(`${this.name}!`);
        console.log(`Has a type of ${this.type}`);
    }
}

const pikachu = new Pokemon("Pikachu", "Electic"); // instansiating 
console.log(pikachu.name);
pikachu.sayName();


