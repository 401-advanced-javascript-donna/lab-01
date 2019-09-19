const Schema = require('../lib/Schema');
const { ModelError } = require('../lib/Errors');

describe('Schema', () => {
  const personSchema = {
    firstName: { type: 'string', },
    lastName: { type: 'string', },
    color: { type: 'string', },
    married: { type: 'boolean', },
    kids: { type: 'number' }
  };

  const schemaValidator = new Schema(personSchema);
  // add a test schema
  const sampleData = {
    'firstName': 'Chris',
    'lastName': 'Sample',
    'color': 'Red',
    'married': true,
    'kids': 3
  };

  const castingSampleData = {
    'firstName': 'Chris',
    'lastName': 'Sample',
    'color': 'Red',
    'married': 'true',
    'kids': '3'
  };

  const invalidSampleData = {
    'firstName': [],
    'lastName': 'Sample',
    'color': 'Red',
    'married': true,
    'kids': 3
  };

  it('validates a correct model', () => {
    expect(schemaValidator.validate(sampleData)).toEqual(sampleData);
    expect(schemaValidator.validate(castingSampleData)).toEqual(sampleData);
  });
  
  it('throws on invalid model', () => {
    expect(() => schemaValidator.validate(invalidSampleData)).toThrow(ModelError);
  });

  // more test cases...
});