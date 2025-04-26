export function formatWeatherData(apiData, cityName) {
    const { current, daily } = apiData

    // Converte data atual para formato legível (ex: "April 21, 2025")
    const date = new Date(current.time);
    const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    // temeratura maxima e minima dos proximos 7 dias
    const forecast = daily.time.map((_, index) => ({
        max: daily.temperature_2m_max[index],
        min: daily.temperature_2m_min[index],
    }))

    return {
        cityName: cityName,
        currentTemp: current.temperature_2m,
        date: formattedDate,
        icon: current.relative_humidity_2m > 50 ? "cloudy" : "sunny",
        forecast
    }
}
