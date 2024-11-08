import { ModelRepository } from '../repositories/model_repository';
import { Result, success, failure } from '../../../../core/result';
import { StartModelResponse } from '../models/start_model_response';

export class ActivateModelUseCase {
  private repository: ModelRepository;

  constructor(repository: ModelRepository) {
    this.repository = repository;
  }

  async execute(): Promise<Result<StartModelResponse, Error>> {
    try {
      const response = await this.repository.activateModel();
      return success(response);
    } catch (error) {
      return failure(error instanceof Error ? error : new Error("Unknown error"));
    }
  }
}
