// Primitive dtat types:

//  7 types : String, Number, Boolen, null,undefined,Symbol,bigInt

const score = 100
const num = 100.3

const isLoggedIn = false
const outsideTemp = null

const id = Symbol('1234')
const anotherId = Symbol('1234')
 
console.log(id === anotherId)

const bigNumber = 342312546n


// Reference (non-primitive)

// Array, object, functions


const heros = ["Shaktiman", "naagraj", "doga"]
let myobj = {
    name:"saurabh",
    age: 24,
}


const myFunction = function(){
    console.log("Hello JS")
}

console.log(typeof myobj)