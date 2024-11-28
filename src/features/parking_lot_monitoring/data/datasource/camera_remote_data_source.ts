import apiClient from "../../../../config/service_client";
import { CameraResponse } from "../../domain/models/camera_response";

export class CameraRemoteDataSource {
  async fetchCameras(): Promise<CameraResponse> {
    const response = await apiClient.get<CameraResponse>(`camera`);
    return response.data;
  }
}
