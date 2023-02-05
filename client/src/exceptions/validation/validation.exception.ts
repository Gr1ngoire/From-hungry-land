type Constructor = {
  field: string;
  message?: string;
  cause?: unknown;
};

const DEFAULT_VALIDATION_ERROR_MESSAGE = "Validation error";

class ValidationError extends Error {
  public field: string;
  public cause: unknown;

  constructor({
    field,
    message = DEFAULT_VALIDATION_ERROR_MESSAGE,
    cause,
  }: Constructor) {
    super(message);
    this.field = field;
    this.cause = cause;
  }
}

export { ValidationError };
