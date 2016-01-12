/**
 * Created by i.dobrovolsky on 1/12/2016.
 */
'use strict';

//A stream is a flow of values that will be arriving whenever they feel like.

const stupidNumbersStream = {
    each: (callback) => {
        setTimeout(() => callback(1), 1000)
        setTimeout(() => callback(2), 2000)
        setTimeout(() => callback(3), 2000)
    }
};

//createStupidNumbersStream.each(console.log);

//The code is not working
//
//const fs = require('fs'),
//    highland = require('highland');
//
//highland(fs.createReadStream('data.csv', 'utf8'))
//    .split()
//    .each(x => console.log('each: ', x));