// for of loop

// ["", "", ""]
// [{}, {}, {}]


// const arr = [1, 2, 3, 4 ,5]

// for (const num of arr) {
//     console.log(num);
// }


// const greetings = "Hello World"
// console.log(greetings.length);
// for (const str of greetings) {
//    // console.log(str.length);
//     console.log(`each car is ${str}`);
// }

// Map

const map = new Map()
map.set(`IN`, "India")
map.set(`USA`, "United States of America")
map.set(`Fr`, "France")
map.set(`IN`, "India")

//console.log(map);

for (const [key, value] of map) {
    console.log(key, `:-`, value);
}


// const myObject = {
//     `game1`: `NFS`,
//     `game2`: `Spiderman`
// }

// for (const iterator of object) {
    
// }
