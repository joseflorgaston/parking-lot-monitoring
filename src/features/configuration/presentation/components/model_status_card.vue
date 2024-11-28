<template>
    <div class="bg-white p-4 rounded-lg shadow-md md:basis-11/12 xl:basis-7/12 flex items-center justify-between"
        style="max-height: fit-content;">
        <div>
            <div class="flex">
                <h3 class="text-gray-500">Estado del modelo</h3>
                <div class="loader" v-if="isModelStarting"></div>
            </div>
            <p :class="isActive ? 'text-green-500' : 'text-red-500'" class="text-2xl font-semibold">
                {{ status }}
            </p>
        </div>
        <label class="switch">
            <input type="checkbox" :checked="isActive" @click="onToggleStatus" :disabled="disabled" />
            <span class="slider round"></span>
        </label>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

defineProps<{
    status: string;
    isActive: boolean;
    isModelStarting: boolean;
    disabled: boolean;
    onToggleStatus: () => void;
}>();

</script>

<style scoped>
.switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 24px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 24px;
}

.slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
}

input:checked+.slider {
    background-color: #4caf50;
}

input:checked+.slider:before {
    transform: translateX(26px);
}

.loader {
  border: 4px solid #f3f3f3; /* Color gris claro */
  border-top: 4px solid #3498db; /* Color azul */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
