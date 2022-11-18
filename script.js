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
            reject('We can only talk to Google')
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response')
        resolve(`Extra Information + ${response}`)
    })
}

//If requesting something besides Google it will go to the error part
// makeRequest('Google').then(response => {
//     console.log('Response Received')
//     return processRequest(response)
// }).then(processdResponse => {
//     console.log(processdResponse)
// }).catch(err => {
//     console.log(err)
// })

//Need some kind of function that your awaiting code is inside of 
async function doWork() {
    try {
   const response = await makeRequest('Facebook') //tells code to wait with await keyword
   console.log('Response Received')
   const processedResponse = await processRequest(response)
   console.log(processedResponse)
} catch (err) {
    console.log(err)
}

}
doWork()

//How to get error--> use try-put in all the code that could potentially
//fail Any errors that come through the try section will go into the 
//catch section 

//Much easier to reason with
//Biggest thing-make sure to have it wrapped in a function and
//has async 
