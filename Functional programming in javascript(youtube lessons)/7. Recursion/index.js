/**
 * Created by i.dobrovolsky on 1/12/2016.
 */

//Recursion is when a function calls itself until it doesn't

"use strict";
//Recursion example
let countDownFrom = (num) => {
    if(num === 0) return;
    console.log(num);
    countDownFrom(num-1);
};

countDownFrom(10);

/*Should output
10
9
...
1
 */

let makeTree = (categories, parent) => {
    let node = {};

    categories
        .filter(category => category.parent === parent)
        .forEach(category => node[category.id] = makeTree(categories, category.id));
    return node;
};

//The task is to make a tree from the categories
let categories = [
    {id: 'animals', parent: null},
    {id: 'mammals', parent: 'animals'},
    {id: 'cats', parent: 'mammals'},
    {id: 'dogs', parent: 'mammals'},
    {id: 'chihuahua', parent: 'dogs'},
    {id: 'labrador', parent: 'dogs'},
    {id: 'persian', parent: 'cats'},
    {id: 'siamese', parent: 'cats'}
];

console.log(
    JSON.stringify(
            makeTree(categories, null)
        , null, 2)
);



