const isArmstrong = require('./armstrong');

const number = 153;
console.log(`${number} is${isArmstrong(number) ? '' : ' not'} an Armstrong number.`);
