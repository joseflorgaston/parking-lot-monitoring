import { ModelRepository } from '../repositories/model_repository';
import { Result, success, failure } from '../../../../core/result';
import { ModelStatusResponse } from '../models/model_status_response';

export class CheckModelStatusUseCase {
  private repository: ModelRepository;

  constructor(repository: ModelRepository) {
    this.repository = repository;
  }

  async execute(): Promise<Result<ModelStatusResponse, Error>> {
    try {
      let response = await this.repository.checkModelStatus();
      return success(response);
    } catch (error) {
      return failure(error instanceof Error ? error : new Error("Unknown error"));
    }
  }
}
