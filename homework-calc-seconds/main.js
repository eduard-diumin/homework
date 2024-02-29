let hours = prompt("Введіть кількість годин:");

while (isNaN(hours) || hours === null || hours === "") {
    hours = prompt("Введіть коректну кількість годин:");
}

let seconds = hours * 3600;

alert(`У ${hours} годинах ${seconds} секунд.`);
