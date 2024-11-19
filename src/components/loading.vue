<template>
    <div>
        <div class="flex items-center justify-center">
            <div class="flex items-center space-x-2">
                <div class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                <p class="text-blue-500 font-semibold text-lg">{{ message }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps<{
    message: string
}>()
</script>