<template>
    <div class="shadow-md md:basis-11/12 xl:basis-7/12 flex items-center justify-between">
        <div class="rounded-lg xl:px-8 xl:py-6 bg-white flex flex-col gap-4">
            <h3 class="text-gray-500">{{camera.parking_spot.address}} / {{ camera.identifier }}</h3>
            <div class="flex gap-4 justify-around">
                <h3 class="text-2xl font-semibold">Lugares disponibles:
                    <span class="text-green-500">{{ free_spaces }} / {{ total }} </span>
                </h3>
                <h3 class="text-2xl font-semibold">Lugares ocupados:
                    <span class="text-red-500">{{ occupied_spaces }} / {{ total }} </span>
                </h3>
            </div>
            <div class="flex gap-4 justify-center">
                <img :src=image class="w-fit rounded-lg">
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineProps, PropType } from 'vue';
import { Camera } from '../../domain/entities/camera';


defineProps({
    free_spaces: {
        type: Number,
        required: true,
    },
    occupied_spaces: {
        type: Number,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    camera: {
        type: Object as PropType<Camera>,
        required: true,
    }
});

</script>
