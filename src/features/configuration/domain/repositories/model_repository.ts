import { ModelStatusResponse } from "../models/model_status_response";
import { StartModelResponse } from "../models/start_model_response";
import { StopModelResponse } from "../models/stop_model_response";

export interface ModelRepository {
    checkModelStatus(): Promise<ModelStatusResponse>;
    activateModel(): Promise<StartModelResponse>;
    deactivateModel(): Promise<StopModelResponse>; // Agregar este método
  }
