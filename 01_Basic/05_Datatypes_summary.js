// # Primitive Datatypes

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3 

const isLoggedIn = false
const outsideTem = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 23456797568598468n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name:"Ajinkya",
    age: 29,
}

// function ka datatype Object Function hain
const myFunction = function(){
    console.log("Hello World");
}

// console.log(typeof bigNumber);
// console.log(typeof outsideTem);
// console.log(typeof myFunction);

// console.log(myFunction());
// console.log(heros);
// console.log(myObj);


// ***************************************************************

// Stact (Primitive) and Heap Memory (Non-Primitiver)


let myYoutubename = "Ajyoutubedotcom"

let anothername = myYoutubename
anothername = "Chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "Ajinkya@google.com"

console.log(userOne.email); 
console.log(userTwo.email); 