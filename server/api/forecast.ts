export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event)
    const apiKey = config.private.openWeatherApiKey
    const query = getQuery(event)
    const { city } = query

    const res = await $fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=es`)

    return res
} )