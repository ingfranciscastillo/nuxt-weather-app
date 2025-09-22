<template>
  <div class="w-full max-w-md mx-auto">
    <div class="relative">
      <input
        v-model="searchQuery"
        @keyup.enter="handleSearch"
        type="text"
        placeholder="Buscar ciudad..."
        class="w-full px-4 py-3 pl-10 pr-12 text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        :disabled="weatherStore.loading"
      />
      <MagnifyingGlassIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
      <button
        @click="handleSearch"
        :disabled="weatherStore.loading || !searchQuery.trim()"
        class="absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white rounded-md transition-colors duration-200 text-sm font-medium"
      >
        <span v-if="!weatherStore.loading">Buscar</span>
        <div v-else class="flex items-center">
          <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span class="text-sm">Buscando...</span>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import { useWeatherStore } from '~/stores/weather'

const weatherStore = useWeatherStore()
const searchQuery = ref('')

const handleSearch = () => {
  if (searchQuery.value.trim() && !weatherStore.loading) {
    weatherStore.fetchWeather(searchQuery.value.trim())
  }
}
</script>