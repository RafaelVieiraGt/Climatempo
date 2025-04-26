import { formatWeatherData } from "../utils/jsonFormatter"


export async function fetchWeatherInfo(cityData){
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${cityData.lat}&longitude=${cityData.lon}&daily=temperature_2m_min,temperature_2m_max&current=temperature_2m,relative_humidity_2m`)
        const weatherData = await response.json()
        return formatWeatherData(weatherData, cityData.city)
    } catch(e) {
        console.log(e)
        return {}
    }
}