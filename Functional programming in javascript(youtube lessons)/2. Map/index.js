/**
 * Created by i.dobrovolsky on 1/12/2016.
 */


'use strict';

let students = [
    {name: "Steve", age: 24},
    {name: "John", age: 16},
    {name: "Ariana", age: 17},
    {name: "Emily", age: 18},
    {name: "Daniel", age: 15}
];


let names = students.map((student) => student.name);


console.log(names);