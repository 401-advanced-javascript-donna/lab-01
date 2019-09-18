/* import and use validators */
// eslint-disable-next-line no-unused-vars
const validators = require('./validator');

class Schema {
  /**
   * Create a model schema
   * @param {object} schema - the schema to apply to models
   */
  constructor(schema) {
    this.schema = schema;
  }

  /**
   * Run validation on the supplied model 
   * @param {object} model - the model to validate
   * @throws {ModelError} throws if model does not conform to schema
   * @returns {object} - validated data record
   */
  // eslint-disable-next-line no-unused-vars
  validate(model) {

  }
}

module.exports = Schema;