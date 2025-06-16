"use strict";

// Привітання
export function greet(name) {
  console.log(`Привіт, ${name}!`);
}

// Додавання
export const add = (a, b) => a + b;

// Множення
export const multiply = (a, b) => a * b;

// Сума довільної кількості чисел
export function sumAll(...nums) {
  return nums.reduce((acc, num) => acc + num, 0);
}
