"use strict";

// if (4 == 4) {
//     console.log('True');
// } else {
//     console.log('False');
// }

const num = 52;

// if (num < 49) {
//     console.log('Err');
// } else if (num > 100) {
//     console.log('Too much');
// } else {
//     console.log('Ok!');
// }


// (num == 50) ? console.log('True'): console.log('False');


switch (num) {
    case 50:
        console.log('True');
        break;

    case 49:
        console.log('False');
        break;

    default:
        console.log('Not today...');
        console.log('But you can try nex time!');
        break;
}