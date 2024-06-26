// reduce method
const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval 
// }, 0)

// const myTotal = myNums.reduce( (acc, curr) => {
//     console.log(`acc: ${acc} and curr: ${curr}`)
// return acc + curr}, 0)
 
// console.log(myTotal);


const shopingCart = [
    {
        itemName: "js course",
        price: 299
    },
    {
        itemName: "py course",
        price: 599
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shopingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);