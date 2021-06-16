const weather = {
    apiKey: 'xxxxxxxxxxxxxxxxxxx',
    fetchWeather: fetchWeather,
    displayWeather: displayWeather,
    searchWeather: searchWeather,
    details: {
        // https://openweathermap.org/weather-conditions
        // clear sky
        '01d': 'https://images.unsplash.com/photo-1562261150-0989084c593e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
        '01n': 'https://images.unsplash.com/photo-1615751279266-8feb3b97e6d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        // few clouds
        '02d': 'https://images.unsplash.com/photo-1542797497-14fa314e4719?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        '02n': 'https://images.unsplash.com/photo-1473789810014-375ed569d0ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        // scattered clouds
        '03d': 'https://images.unsplash.com/photo-1506409192306-b368ff0c21eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
        '03n': 'https://images.unsplash.com/photo-1494253188410-ff0cdea5499e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        // broken clouds
        '04d': 'https://images.unsplash.com/photo-1496765352955-ed98220c6f7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1362&q=80',
        '04n': 'https://images.unsplash.com/photo-1496765352955-ed98220c6f7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1362&q=80',
        // shower rain
        '09d': 'https://images.unsplash.com/photo-1527766833261-b09c3163a791?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        '09n': 'https://images.unsplash.com/photo-1527766833261-b09c3163a791?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        // rain
        '10d': 'https://images.unsplash.com/photo-1433863448220-78aaa064ff47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80',
        '10n': 'https://images.unsplash.com/photo-1501999635878-71cb5379c2d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
        // thunderstorm
        '11d': 'https://images.unsplash.com/photo-1475116127127-e3ce09ee84e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        '11n': 'https://images.unsplash.com/photo-1475116127127-e3ce09ee84e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        // snow
        '13d': 'https://images.unsplash.com/photo-1516431883659-655d41c09bf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1052&q=80',
        '13n': 'https://images.unsplash.com/photo-1515759001579-b8922fb13a67?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        // mist
        '50d': 'https://images.unsplash.com/photo-1512923927402-a9867a68180e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
        '50n': 'https://images.unsplash.com/photo-1592685206312-af4ec1ef603a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80'
    }
}

const urlWeatherApi = 'http://api.openweathermap.org/data/2.5/weather'

function loading() {
    const msgEl = document.querySelector(".message-content")
    const weEl = document.querySelector(".weather")

    msgEl.classList.add("loading");
    weEl.classList.add("loading");
    msgEl.innerText = "Loading..."

    console.log("loading")
}

function loaded() {
    const msgEl = document.querySelector(".message-content")
    const weEl = document.querySelector(".weather")

    msgEl.classList.remove("loading");
    weEl.classList.remove("loading");
}

function displayError() {
    const msgEl = document.querySelector(".message-content")
    const weEl = document.querySelector(".weather")

    msgEl.innerText = "City not found!"
}

async function searchWeather() {
    const city = document.querySelector('.search-bar').value
    
    if (city) {
        loading()
        try {
            const data = await fetchWeather(city)
            displayWeather(data)
            loaded()
        }
        catch {
            console.log('error')
            displayError()
        }
    }
}

async function fetchWeather(city) {
    url = `${urlWeatherApi}?q=${city}&units=metric&appid=${weather.apiKey}`

    const resp = await fetch(url)
    const respData = resp.json()
    return respData
}

function displayWeather(data) {
    const { name } = data
    const { icon, description } = data.weather[0]
    const { temp, humidity } = data.main
    const { speed } = data.wind

    document.querySelector(".city").innerText = `Weather in ${name}`
    document.querySelector('.icon').src = `https://openweathermap.org/img/wn/${icon}.png`
    document.querySelector('.description').innerText = description
    document.querySelector('.temp').innerText = `${temp}°C`
    document.querySelector('.description').innerText = description
    document.querySelector('.humidity').innerText = `Humidity: ${humidity}%`
    document.querySelector('.wind').innerText = `Wind Speed: ${speed} km/h`

    document.body.style.backgroundImage = `url('${icon in weather.details ? weather.details[icon] : weather.details[0]}'`
}

document.querySelector('.search button').addEventListener('click', () => {
    weather.searchWeather()
})

document.querySelector('.search-bar').addEventListener('keyup', (event) => {
    if (event.key == 'Enter') {
        weather.searchWeather()
    }
})
