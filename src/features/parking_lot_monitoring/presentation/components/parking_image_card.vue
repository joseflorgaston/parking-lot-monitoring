<template>
    <div class="bg-white p-4 rounded-lg shadow-md md:basis-11/12 xl:basis-7/12 flex items-center justify-between">
        <div class="flex flex-col gap-4">
            <h3 class="text-gray-500">Monitoreo parking #1</h3>
            <div class="flex gap-4 justify-around">
                <h3 class="text-2xl font-semibold">Lugares disponibles:
                    <span class="text-green-500">{{ available }} / {{ total }} </span>
                </h3>
                <h3 class="text-2xl font-semibold">Lugares ocupados:
                    <span class="text-red-500">{{ occupied }} / {{ total }} </span>
                </h3>
            </div>
            <div class="flex gap-4 justify-center">
                <img src="../../../../assets/images/labeled-parking-image.png" class="w-fit rounded-lg">
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
const available = 0;
const occupied = 10;
const total = 10;
</script>