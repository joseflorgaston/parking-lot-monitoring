<template>
  <div>
    <h1 class="text-2xl font-bold mb-5">Monitoreo</h1>
    <Loading v-if="isCamerasLoading" message="Cargando cámaras..." />
    <DataTable v-else :columns="tableColumns" :headers="tableHeaders" :rows="cameras" action-title="Monitoreo"
      @action="navigateToMonitoringPage" />
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import Loading from '../../../../components/loading.vue';
import DataTable from '../../../../components/data_table.vue';
import { ref, onMounted, Ref } from 'vue';
import { FetchCamerasUseCase } from '../../domain/use_cases/fetch_camera_use_cases'
import { CameraRemoteDataSource } from '../../data/datasource/camera_remote_data_source';
import { CameraRepositoryImpl } from '../../data/repositories/camera_repository_impl';
import { Result } from '../../../../core/domain/types/result';
import { CameraResponse } from '../../domain/models/camera_response';
import { Camera } from '../../domain/entities/camera';
import { useCameraStore } from '../store/cameraStore';

// Vue Router
const router = useRouter();

// Pinia Store
const cameraStore = useCameraStore();

// State
const isCamerasLoading = ref(true);
const cameras: Ref<Camera[]> = ref([]);
const tableHeaders = [
  "Parking Spot",
  "Descripción",
  "Intervalo de Imagen",
  "Máximos Resultados",
  "Fecha de Creación",
  "Action",
];
const tableColumns = [
  "parking_spot.name",
  "identifier",
  "image_interval",
  "max_results",
  "created_at",
];

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
      cameras.value = success.data;
      cameraStore.setCameras(success.data);
    }
  );
}

const navigateToMonitoringPage = (camera: Camera) => {
  cameraStore.setSelectedCamera(camera);
  router.push(`/parking-lot-monitoring/${camera._id}`);
};

// Fetch data when the component is mounted
onMounted(() => {
  fetchCameras();
});
</script>
