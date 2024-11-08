<template>
    <div>
        <h1 class="text-2xl font-bold mb-3">Monitoreo</h1>
        <div class="flex flex-row flex-wrap my-2 justify-between mb-3">
            <!-- Llamamos al componente CardEstadoModelo y le pasamos los props -->
            <ModelStatusCard :status="status" :isActive="true" :onToggleStatus="onToggleStatus"
                :isModelStarting="isModelStarting" :disabled="isModelStarting" />
        </div>
        <div class="flex flex-row flex-wrap my-2 justify-between">
            <ParkingImageCard />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { ActivateModelUseCase } from '../../domain/use_cases/activate_model_use_case';
import { DeactivateModelUseCase } from '../../domain/use_cases/deactivate_model_use_case';
import { ModelRepositoryImpl } from '../../data/repositories/model_repository_impl';
import { ModelRemoteDataSource } from '../../data/datasource/model_remote_datasource';
import ModelStatusCard from '../components/model_status_card.vue'
import ParkingImageCard from '../components/parking_image_card.vue'
import CardEstadoModelo from '../components/CardEstadoModelo.vue';
import { CheckModelStatusUseCase } from '../../domain/use_cases/check_model_state_use_case';
import { ModelStatusResponse } from '../../domain/models/model_status_response';

// Instanciar las dependencias necesarias
const remoteDataSource = new ModelRemoteDataSource();
const repository = new ModelRepositoryImpl(remoteDataSource);
const checkModelStatusUseCase = new CheckModelStatusUseCase(repository);
const activateModelUseCase = new ActivateModelUseCase(repository);
const deactivateModelUseCase = new DeactivateModelUseCase(repository);

const isModelStarting = ref(false);
const isActive = ref(false);
const status = ref("APAGADO");

function setToggleStatus(newStatus: boolean) {
    isActive.value = newStatus;
    status.value = isActive.value ? "ACTIVO" : "ACTIVO";
}

function setIsModelStarting(isActive: boolean) {
    if (isActive) {
        isModelStarting.value = true;
        setTimeout(() => {
            isModelStarting.value = false;
            alert("Model started successfully");
        }, 300000);
    }
}

async function onToggleStatus() {
    setToggleStatus(!isActive.value);
    const response: Result<void, Error> = isActive.value
        ? await activateModelUseCase.execute()
        : await deactivateModelUseCase.execute();
    response.fold(
        (error) => {
            alert("Error al cambiar el estado: " + error.message);
            setToggleStatus(!isActive.value);
        },
        (success) => {
            if (isActive.value && success.success) {
                setIsModelStarting(isActive.value);
                alert("Model is starting");
            }
            if(!isActive.value && success.success) {
                alert("Model stopped successfully");
            }
        }
    );
}

async function checkModelStatus() {
    isModelStarting.value = true;
    const response: Result<ModelStatusResponse, Error> = await checkModelStatusUseCase.execute();
    isModelStarting.value = false;

    response.fold(
        (error) => {
            alert("Error al obtener el estado del modelo: " + error.message);
        },
        (success: ModelStatusResponse) => {
            setToggleStatus(success.is_running);
        }
    )
}

onMounted(() => {
    checkModelStatus();
});

</script>