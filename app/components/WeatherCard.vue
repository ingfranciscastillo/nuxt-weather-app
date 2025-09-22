<template>
  <div v-if="weather" class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-fade-in">
    <div class="text-center">
      <!-- City and Country -->
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        {{ weather.name }}, {{ weather.country }}
      </h2>
      
      <!-- Weather Icon and Temperature -->
      <div class="flex items-center justify-center mb-4">
        <img 
          :src="`https://openweathermap.org/img/wn/${weather.icon}@2x.png`" 
          :alt="weather.description"
          class="w-20 h-20"
        />
        <span class="text-5xl font-bold text-gray-900 dark:text-white ml-2">
          {{ weather.temperature }}°C
        </span>
      </div>
      
      <!-- Description -->
      <p class="text-lg text-gray-600 dark:text-gray-300 mb-6 capitalize">
        {{ weather.description }}
      </p>
      
      <!-- Weather Details Grid -->
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-blue-50 dark:bg-gray-700 rounded-lg p-4">
          <div class="flex items-center justify-center mb-2">
            <svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-400">Sensación térmica</p>
          <p class="text-xl font-semibold text-gray-900 dark:text-white">{{ weather.feelsLike }}°C</p>
        </div>
        
        <div class="bg-blue-50 dark:bg-gray-700 rounded-lg p-4">
          <div class="flex items-center justify-center mb-2">
            <svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.002 4.002 0 003 15z"></path>
            </svg>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-400">Humedad</p>
          <p class="text-xl font-semibold text-gray-900 dark:text-white">{{ weather.humidity }}%</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { WeatherData } from '~/stores/weather'

defineProps<{
  weather: WeatherData | null
}>()
</script>