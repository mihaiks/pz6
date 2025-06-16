"use strict";

import { greet, add, multiply, sumAll } from "./utils.js";
import { user } from "./data.js";

// Логіка
console.log("Модульний код підключено!");
greet("Студент");

console.log("10 + 5 =", add(10, 5));
console.log("10 * 5 =", multiply(10, 5));

const { name, age, city } = user;
const info = `Користувач: ${name}, Вік: ${age}, Місто: ${city}`;
console.log(info);

// Виведення на сторінку
const app = document.getElementById("app");
app.innerHTML = `
  <p>${info}</p>
  <p>10 + 5 = ${add(10, 5)}</p>
  <p>10 * 5 = ${multiply(10, 5)}</p>
  <p>Сума чисел 1,2,3,4: ${sumAll(1, 2, 3, 4)}</p>
`;

// spread оператор — об'єднання масивів
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log("Об'єднаний масив:", combined);
