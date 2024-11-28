// model_repository_impl.ts
import { ModelStatusResponse } from '../../domain/models/model_status_response';
import { StartModelResponse } from '../../domain/models/start_model_response';
import { StopModelResponse } from '../../domain/models/stop_model_response';
import { ModelRepository } from '../../domain/repositories/model_repository';
import { ModelRemoteDataSource } from '../datasource/model_remote_datasource';

export class ModelRepositoryImpl implements ModelRepository {
  private remoteDataSource: ModelRemoteDataSource;

  constructor(remoteDataSource: ModelRemoteDataSource) {
    this.remoteDataSource = remoteDataSource;
  }

  async activateModel(): Promise<StartModelResponse> {
    return await this.remoteDataSource.activateModel();
  }

  async deactivateModel(): Promise<StopModelResponse> {
    return await this.remoteDataSource.deactivateModel();
  }

  async checkModelStatus(): Promise<ModelStatusResponse> {
    return await this.remoteDataSource.checkModelStatus();
  }
}
