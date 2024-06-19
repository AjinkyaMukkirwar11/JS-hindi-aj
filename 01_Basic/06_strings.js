const name = "Ajinkya "
const repoCount = 50

// console.log(name + repoCount + " Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String (`Ajinkya`)
console.log(gameName);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(1));
console.log(gameName.indexOf(`A`));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-12,4)
console.log(anotherString);


const newStringOne = "   ajinkya  "
console.log(newStringOne.trim());

const url = "https://ajinkya.com/ajinkya%20mukkirwar"

console.log(url.replace(`%20`, `-`));

console.log(url.includes(`nidhi`)); 

console.log(gameName.split(`-`));