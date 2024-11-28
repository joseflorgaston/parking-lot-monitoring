// model_repository_impl.ts
import { LastImageResponse } from '../../domain/models/last_image_response';
import { ImageRepository } from '../../domain/repositories/image_respository';
import { ImageRemoteDataSource } from '../datasource/image_remote_data_source';

export class ImageRepositoryImpl implements ImageRepository {
  private remoteDataSource: ImageRemoteDataSource;

  constructor(remoteDataSource: ImageRemoteDataSource) {
    this.remoteDataSource = remoteDataSource;
  }

  async fetchLastImageFromCamera(cameraID: string): Promise<LastImageResponse> {
    return await this.remoteDataSource.getLastImageFromCamera(cameraID);
  }
}
