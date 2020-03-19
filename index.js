"use strict"

const promiseOne = new Promise(function (resolve, reject) {
    const value = false;    

    if (value) {
        resolve(true)
    } else {
        reject(false)
    }
});

const promiseTwo = new Promise(function (resolve, reject) {
    const value = false;    

    if (value) {
        resolve(true)
    } else {
        reject(false)
    }
});

const promiseThee = new Promise(function (resolve, reject) {
    const value = true;    

    if (value) {
        resolve(true)
    } else {
        reject(false)
    }
});

const promiseFour = new Promise(function (resolve, reject) {
    const value = false;    

    if (value) {
        resolve(true)
    } else {
        reject(false)
    }
});

const arrPromise = [ promiseOne, promiseTwo, promiseThee, promiseFour ].map(promise => promise.catch(err => err));

const p = Promise.all(arrPromise).then(arr => {
    console.log(arr);
    
    if (arr.some(value => value === true)) {
        return true
    } else if (arr.every(value => value === false)) {
        return false
    }
});

Promise.race([p]);
