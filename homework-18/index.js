const key = 'APPID=5d066958a60d315387d9492393935c19';
const apiUrl = 'http://api.openweathermap.org/data/2.5/weather?'

let city;

const select = document.querySelector('select');
const box = document.querySelector('.box');

if (select) {
    select.addEventListener('change', (e) => {
        city = select.value.toUpperCase();
        console.log(city);
        getWeather(apiUrl, city, key);
    })
}

// const parameters = [temp, pressure, description, humidity,speed, deg, icon]

function getWeather(apiUrl, city, key) {
    let url = `${apiUrl}q=${city}&units=metric&${key}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const {name, weather, main: {temp, pressure, humidity}, wind: {speed, deg} } = data;
        document.querySelector('h2').textContent = name;
        document.querySelector('img').src = `http://openweathermap.org/img/w/${weather[0].icon}.png`;

        const weatherData = [
            `temp: ${temp} °C`,
            `pressure: ${pressure} hPa`,
            `description: ${weather[0].description}`,
            `humidity: ${humidity} %`,
            `speed: ${speed} m/s`,
            `deg: ${deg} °`
        ]

        const ul = document.querySelector('.weather__list');
        ul.innerHTML = ''

        weatherData.forEach(data => {
            const li = document.createElement('li');
            li.textContent = data;
            ul.appendChild(li)
        })
        box.style.display = 'flex';
    })
    .catch((error) => {
        console.error('Error: ', error);
    })
}