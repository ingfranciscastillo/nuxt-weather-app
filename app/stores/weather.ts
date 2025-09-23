import { defineStore } from "pinia";
import axios from "axios";

export interface WeatherData {
  name: string;
  country: string;
  temperature: number;
  feelsLike: number;
  humidity: number;
  description: string;
  icon: string;
  main: string;
}

export interface ForecastDay {
  date: string;
  tempMin: number;
  tempMax: number;
  description: string;
  icon: string;
}

export const useWeatherStore = defineStore("weather", {
  state: () => ({
    currentWeather: null as WeatherData | null,
    forecast: [] as ForecastDay[],
    currentCity: "",
    loading: false,
    error: null as string | null,
    lastSearchedCity: "",
  }),

  actions: {
    async fetchWeather(city: string) {
      const config = useRuntimeConfig();
      const apiKey = config.openWeatherApiKey;

      this.loading = true;
      this.error = null;

      try {
        // Fetch current weather
        const currentResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`
        );

        const data = currentResponse.data;
        this.currentWeather = {
          name: data.name,
          country: data.sys.country,
          temperature: Math.round(data.main.temp),
          feelsLike: Math.round(data.main.feels_like),
          humidity: data.main.humidity,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
          main: data.weather[0].main,
        };

        // Fetch forecast
        const forecastResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=es`
        );

        // Process forecast data - get one per day at noon
        const forecastData = forecastResponse.data.list;
        const dailyForecast: ForecastDay[] = [];

        for (let i = 0; i < forecastData.length; i += 8) {
          // Every 24 hours (8 * 3 hours)
          const item = forecastData[i];
          if (item) {
            dailyForecast.push({
              date: new Date(item.dt * 1000).toLocaleDateString("es-ES", {
                weekday: "short",
                day: "numeric",
                month: "short",
              }),
              tempMin: Math.round(item.main.temp_min),
              tempMax: Math.round(item.main.temp_max),
              description: item.weather[0].description,
              icon: item.weather[0].icon,
            });
          }
        }

        this.forecast = dailyForecast.slice(0, 5); // 5 days
        this.currentCity = city;
        this.lastSearchedCity = city;

        // Save to localStorage
        if (process.client) {
          localStorage.setItem("lastSearchedCity", city);
        }
      } catch (error: any) {
        this.error =
          error.response?.status === 404
            ? "Ciudad no encontrada. Por favor, verifica el nombre e intenta nuevamente."
            : "Error al obtener los datos del clima. Intenta nuevamente.";
        this.currentWeather = null;
        this.forecast = [];
      } finally {
        this.loading = false;
      }
    },

    loadLastSearchedCity() {
      if (process.client) {
        const saved = localStorage.getItem("lastSearchedCity");
        if (saved) {
          this.lastSearchedCity = saved;
          this.fetchWeather(saved);
        }
      }
    },

    clearError() {
      this.error = null;
    },
  },
});
