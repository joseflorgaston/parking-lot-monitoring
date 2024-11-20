import apiClient from "../../../../config/service_client";
import { LastImageResponse } from "../../domain/models/last_image_response";

export class ImageRemoteDataSource {
  async getLastImageFromCamera(cameraId: string): Promise<LastImageResponse> {
    const response = await apiClient.get<LastImageResponse>(`image/${cameraId}`);
    return response.data;
  }
}
