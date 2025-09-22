<template>
  <div v-if="forecast.length > 0" class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-slide-up">
    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
      Pronóstico de 5 días
    </h3>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      <div 
        v-for="(day, index) in forecast" 
        :key="index"
        class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center transition-transform duration-200 hover:scale-105"
      >
        <!-- Day -->
        <p class="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
          {{ day.date }}
        </p>
        
        <!-- Weather Icon -->
        <img 
          :src="`https://openweathermap.org/img/wn/${day.icon}.png`" 
          :alt="day.description"
          class="w-12 h-12 mx-auto mb-2"
        />
        
        <!-- Description -->
        <p class="text-xs text-gray-500 dark:text-gray-400 mb-2 capitalize">
          {{ day.description }}
        </p>
        
        <!-- Temperatures -->
        <div class="flex justify-between items-center">
          <span class="text-sm font-semibold text-gray-900 dark:text-white">
            {{ day.tempMax }}°
          </span>
          <span class="text-sm text-gray-500 dark:text-gray-400">
            {{ day.tempMin }}°
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ForecastDay } from '~/stores/weather'

defineProps<{
  forecast: ForecastDay[]
}>()
</script>