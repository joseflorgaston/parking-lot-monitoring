import { Result, success, failure } from '../../../../core/domain/types/result';
import { LastImageResponse } from '../models/last_image_response';
import { ImageRepository } from '../repositories/image_respository';

export class FetchLastImageFromCameraUseCase {
  private repository: ImageRepository;

  constructor(repository: ImageRepository) {
    this.repository = repository;
  }

  async execute(cameraID: string): Promise<Result<LastImageResponse, Error>> {
    try {
      let response = await this.repository.fetchLastImageFromCamera(cameraID);
      return success(response);
    } catch (error) {
      return failure(error instanceof Error ? error : new Error("Unknown error"));
    }
  }
}
