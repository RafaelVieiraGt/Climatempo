export function formatarTexto(texto) {
    return texto
        .normalize("NFD") // Remove acentos
        .replace(/[\u0300-\u036f]/g, "") // Remove marcas de acentuação
        .replace(/[^a-zA-Z0-9\s]/g, "") // Remove caracteres especiais
        .trim() // Remove espaços extras no início/fim
        .split(/\s+/) // Divide por espaços
        .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase()) // Capitaliza
        .join("-"); // Junta com hífen
}

export async function fetchCityCoords(name) {
    let formattedName = formatarTexto(name)

    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${formattedName}&format=json`)
        const data = await response.json()

        return {
            city: data[0]?.name,
            lat: data[0]?.lat,
            long: data[0]?.lon
        }
    } catch (e) {
        console.log(e)
        return {}
    }
}
