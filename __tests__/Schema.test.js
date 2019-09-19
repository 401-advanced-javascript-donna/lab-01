const Schema = require('../lib/Schema');

describe('Schema', () => {
  const personSchema = {
    firstName: {
      type: 'string',
    },
    lastName: {
      type: 'string',
    },
    color: {
      type: 'string',
    },
    married: {
      type: 'boolean',
    },
    kids: {
      type: 'number'
    }

  };


  const schemaValidator = new Schema(personSchema);
  // add a test schema
  const sampleData = {
    'firstName': 'Chris',
    'lastName': 'Sample',
    'married': true,
    'kids': 3
  };

  it('validates a correct model', () => {

  });

  it('throws on invalid model', () => {
    expect(schemaValidator.validate(sampleData)).toEqual(sampleData);
  });

  // more test cases...
});