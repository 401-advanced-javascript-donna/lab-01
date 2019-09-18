
class CastError extends Error {
  constructor(expectedType, providedValue) {
    super(`Sorry, cannot coerce provided data type`);
    this.expectedType = expectedType;
    this.providedValue = providedValue;
  }
}

class ModelError extends Error {

}

module.exports = {
  CastError,
  ModelError
};