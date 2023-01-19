// // 1Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

function cube(number) {
  return number ** 3;
}
console.log(cube(2) + cube(3));

// 2 Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

const tax = (salary) => salary * 0.87;
const salary = Number(prompt("Введите размер заработной платы"));
if (salary <= 0) {
  alert("Вы ввели неверное значение");
} else {
  console.log(
    `Размер заработной платы за вычетом налогов равен ${tax(salary)}`
  );
}

// 3 Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

const maxValue = (valueOne, valueSecond, valueThird) => {
  return Math.max(Number(valueOne), Number(valueSecond), Number(valueThird));
};
console.log(
  maxValue(
    prompt("Введите первое число"),
    prompt("Введите второе число"),
    prompt("Введите третье число")
  )
);

// 4 Необходимо реализовать четыре функции, каждая функция должна принимать по два
// числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение
// console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
// сложения в данном примере, ваши названия функций могут отличаться).
// Округлять значения, которые возвращают функции не нужно, однако, обратите
// внимание на разность, функция должна вычесть из большего числа меньшее, либо
// вернуть 0, если числа равны.
// Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
// не нужно.
const numberOne = Number(prompt("Введите первое число"));
const numberSecond = Number(prompt("Введите второе число"));
const summ = (numberOne, numberSecond) => numberOne + numberSecond;
const difference = (numberOne, numberSecond) =>
  Math.abs(numberOne - numberSecond);
const multiplication = (numberOne, numberSecond) => numberOne * numberSecond;
const division = (numberOne, numberSecond) => numberOne / numberSecond;

console.log(
  `Сумма чисел ${summ(numberOne, numberSecond)},
   разность чисел ${difference( numberOne,numberSecond )},
   произведение ${multiplication( numberOne, numberSecond )},
   частное ${division(numberOne, numberSecond)} `
);
