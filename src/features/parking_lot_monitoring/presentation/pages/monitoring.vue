<template>
    <div>
        <h1 class="text-2xl font-bold mb-5">Monitoreo: </h1>

        <Loading v-if="isImageLoading" message="Cargando imagen..." />
        <div v-else>
            <ParkingImageCard :free_spaces="image!.free_spaces" :occupied_spaces="image!.occupied_spaces"
                :total="image?.free_spaces + image!.occupied_spaces" :image="image!.labeled_image_url" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { ref, onMounted, Ref, onUnmounted } from 'vue';
import { Result } from '../../../../core/domain/types/result';
import { ParkingImage } from '../../domain/entities/parking_image';
import ParkingImageCard from '../components/parking_image_card.vue';
import Loading from '../../../../components/loading.vue';
import { ImageRemoteDataSource } from '../../data/datasource/image_remote_data_source';
import { ImageRepositoryImpl } from '../../data/repositories/image_repository_impl';
import { FetchLastImageFromCameraUseCase } from '../../domain/use_cases/fetch_last_image_from_camera_use_case';
import { LastImageResponse } from '../../domain/models/last_image_response';

// Vue Router
const route = useRoute();
const cameraID = route.params.camera_id as string;

// State
const isImageLoading = ref(true);
const image: Ref<ParkingImage | undefined> = ref();
let intervalId: number | undefined;

// Dependencies
const remoteDataSource = new ImageRemoteDataSource();
const repository = new ImageRepositoryImpl(remoteDataSource);
const fetchLastImageFromCameraUseCase = new FetchLastImageFromCameraUseCase(repository);

// Fetch last image
async function fetchLastImage() {
    const response: Result<LastImageResponse, Error> = await fetchLastImageFromCameraUseCase.execute(cameraID);
    response.fold(
        (error) => {
            alert(`error: ${error}`);
            isImageLoading.value = false;
        },
        (success) => {
            isImageLoading.value = false;
            image.value = success.data;
        }
    );
}

// Fetch data when the component is mounted (every 10 sec)
onMounted(() => {
    fetchLastImage();
    intervalId = setInterval(fetchLastImage, 10000);
});

onUnmounted(() => {
    if (intervalId) {
        clearInterval(intervalId);
    }
});

</script>
