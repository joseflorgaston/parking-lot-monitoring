// model_repository_impl.ts
import { CameraResponse } from '../../domain/models/camera_response';
import { CameraRepository } from '../../domain/repositories/camera_repository';
import { CameraRemoteDataSource } from '../datasource/camera_remote_data_source';

export class CameraRepositoryImpl implements CameraRepository {
  private remoteDataSource: CameraRemoteDataSource;

  constructor(remoteDataSource: CameraRemoteDataSource) {
    this.remoteDataSource = remoteDataSource;
  }

  async fetchCameras(): Promise<CameraResponse> {
    return await this.remoteDataSource.fetchCameras();
  }
}
