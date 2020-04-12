// https://leetcode.com/problems/integer-to-roman/
let ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
let tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
let hundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
let thousands = ['', 'M', 'MM', 'MMM' /**,... and so on */];

let intToRoman = (num) =>
  [
    thousands[parseInt(Math.floor(num / 1000))],
    hundreds[parseInt((num % 1000) / 100)],
    tens[parseInt((num % 100) / 10)],
    ones[parseInt(num % 10)],
  ].join('');

console.log(intToRoman(3));
console.log(intToRoman(58));
