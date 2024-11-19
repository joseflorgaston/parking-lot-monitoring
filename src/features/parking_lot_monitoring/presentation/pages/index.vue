<template>
  <div>
    <h1 class="text-2xl font-bold mb-5">Monitoreo</h1>

    <div v-if="isCamerasLoading" class="text-center">
      <p>Loading cameras...</p>
    </div>

    <div v-else class="overflow-x-auto">
      <table class="min-w-full table-auto border-collapse bg-white shadow-lg rounded-lg">
        <thead class="bg-gray-100 border-b border-gray-300">
          <tr>
            <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700">ID</th>
            <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700">Descripcion</th>
            <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700">Intervalo de imagen</th>
            <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700">Maximos resultados</th>
            <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700">Parking Spot</th>
            <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700">Fecha de creacion</th>
            <th class="px-4 py-2 text-center text-sm font-semibold text-gray-700">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="camera in cameras" :key="camera._id" class="border-b hover:bg-gray-50">
            <td class="px-4 py-3 text-sm text-gray-800 whitespace-nowrap">{{ camera._id }}</td>
            <td class="px-4 py-3 text-sm text-gray-800 whitespace-nowrap">{{ camera.identifier }}</td>
            <td class="px-4 py-3 text-sm text-gray-800 whitespace-nowrap">{{ camera.image_interval }}</td>
            <td class="px-4 py-3 text-sm text-gray-800 whitespace-nowrap">{{ camera.max_results }}</td>
            <td class="px-4 py-3 text-sm text-gray-800 whitespace-nowrap">
              {{ camera.parking_spot.name }} ({{ camera.parking_spot.address }})
            </td>
            <td class="px-4 py-3 text-sm text-gray-800 whitespace-nowrap">{{ new
              Date(camera.created_at).toLocaleString() }}</td>
            <td class="px-4 py-3 text-center">
              <button
                class="px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded shadow focus:outline-none focus:ring"
                @click="handleMonitor(camera)">
                Monitoreo
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { ref, onMounted, Ref } from 'vue';
import { FetchCamerasUseCase } from '../../domain/use_cases/fetch_camera_use_cases'
import { CameraRemoteDataSource } from '../../data/datasource/camera_remote_data_source';
import { CameraRepositoryImpl } from '../../data/repositories/camera_repository_impl';
import { Result } from '../../../../core/result';
import { CameraResponse } from '../../domain/models/camera_response';
import { Camera } from '../../domain/entities/camera';

// Vue Router
const router = useRouter();

// State
const isCamerasLoading = ref(true);
const cameras: Ref<Camera[]> = ref([]);

// Dependencies
const remoteDataSource = new CameraRemoteDataSource();
const repository = new CameraRepositoryImpl(remoteDataSource);
const fetchCamerasUseCase = new FetchCamerasUseCase(repository);

// Fetch cameras
async function fetchCameras() {
  const response: Result<CameraResponse, Error> = await fetchCamerasUseCase.execute();
  response.fold(
    (error) => alert(`error: ${error}`),
    (success) => {
      isCamerasLoading.value = false;
      cameras.value = success.data; // Update the cameras array
    }
  );
}

// Handle action button click
function handleMonitor(camera: Camera) {
  router.push(`/parking-lot-monitoring/${camera._id}`);
}

// Fetch data when the component is mounted
onMounted(() => {
  fetchCameras();
});
</script>

<style>
/* Tailwind styles will handle most of the design */
</style>
