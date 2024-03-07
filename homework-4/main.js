// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….)
let arr = [];
for (let i = 20; i <= 30; i += 0.5) {
    arr.push(i)
}

console.log(arr);

// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
const usdPrice = 38.48;
let usdPriceList = []

for (let i = 10; i <= 100; i += 10) {
    const uah = i * usdPrice;
    let obj = {}
    obj.key = `${i} доларів`;
    obj.name = `${uah.toFixed(2)} гривень`;
    usdPriceList.push(obj);
}
console.table(usdPriceList);

// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
const intN = 20;

for (let i = 1; i <= 100; i++) {
    const square = i**2;
    if (square <= intN) {
        console.log(square);
    }
}

// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
const integer = 13; 

if (integer < 2) {
    console.log("Число не є простим");
} else {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(integer); i++) {
        if (integer % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log("Число є простим");
    } else {
        console.log("Число не є простим");
    }
}

// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
const intSquareThree = 81; 

let tempNumber = intSquareThree;
while (tempNumber > 1) {
    if (tempNumber % 3 !== 0) {
        console.log("Не можна одержати шляхом зведення числа у 3 ступінь");
        break;
    }
    tempNumber /= 3;
}

if (tempNumber === 1) {
    console.log("Можна одержати шляхом зведення числа у 3 ступінь");
}