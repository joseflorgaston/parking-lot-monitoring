import { CameraResponse } from "../models/camera_response";

export interface CameraRepository {
    fetchCameras(): Promise<CameraResponse>;
  }
