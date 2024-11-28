import { defineStore } from 'pinia';
import { Camera } from '../../domain/entities/camera';

export const useCameraStore = defineStore('cameraStore', {
  state: () => ({
    selectedCamera: null as Camera | null,
    cameras: [] as Camera[],
  }),

  actions: {
    setSelectedCamera(camera: Camera) {
      this.selectedCamera = camera;
    },
    setCameras(cameras: Camera[]) {
      this.cameras = cameras;
    },
  },
});
