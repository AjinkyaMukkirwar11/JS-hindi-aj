// singleton

//  it make from constructor then n then only make singalton 


// object literals66

// Objec6t.create //it made by6 constructor

const mySym = Symbol("key1")

const JsUser = {
    name: "Ajinkya",
    "full name": "Ajinkya Mukkirwar",
    [mySym]: "mykey1",
    age: 29,
    location: "Hingoli",
    email: "ajinkya@google.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "ajinkya@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "ajinkya@microsoft.com"
//console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());