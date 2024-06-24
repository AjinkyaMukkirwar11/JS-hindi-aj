// function

function saymyName() {
    console.log("A");
    console.log("J");
    console.log("I");
    console.log("N");
    console.log("K");
    console.log("Y");
    console.log("A");
    
}

// saymyName()


// function addTwoNumber(number1, number2) {
//     console.log(number1 + number2);
// }
function addTwoNumber(number1, number2) {
    //let result = number1 + number2
   // console.log("Ajinkya");
   // return result

   return number1 + number2
}


// addTwoNumber(3, 4)

const result = addTwoNumber(3, 5)

// console.log("Result: ", result); 

// function loginUserMessage(username) {
//     if (username === undefined) {
//         console.log("please enter a username");
//         return    }
//     return `${username} just logged in`
// }
function loginUserMessage(username = "Aj") {
    if (!username) {
        console.log("please enter a username");
        return    }
    return `${username} just logged in`
}

console.log (loginUserMessage("Mukkirwar"))