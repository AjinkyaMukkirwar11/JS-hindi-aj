// if
// const isUseroggedIn = true
// const temperature = 51

// if (temperature < 50) {
//     console.log("less than 50");
// }
// else {
// console.log("temerature is greater than 50");
// }
// console.log("Executed");

// <, >, <=, >=, ==, !=, ===, !==, 

// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }
  //  console.log(`User power: ${power}`);

  // const balance = 1000

 // if(balance > 500) console.log("test"), console.log("test2");

//  if (balance < 500) {
//     console.log("less than");
//  }
//  else if (balance < 750) {
//     console.log("less than 750");
//  }
//  else if (balance < 900){
//     console.log("less than 900");
//  }
//  else{
//     console.log("less than 1200");
//  }


const useLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(useLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
console.log("User logged in");
}
    