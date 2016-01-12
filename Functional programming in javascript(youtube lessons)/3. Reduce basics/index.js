/**
 * Created by i.dobrovolsky on 1/12/2016.
 */

"use strict";


let orders = [
    {amount: 250},
    {amount: 400},
    {amount: 100},
    {amount: 325}
];


//Total amount
let totalAmount = orders.reduce((sum, order) => sum + order.amount, 0);

console.log(totalAmount);
