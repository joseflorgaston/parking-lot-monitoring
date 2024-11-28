<template>
    <div class="bg-white p-4 rounded-lg shadow-md">
        <h3 class="text-gray-500">{{ title }}</h3>
        <p class="text-2xl font-semibold">
            {{ description }}
            <span v-if="percentage" :class="percentage.startsWith('-') ? 'text-red-500' : 'text-green-500'">
                {{ percentage }}
            </span>
        </p>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

// Define las propiedades que recibirá el componente
const props = defineProps<{
  title: string
  description: string
  percentage?: string // Parámetro opcional
}>()
</script>
