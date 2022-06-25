const body = document.body
body.append("Hello World") // append strings
body.appendChild("Hello World") // Cannot append strings with child
const div = document.createElement('div')
const spanHi = document.querySelector("#hi")
const spanBye = document.querySelector("#bye")

spanBye.remove() // removes from page
div.append(spanBye) // adds it back to page
spanHi.remove()
div.removeChild(spanHi)


// const strong = document.createElement('strong')
// strong.innerText = "hello world 5"

body.append(div) //appended div tag to body.
div.innerText = "Hello World" // view 
body.appendChild(div)

console.log(spanHi.dataset)

console.log(spanHi.dataset.test)

dispatchEvent.textContent = "Hello world 2 " // view
const div = document.querySelector("div")

console.log(div.textContent)
console.log(div.innerText)

div.textContent = "<strong>Hello World2 </strong>"
div.innerHTML = "<strong>Hello World3</strong>"
body.append(div)

console.log(spanHi.getAttribute())
spanHi.setAttribute("title", "")

spanHi.removeAttribute("id")

console.log(spanHi.getAttribute("title"))



// classes 
spanHi.classList.remove("hi1")
spanHi.classList.toggle("hi3", false, true)

spanHi.style.color = 'red'
spanHi.getElementsByClassName.backgroundColor = 'red'