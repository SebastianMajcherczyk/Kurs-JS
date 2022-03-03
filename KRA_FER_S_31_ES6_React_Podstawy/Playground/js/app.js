'use strict';

// const  fruits = ['banana', 'apple', 'orange', 'lemon'];

// const mappedFruits = fruits.map(function (fruit) {
//     return fruit + '!';
// });
//
// console.log(mappedFruits);

// const conversion = function ()
//
// function map(array, callback) {
//     let modified = [];
//     for (let i = 0; i < array.length; i++) {
//         modified.push(callback(array[i], i));
//     }
//     return modified;
// }
//     const mappedFruits = map(fruits, function (fruit, index) {
//         return `${index + 1} ${fruit}!`;
//
//     });
//
// console.log(fruits);
// console.log(mappedFruits);

// function filter(array, callback) {
//     const filteredArray =[]
//     for (let i = 0; i < array.length; i++ )
//         if (callback(array[i], i)) {
//             filteredArray.push(array[i]);
//         }
//     return filteredArray;
// }
// const filteredFruits = filter(fruits, function (fruit, index){
//     return fruit.includes('a');
//
// });
// console.log(fruits);
// console.log(filteredFruits);

const cart = {
    products: [
        {name: 'oranges', price: 15},
        {name: 'apples', price: 9},
    ],
    totalPrice: null,
    calculateSum: function () {
        const self = this
        this.products.forEach(function (product) {
            self.totalPrice += product.price;
        });
    }
};

console.log(cart.totalPrice);
cart.calculateSum();
console.log(cart.totalPrice);






