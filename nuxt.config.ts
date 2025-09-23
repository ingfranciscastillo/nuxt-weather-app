import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  runtimeConfig: {
    private: {
      openWeatherApiKey: process.env.NUXT_OPEN_WEATHER_API_KEY,
    }
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/css/main.css"],
  modules: [
    '@pinia/nuxt',
    "@nuxt/fonts",
    "nuxt-security",
    "nuxt-gtag",
    "@nuxt/icon",
  ],
  security: {
    headers: {
      contentSecurityPolicy: {
          "default-src": ["'self'"],
          "img-src": ["'self'", "data:", "blob:", "https://openweathermap.org"],
          "connect-src": ["'self'", "https://api.openweathermap.org"],
      }
    }
  },
  app: {
    head: {
      title: "Weather App",
      htmlAttrs: { lang: "es" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "Aplicación de clima con pronóstico de 5 días",
        },
      ],
    },
  },
});