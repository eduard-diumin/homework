let message = "";

let birthYear = promptForInformation("Введіть свій рік народження:");
if (birthYear !== null) {
    birthYear = parseInt(birthYear);
}

let city = promptForInformation("Введіть місто, в якому ви живете:");
let favoriteSport = promptForInformation("Введіть ваш улюблений вид спорту:");

if (birthYear !== null) {
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    message += `Ваш вік: ${age} років\n`;
}

function promptForInformation(message) {
    let input = prompt(message);
    if (input === null || input === "") {
        switch (message) {
            case "Введіть свій рік народження:":
                alert("Шкода, що ви не захотіли ввести рік народження.");
                break;
            case "Введіть місто, в якому ви живете:":
                alert("Шкода, що ви не захотіли ввести місто.");
                break;
            case "Введіть ваш улюблений вид спорту:":
                alert("Шкода, що ви не захотіли ввести улюблений вид спорту.");
                break;
        }
        return null;
    }
    return input;
}


switch (city && city.toLowerCase()) {
    case "київ":
        country = "України";
        message += `Ти живеш у столиці ${country}.\n`;
        break;
    case "вашингтон":
        country = "США";
        message += `Ти живеш у столиці ${country}.\n`;
        break;
    case "лондон":
        country = "Великої Британії";
        message += `Ти живеш у столиці ${country}.\n`;
        break;
    default:
        message += city ? `Ти живеш у місті ${city}.\n` : '';
        break;
}

let champions = {
    "футбол": "Ліонель Мессі",
    "теніс": "Серена Вільямс",
    "баскетбол": "Леброн Джеймс"
};

let userEnteredSport = favoriteSport && favoriteSport.toLowerCase();
let championName = champions[userEnteredSport] || "";

if (championName) {
    message += `Твій улюблений спорт: ${userEnteredSport}. Круто! Хочеш стати як ${championName}?`;
} else if (userEnteredSport) {
    message += `Твій улюблений спорт: ${userEnteredSport}`;
}

if (message !== "") {
    alert(message);
}
