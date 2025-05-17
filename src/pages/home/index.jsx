import Header from "../../components/header/header";
import { useState, useEffect } from "react";
import WeatherCard from "../../components/weatherCard/WeatherCard";
import { fetchWeatherInfo } from "../../services/weatherService";
import './home.css'

export default function Home() {
    const cidadesBrasil = [
        { city: "São Paulo", lat: -23.55052, long: -46.63331 },
        { city: "Rio de Janeiro", lat: -22.90685, long: -43.17290 },
        { city: "Brasília", lat: -15.79389, long: -47.88278 },
        { city: "Salvador", lat: -12.97111, long: -38.51083 },
        { city: "Fortaleza", lat: -3.71722, long: -38.54306 },
        { city: "Belo Horizonte", lat: -19.92083, long: -43.93778 },
        { city: "Manaus", lat: -3.10194, long: -60.025 },
        { city: "Curitiba", lat: -25.42778, long: -49.27306 },
        { city: "Recife", lat: -8.05389, long: -34.88111 },
        { city: "Porto Alegre", lat: -30.03306, long: -51.23 }
    ];
    const [previsoes, setPrevisoes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchCities() {
            var response = []

            for (const cidade of cidadesBrasil) {
                const res = await fetchWeatherInfo(cidade)
                response.push(res)
            }

            console.log(response)
            setPrevisoes(response)
            setLoading(false)
        }

        fetchCities()
    }, [])

    return (
        <div className="main">
            <Header />

            <div className="container-regioes">
                {loading ? (
                    <span className="loading">Carregando...</span>
                ) : previsoes.map((prev) => (
                    <WeatherCard data={prev}/>
                ))}
            </div>
        </div>
    )
}