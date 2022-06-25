// Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {
    // replaces all characters
    return string.replace(/([a-z])([A-Z])/g, "$1 $2");
}
console.log(solution("camelCasing"))
console.log(solution("RaceCar"))

//   newArray = (/[a-z]/g)
//   console.log(newArray)


// complete the function
function solution(string) {
    let res = "";
    let letters = string.split("");
    letters.forEach(letter=>{
      if(letter.toUpperCase() == letter)
        res+=" "+letter
      else
        res+=letter
    })
    return res;
}
