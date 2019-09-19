
class CastError extends Error {
  constructor(expectedType, providedValue) {
    super(`Sorry, cannot coerce provided data type`);
    this.expectedType = expectedType;
    this.providedValue = providedValue;
  }
}

class ModelError extends Error {
  constructor(error) {
    super(`Sorry, there's been an error!`, error);
  }
}

module.exports = {
  CastError,
  ModelError
};