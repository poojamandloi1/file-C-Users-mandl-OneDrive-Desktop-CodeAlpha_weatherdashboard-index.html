async function getWeather() {
    const apiKey = '80d2ea2150d7c25a8fff0b2f6bbb76fa';
    const cityInput = document.getElementById('cityInput').value;
    const weatherInfo = document.getElementById('weatherInfo');

    if (!cityInput) {
        alert('Please enter a city name');
        return;
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        if (response.ok) {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const cityName = data.name;

            weatherInfo.innerHTML = `<p>${cityName}: ${temperature}°C, ${description}</p>`;
        } else {
            weatherInfo.innerHTML = `<p>Error: ${data.message}</p>`;
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
