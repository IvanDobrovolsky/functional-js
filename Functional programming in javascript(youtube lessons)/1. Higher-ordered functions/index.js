/**
 * Created by i.dobrovolsky on 1/11/2016.
 */

/*
       Functions are simple values in Javascript
       They can be assigned to variables, passed and returned in other functions
 */


// .filter() and .reject() functions
'use strict';

let students = [
    {name: "Steve", age: 24},
    {name: "John", age: 16},
    {name: "Ariana", age: 17},
    {name: "Emily", age: 18},
    {name: "Daniel", age: 15}
];

let isFullAged = (student) => student.age >= 18;

let fullAgedStudents = students.filter(isFullAged);
    //teenagerStudents = students.reject(isFullAged); //Not in Array.prototype, should be implemented manually

console.log(fullAgedStudents);