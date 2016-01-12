/**
 * Created by i.dobrovolsky on 1/12/2016.
 */

"use strict";


/*Dragon example...
let dragon = (name, size, element) => `${name} is a ${size} dragon that breathes ${element}!`;
console.log("Fluffykins", "tiny", "lightening");
*/

//Currying
let dragon =
    name =>
        size =>
            element =>
                `${name} is a ${size} dragon that breathes ${element}!`;

console.log(dragon("Fluffykins")("tiny")("lightening"));



//Another example of using carrying
let dragons = [
    {name: 'fluffykins', element: 'lighting'},
    {name: 'noomi', element: 'lighting'},
    {name: 'karo', element: 'fire'},
    {name: 'doomer', element: 'timewarp'}
];

const _ = require('lodash');

let hasElement = _.curry((element, obj) => obj.element === element);


//let isLighting = (dragon) => dragon.element === 'lighting'; //possible checking

//Now this is possible because hasElement is curryable!
let lightingDragons = dragons.filter(hasElement('lighting'));

console.log(lightingDragons);