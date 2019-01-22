const promise = new Promise ((resolve, reject) => {
    //Can be resolved or rejected only one time
    // If there are more resolve calls then the rest are ignored and only first is processed
    // Resolve can have a single argument, but one can resolve object
    setTimeout(() => {
        //resolve('This is my resolved data');
        reject('Something went wrong');
    }, 1500);  
});

console.log('before');

// Option 1 with error as 2nd argument in then 
// promise.then((data) => {
//         //with reject promise it triggers Javascript uncaught error in console
//         console.log('1', data);
//     }, (error) => {
//         //catching and printing the errors
//         console.log('error: ', error);
// });
    
// Option 2 with catch - better readability
promise.then((data) => {
    //with reject promise it triggers Javascript uncaught error in console
    console.log('1', data);
    return 'some data';
}).then((str)=> {
    console.log('2nd thing that runs after', str);
})
.catch((error) => {
    //catching and printing the errors
    console.log('error: ', error);
});

// promise.then((data) => {
//     console.log('2', data);
// });

console.log('after');