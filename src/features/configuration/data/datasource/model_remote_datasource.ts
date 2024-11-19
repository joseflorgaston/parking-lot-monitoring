// api_client.ts
import apiClient from "../../../../core/service_client";
import { ModelStatusResponse } from "../../domain/models/model_status_response";
import { StartModelResponse } from "../../domain/models/start_model_response";
import { StopModelResponse } from "../../domain/models/stop_model_response";

export class ModelRemoteDataSource {
  async checkModelStatus(): Promise<ModelStatusResponse> {
    const response = await apiClient.get<ModelStatusResponse>('model/status');
    return response.data;
  }
  async activateModel(): Promise<StartModelResponse> {
    const response = await apiClient.post<StartModelResponse>('model/start');
    return response.data;
  }
  async deactivateModel(): Promise<StopModelResponse> {
    const response = await apiClient.post<StopModelResponse>('model/stop');
    return response.data;
  }
}
