/**
 * Created by i.dobrovolsky on 1/12/2016.
 */
"use strict";
/*
function plus1(value) {
    if (Array.isArray(value)) {
        var newArray = [];
        for(var i=0; i<value.length;i++) {
            newArray[i] = value[i] + 1
        }
        return newArray
    }
    if(typeof value === 'string') {
        var chars = value.split('');
        var newCharArray = [];
        for(i=0; i<chars.length;i++) {
            newCharArray[i] =
                String.fromCharCode(chars[i].charCodeAt(0)+1)
        }
        return newCharArray.join('')
    }
    return value + 1
}

console.log(plus1(3)); // 4
console.log(plus1([4,5])); //[5, 6]
console.log(plus1('ABC')); // BCD

*/
//Too much messy code! 9. Functors have to resolve the problem out.


/*
 In the context of JavaScript, a functor is a function, that, given a value and another function,
 unwraps the values to get to its inner value(s), calls the given function with the inner value(s),
 wraps the returned values in a new structure, and returns that new structure.
*/

//String functor
let stringFunctor = (value, fn) => {
    let chars = value.split("");
    return chars.map((char) => {
        return String.fromCharCode(fn(char.charCodeAt(0)))
    }).join("")
};

let plus1 = (value) => value + 1;

let minus1 = (value) => value - 1;

[3, 4].map(minus1); // [2, 3]








/*
Correction!
 A functor is an object that has a map method.
 Arrays in JavaScript implement map and are therefore functors.
 Promises, Streams and Trees often implement map in functional languages, and when they do, they are considered functors.
 The map method of the functor takes it’s own contents and transforms each of them using the transformation
 callback passed to map, and returns a new functor, which contains the structure as the first functor,
 but with the transformed values.
*/

let dragons = [
    {name: 'Fluffykins', health: 70},
    {name: 'Deathlord', health: 65000},
    {name: 'Little pizza', health: 2}
];

//map function takes a content of the functor and uses the callback passed to map to transform the content into something else
let names = dragons.map(dragon =>  dragon.name);


////Promises as functors - the code is not working
//
//const Promise = require('bluebird');
//const whenDragonLoaded = new Promise((resolve, reject) => {
//    // fake loading
//    setTimeout(() => resolve({
//     name: 'Fluffykins', health: 70
//    }, 2000))
//});
//
//const names =
//    whenDragonLoaded
//        .map(dragon => dragon.name)
//        .then(name => console.log(name));