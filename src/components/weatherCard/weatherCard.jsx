import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Tooltip,
    Filler,
} from "chart.js";

ChartJS.register(
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Tooltip,
    Filler,
)

export default function WeatherCard({ data }) {

    const charData = {
        labels: data.forecast.map((_, index) => `Dia ${index + 1}`),
        datasets: [
            {
                label: "Máx (°C)",
                data: data.forecast.map((f) => f.max),
                fill: false,
                borderColor: "#999999",
                tension: 0.3,
            },
            {
                label: "Mín (°C)",
                data: data.forecast.map((f) => f.min),
                fill: false,
                borderColor: "#999999",
                borderDash: [5, 5],
                tension: 0.3,
            },
        ],
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                mode: "index",
                intersect: false,
            },
        },
        scales: {
            x: {
                display: false,
            },
            y: {
                display: false,
                beginAtZero: false,
            },
        },
    };

    return (
        <div className="weather-card">
            {/* nome cidade */}
            <h2 className="city-name">{data.city}</h2>

            {/* informações */}
            <div className="weather-info" >
                <div className="weather-main">
                    <div className="weather-icon"></div>
                    <span className="temperature">{data.currentTemp}</span>
                </div>

                <span className="weather-date">{data.date}</span>
            </div>

            <div className="weather-chart">
                <Line options={options} data={charData} />
            </div>
        </div>
    )
}