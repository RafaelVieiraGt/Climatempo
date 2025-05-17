import Header from "../../components/header/header";
import Search from "../../components/search-bar/search";
import './your-time.css';
import { useState } from "react";
import { fetchCityCoords } from "../../services/cityService";
import { fetchWeatherInfo } from "../../services/weatherService";
import notFound from '../../assets/not-found.svg'
import WeatherCard from "../../components/weatherCard/WeatherCard";

export default function YourTime() {
    const [loading, setLoading] = useState(false)
    const [weatherData, setWeatherData] = useState({})

    async function fetchCityWeather(name) {
        setLoading(true)
        const city = await fetchCityCoords(name)
        const weather = await fetchWeatherInfo(city)
        setWeatherData(weather)
        setLoading(false)
    }

    return (
        <div className="main-section">
            <Header />

            <div className="search-section">
                <div className="search-container">
                    <Search onSearch={fetchCityWeather} />
                </div>

                <div className="search-result">
                    {loading ? (
                        <div className="loading-container">
                            <span className="loading">Carregando...</span>

                        </div>
                    ) : Object.keys(weatherData).length === 0 ? (
                        <div className="not-found-area">
                            <span className="search">Pesquise sua cidade</span>
                            <img className="not-found" src={notFound} />
                        </div>
                    ) : (
                        <WeatherCard data={weatherData} />
                    )}
                </div>
            </div>
        </div>
    )
}