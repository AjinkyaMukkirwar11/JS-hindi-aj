const accountId = 144553
let accountEmail = "ajinkya.com"
var accountPassword = "12345"
accountCty = "Hingoli"

let accountState;

/*
    Prefer not to use var
    bcoz of issue in block scope and functional scope
*/


accountEmail = "aj.com"
accountPassword = "2345333"
accountCity = "Kalamnuri"
console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCty);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);