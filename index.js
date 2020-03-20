"use strict"

// * Promises ----------------------------------------------------------------------------------------------------
const promiseOne = new Promise(function (resolve, reject) {
    const value = false;    

    if (value) {
        resolve(true)
    } else {
        reject(false)
    }
});

const promiseTwo = new Promise(function (resolve, reject) {
    const value = true;    

    if (value) {
        resolve(true)
    } else {
        reject(false)
    }
});

const promiseThee = new Promise(function (resolve, reject) {
    const value = false;    

    if (value) {
        resolve(true)
    } else {
        reject(false)
    }
});
// ------------------------------------------------------------------------------------------------------------------

// *Обрабатываем массив промисов так, чтобы его можно было пробросить в Promise.all ---------------------------------
const arrPromise = [ promiseOne, promiseTwo, promiseThee ].map(promise => promise.catch(err => err));
// ------------------------------------------------------------------------------------------------------------------

// *Promise.all вернет resolve, если хотя бы один э-т массива true --------------------------------------------------
// *Promise.all вернет reject, если все э-ты массива false 
const result = Promise.all(arrPromise)
.then(arr => { 
    return new Promise(function(resolve, reject) {
        if (arr.some(value => value === true)) {
            resolve(true)
        } else if (arr.every(value => value === false)) {
            reject(false)
        }
    }) 
});
// ------------------------------------------------------------------------------------------------------------------

// *Передаем результат в Promise.rase -------------------------------------------------------------------------------
Promise.race([ result ]);
// ------------------------------------------------------------------------------------------------------------------
