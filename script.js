let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve('Success')
    }else {
        reject('Failed')
    }
})

p.then((message) => {
    console.log('This is in then ' + message)
}).catch((message) => {
    console.log('This is in the catch ' + message)
})
//catch any errors method

//Similar to callbacks but a bit cleaner than callbacks

//Helpful to do in the background


