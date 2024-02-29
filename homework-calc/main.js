let operation = prompt("Введіть операцію (add, sub, mult, div):").toLowerCase();

while (!["add", "sub", "mult", "div"].includes(operation)) {
    operation = prompt("Введіть правильну операцію (add, sub, mult, div):").toLowerCase();
}

let numberA = prompt("Введіть перше число:");

while (isNaN(numberA) || numberA === null || numberA === "") {
    numberA = prompt("Введіть коректне перше число:");
}

let numberB = prompt("Введіть друге число:");

while (isNaN(numberB) || numberB === null || numberB === "") {
    numberB = prompt("Введіть коректне друге число:");
}

numberA = parseFloat(numberA);
numberB = parseFloat(numberB);

let result;

switch (operation) {
    case "add":
        result = numberA + numberB;
        break;
    case "sub":
        result = numberA - numberB;
        break;
    case "mult":
        result = numberA * numberB;
        break;
    case "div":
        if (numberB === 0) {
            alert("Ділення на нуль неможливе.");
        } else {
            result = numberA / numberB;
        }
        break;
    default:
        alert("Непідтримувана операція. Спробуйте ще раз.");
        break;
}

if (result !== undefined) {
    alert(`Результат операції ${operation} з числами ${numberA} і ${numberB} дорівнює ${result}`);
}
