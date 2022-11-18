// let p = new Promise((resolve, reject) => {
//     let a = 1 + 1
//     if (a == 2) {
//         resolve('Success')
//     }else {
//         reject('Failed')
//     }
// })

// p.then((message) => {
//     console.log('This is in then ' + message)
// }).catch((message) => {
//     console.log('This is in the catch ' + message)
// })
//catch any errors method

//Similar to callbacks but a bit cleaner than callbacks

//Helpful to do in the background

// const recordVideoOne = new Promise ((resolve, reject) => {
//     resolve('Video 1 Recorded')
// })

// const recordVideoTwo = new Promise ((resolve, reject) => {
//     resolve('Video 2 Recorded')
// })

// const recordVideoThree = new Promise ((resolve, reject) => {
//     resolve ('Video 3 Recorded')
// })

// //Running all the promises
// Promise.race([
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideoThree
// ]).then((message)=> {
//     console.log(message)
// }) 
//.then will send an array of all the messages.
//Promise.all called all, Promise.race will only return a single message


//ASYNC AWAIT

function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making Request to ${location}`)
        if (location === 'Google') {
            resolve('Google says hi')
        } else {
            reject('We can only tlk to Google')
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response')
        resolve(`Extra Information + ${response}`)
    })
}