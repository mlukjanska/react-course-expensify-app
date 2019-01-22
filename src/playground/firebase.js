//import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDwlOqIR5k3jbwVOg4tQlwi4vXnt4xBUQE",
    authDomain: "expensify-ml.firebaseapp.com",
    databaseURL: "https://expensify-ml.firebaseio.com",
    projectId: "expensify-ml",
    storageBucket: "expensify-ml.appspot.com",
    messagingSenderId: "987637662419"
  };

firebase.initializeApp(config);

const database = firebase.database();

const onExpenseItemRemoved = database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
}, (e) => {
    console.log('Error with data fetching')
});

const onExpenseItemChanged = database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
}, (e) => {
    console.log('Error with data fetching')
});

//Also gets called for the existing ones 
const onExpenseItemAdded = database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
}, (e) => {
    console.log('Error with data fetching')
});

// const onValueChange = database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ... childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// }, (e) => {
//     console.log('Error with data fetching')
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ... childSnapshot.val()
//         });
//     });

//     console.log(expenses);
//   });


//Challenge 2 - add expenses
// database.ref('expenses').push({
//     description: 'Expense 1',
//     note: '',
//     amount: 1087879,
//     createdAt: 87987,
// });


// Just to get  the location object
// database.ref('location') 
// Just to get the location/city
// database.ref('location/city')
// To get all DB object
// database.ref()

//To be able to unsubscribe from the specific changes one needs to pass the specific function in off()
//Subscribing to the changes - when data changes it will be rerun
// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching')
// });

// //Unsubscribing from the changes
// database.ref().off('value', onValueChange);

//Challenge 1

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (e) => {
//     console.log('Error with data fetching')
// });

// Getting the Data SINGLE TIME
// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });

// database.ref().set({
//     name: 'Margarita',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Goolge'
//     },
//     location: {
//         city: 'Riga',
//         country: 'Latvia'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed.', e)
// });

// Updating data
// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Lisbon'
// })

//property can be deleted if setting to null
// database.ref().update({
//     name: 'Joao',
//     age: 36,
//     isSingle: null,
//     job: 'Dermatologist',
//     'location/city': 'Liepaja'
// })

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Data is removed');
//     }).catch((e) => {
//         console.log('This failed.', e)
//     });

// Alternative to remove, but not preferred
// database.ref('isSingle').set(null);

//   database.ref('attributes').set({
//             height: 157,
//             weight: 60
//   }).then(() => {
//     console.log('Attributes Data is saved');
// }).catch((e) => {
//     console.log('This failed.', e)
// });;