"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user;
user = {
    name: "Sulavb",
};
var hobbies;
hobbies = [
    'sameeer', 'sulav', 'sakuntala'
];
function add(a, b) {
    var result = a + b;
    return result;
}
function calculate(a, b, calc) {
    calc(a, b);
}
calculate(2, 34, add);
