// result.ts

type Result<T, E> = Success<T> | Failure<E>;

class Success<T> {
  readonly isSuccess = true;
  constructor(public readonly value: T) {}

  fold<U>(_onFailure: (error: never) => U, onSuccess: (value: T) => U): U {
    return onSuccess(this.value);
  }
}

class Failure<E> {
  readonly isSuccess = false;
  constructor(public readonly error: E) {}

  fold<U>(onFailure: (error: E) => U, _onSuccess: (value: never) => U): U {
    return onFailure(this.error);
  }
}

function success<T>(value: T): Result<T, never> {
  return new Success(value);
}

function failure<E>(error: E): Result<never, E> {
  return new Failure(error);
}

export { Success, Failure, success, failure };    export type { Result };

