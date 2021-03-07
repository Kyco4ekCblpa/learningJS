"use strict";

let a = 5;
let b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

const copy = obj; // в   *copy*   передаётся ссылка на   *obj*

copy.a = 10;

console.log(copy);
console.log(obj);

function copyObj(mainObj) {
    let objCopy = {};

    for (let key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copyObj(numbers);

console.log(newNumbers);

const add = {
    d: 17,
    i: 20
};

console.log(Object.assign(numbers, add));

const clone = Object.assign({}, numbers);

clone.c.x = 128;
clone.d = 128;

console.log(clone);
console.log(numbers);


console.log("----------------------------------------------");

const oldArr = ['a', 'b', 'c', ['d', 'e']];
const newArr = oldArr.slice();

newArr[1] = 'asdasd';
newArr[3][1] = 'ccccc';
console.log(newArr);
console.log(oldArr);


const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    intenet = [...video, ...blogs, 'vk', 'facebook'];

console.log("-----------------------------------------");
console.log(intenet);

function logger(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 25, 5, 7, 13];

logger(...num);

const array = ["a", "b"];
const newArray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {
    ...q
};

console.log("-----------------------------------");
console.log(newObj);