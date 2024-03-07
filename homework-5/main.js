// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.
// Знайти мінімальний елемент масиву та його порядковий номер.
// Знайти максимальний елемент масиву та його порядковий номер.
// Визначити кількість негативних елементів.
// Знайти кількість непарних позитивних елементів.
// Знайти кількість парних позитивних елементів.
// Знайти суму парних позитивних елементів.
// Знайти суму непарних позитивних елементів.
// Знайти добуток позитивних елементів.
// Знайти найбільший серед елементів масиву, інші обнулити.

const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

const minValue = Math.min(...arr);
const minIndex = arr.indexOf(minValue);

console.log(`Мінімальний елемент масиву ${minValue} та його порядковий номер ${minIndex}`);

const maxValue = Math.max(...arr);
const maxIndex = arr.indexOf(maxValue);

console.log(`Максимальний елемент масиву ${maxValue} та його порядковий номер ${maxIndex}`);

const countNegative = arr.filter(num => num < 0).length;

console.log(`Кількість негативних елементів: ${countNegative}`);

const oddPositive = arr.filter(num => num > 0 && num % 2 !== 0).length;

console.log(`Кількість непарних позитивних елементів: ${oddPositive}`);

const evenPositive = arr.filter(num => num > 0 && num % 2 === 0).length

console.log(`Кількість парних позитивних елементів: ${evenPositive}`);

const sumEvenPositive = arr.filter(num => num > 0 && num % 2 === 0).reduce((acc, element) => acc + element, 0);

console.log(`Сума парних позитивних елементів: ${sumEvenPositive}`);

const sumOddPositive = arr.filter(num => num > 0 && num % 2 !== 0).reduce((acc, element) => acc + element, 0);

console.log(`Сума парних позитивних елементів: ${sumOddPositive}`);

const productPositive = arr.filter(num => num > 0).reduce((acc, element) => acc * element, 1);

console.log(`Добуток позитивних елементів: ${BigInt(productPositive)}`);

array = arr.map(num => (num === maxValue) ? num : 0);

console.log(`Масив з найбільшим значенням, інші обнулені: ${array}`);

