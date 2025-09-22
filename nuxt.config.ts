export default defineNuxtConfig({
  runtimeConfig: {
    private: {
      openWeatherApiKey: process.env.NUXT_PRIVATE_API_OPENWEATHER_API_KEY,
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/fonts", "nuxt-security", "nuxt-gtag", "@nuxt/icon"],
  app: {
    head: {
      title: "Weather App",
      htmlAttrs: { lang: "es" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "A simple weather app built with Nuxt 4 and OpenWeather API.",
        },
      ],
    },
  },
});
