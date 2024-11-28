import { ModelRepository } from '../repositories/model_repository';
import { Result, success, failure } from '../../../../core/domain/types/result';
import { StopModelResponse } from '../models/stop_model_response';

export class DeactivateModelUseCase {
  private repository: ModelRepository;

  constructor(repository: ModelRepository) {
    this.repository = repository;
  }

  async execute(): Promise<Result<StopModelResponse, Error>> {
    try {
      const response = await this.repository.deactivateModel();
      return success(response); // Éxito sin datos adicionales
    } catch (error) {
      return failure(error instanceof Error ? error : new Error("Unknown error"));
    }
  }
}
