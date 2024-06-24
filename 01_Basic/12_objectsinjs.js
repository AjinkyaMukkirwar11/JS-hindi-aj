// const tinderUser = new Objects()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Ajinkya"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "ajinkya@google.com",
    fullname: {
        userfullname: {
            firstname: "Ajinkya",
            Lastname: "Mukkirwar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.Lastname);

const obj1 = {1: 'a', 2:'b'}
const obj2 = {3: 'a', 4:'b'}
const obj3 = {5: 'a', 6:'b'}
 
// const obj3 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3) 

const obj4 = {...obj1, ...obj2}
// console.log(obj4);

const users = [
    {
    id: 1,
    email: "ajinkya@gmail.com"
},
    {
    id: 1,
    email: "ajinkya@gmail.com"
},
    {
    id: 1,
    email: "ajinkya@gmail.com"
},
]


users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty(`isLoggedIn`));
// console.log(tinderUser.hasOwnProperty(`isLogged`));

// 

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Ajinkya"
}

// course.courseInstructor

const {courseInstructor} = course  // destructuring in object

console.log(courseInstructor);


// {
//     "name": "Ajinkya",
//     "coursename": "js in hindi",
//     "price": "free"

// }


// [ 
//     {},
//     {},
//     {}
// ]