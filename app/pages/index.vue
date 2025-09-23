<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
    <!-- Header with Dark Mode Toggle -->
    <header class="p-4">
      <div class="max-w-4xl mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold text-white">Weather App</h1>
          <button
          @click="toggleDarkMode"
          class="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors duration-200"
        >
          <SunIcon v-if="isDark" class="h-6 w-6 text-white" />
          <MoonIcon v-else class="h-6 w-6 text-white" />
        </button>
      </div>
    </header>

    <!-- Main Content -->
    <main class="px-4 pb-8">
      <div class="max-w-4xl mx-auto">
        <!-- Search Bar -->
        <div class="mb-8">
          <SearchBar />
        </div>

        <!-- Loading State -->
        <div v-if="weatherStore.loading && !weatherStore.currentWeather" class="text-center">
          <div class="inline-flex items-center px-4 py-2 text-white">
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Obteniendo datos del clima...
          </div>
        </div>

        <!-- Weather Content -->
        <div v-else-if="weatherStore.currentWeather" class="space-y-6">
          <!-- Current Weather Card -->
          <WeatherCard :weather="weatherStore.currentWeather" />
          
          <!-- Forecast -->
          <WeatherForecast :forecast="weatherStore.forecast" />
        </div>

        <!-- Empty State -->
        <div v-else-if="!weatherStore.loading" class="text-center text-white">
          <div class="max-w-md mx-auto">
            <svg class="mx-auto h-16 w-16 text-white/60 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.002 4.002 0 003 15z"></path>
            </svg>
            <h2 class="text-xl font-semibold mb-2">¡Bienvenido a Weather App!</h2>
            <p class="text-white/80">Busca una ciudad para ver el clima actual y el pronóstico.</p>
          </div>
        </div>
      </div>
    </main>

    <!-- Error Modal -->
    <ErrorModal 
      :show="!!weatherStore.error" 
      :message="weatherStore.error || ''"
      @close="weatherStore.clearError()"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline'
import { useWeatherStore } from '~/stores/weather'
import SearchBar from '~/components/SearchBar.vue'
import WeatherCard from '~/components/WeatherCard.vue'
import WeatherForecast from '~/components/WeatherForecast.vue'
import ErrorModal from '~/components/ErrorModal.vue'

const weatherStore = useWeatherStore()
const isDark = ref(false)

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('darkMode', 'true')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('darkMode', 'false')
  }
}

onMounted(() => {
  const savedDarkMode = localStorage.getItem('darkMode')
  if (savedDarkMode === 'true' || (!savedDarkMode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }

  weatherStore.loadLastSearchedCity()
})

useHead({
  title: 'Weather App - Pronóstico del Clima',
  htmlAttrs: {
    lang: "es"
  },
  meta: [
    { name: 'description', content: 'Aplicación de clima con pronóstico de 5 días' }
  ],
  link: [
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "/favicon.svg"
    }
  ],
})

const url = useRequestURL()
useSeoMeta({
  ogTitle: 'Weather App - Pronóstico del Clima',
  ogDescription: 'Aplicación de clima con pronóstico de 5 días',
  ogImage: new URL('/favicon.svg', url.origin).toString(),
  ogUrl: url.href,
  twitterTitle: 'Weather App - Pronóstico del Clima',
  twitterDescription: 'Aplicación de clima con pronóstico de 5 días',
  twitterImage: new URL('/favicon.svg', url.origin).toString(),
  twitterCard: 'summary'
})

</script>

<style>

body {
  background: #fff;
  color: rgba(0, 0, 0, .8);
}

.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}

</style>