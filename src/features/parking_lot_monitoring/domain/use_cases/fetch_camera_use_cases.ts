import { Result, success, failure } from '../../../../core/domain/types/result';
import { CameraResponse } from '../models/camera_response';
import { CameraRepository } from '../repositories/camera_repository';

export class FetchCamerasUseCase {
  private repository: CameraRepository;

  constructor(repository: CameraRepository) {
    this.repository = repository;
  }

  async execute(): Promise<Result<CameraResponse, Error>> {
    try {
      let response = await this.repository.fetchCameras();
      return success(response);
    } catch (error) {
      return failure(error instanceof Error ? error : new Error("Unknown error"));
    }
  }
}
