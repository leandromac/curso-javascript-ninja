'use strict';

function sum(num1, num2) {
  if(isEmpty(num1) || isEmpty(num2)) {
    return new Error('Set two numbers for parameter');
  }
  if(!isNumber(new Number(num1)) || !isNumber(num2)) {
    return new Error('The parameters need to be numbers!')
  }
  return num1 + num2;
}

function isEmpty(arg) {
  return !arg;
}

function isNumber(arg) {
  return Object.prototype.toString.call(arg) === '[object Number]'; 
}

module.exports = sum;