//
// Object Destructuring
//
// const person = {
//     name: 'Margarita',
//     age: 33,
//     location: {
//         city: 'Porto',
//         temp: 28
//     }
// };

// //Default value for the variable
// const { name: firstname = 'Anonymous', age } = person;
// // above assignment is equal to below
// // const name = person.name;
// // const age = person.age;
// console.log(`${firstname} is ${age}.`);

// //Renaming the variable from object
// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Egot is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//        // name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-published'} = book.publisher;
// console.log(publisherName);

// 
// Array destructuring
//

//const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// for all variables
//const [street, city, state, zip] = address;

// only for some variables
//const [, city, state] = address;
//console.log(`You are in ${city} ${state}.`);

// setting default
// const address = [];
// const [, , state = 'New York'] = address;
// console.log(`You are in ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', , '$2.75'];
const [coffeeType, , medium] = item;

console.log(`A medium ${coffeeType} costs ${medium}`);