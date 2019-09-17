const validator = require('../lib/validator.js');

describe('validator module', () => {
  
  const str = 'yes';
  const num = 1;
  const arr = ['a'];
  const obj = { x: 'y' };
  const func = () => {};
  const bool = false;

  describe('performs basic validation of', () => {

    it('strings', () => {
      expect(validator.isString(str)).toBeTruthy();
      expect(validator.isString(num)).toBeFalsy();
      expect(validator.isString(arr)).toBeFalsy();
      expect(validator.isString(obj)).toBeFalsy();
      expect(validator.isString(func)).toBeFalsy();
      expect(validator.isString(bool)).toBeFalsy();
    });

    it('numbers', () => {
      expect(validator.isNum(str)).toBeFalsy();
      expect(validator.isNum(num)).toBeTruthy();
      expect(validator.isNum(arr)).toBeFalsy();
      expect(validator.isNum(obj)).toBeFalsy();
      expect(validator.isNum(func)).toBeFalsy();
      expect(validator.isNum(bool)).toBeFalsy();
    });

    it('arrays', () => {
      expect(validator.isArray(str)).toBeFalsy();
      expect(validator.isArray(num)).toBeFalsy();
      expect(validator.isArray(arr)).toBeTruthy();
      expect(validator.isArray(obj)).toBeFalsy();
      expect(validator.isArray(func)).toBeFalsy();
      expect(validator.isArray(bool)).toBeFalsy();
    });

    it('objects', () => {
      expect(validator.isObj(str)).toBeFalsy();
      expect(validator.isObj(num)).toBeFalsy();
      expect(validator.isObj(arr)).toBeFalsy();
      expect(validator.isObj(obj)).toBeTruthy();
      expect(validator.isObj(func)).toBeFalsy();
      expect(validator.isObj(bool)).toBeFalsy();
    });

    it('booleans', () => {
      expect(validator.isBoolean(str)).toBeFalsy();
      expect(validator.isBoolean(num)).toBeFalsy();
      expect(validator.isBoolean(arr)).toBeFalsy();
      expect(validator.isBoolean(obj)).toBeFalsy();
      expect(validator.isBoolean(func)).toBeFalsy();
      expect(validator.isBoolean(bool)).toBeTruthy();
    });

    it('functions', () => {
      expect(validator.isFunc(str)).toBeFalsy();
      expect(validator.isFunc(num)).toBeFalsy();
      expect(validator.isFunc(arr)).toBeFalsy();
      expect(validator.isFunc(obj)).toBeFalsy();
      expect(validator.isFunc(func)).toBeTruthy();
      expect(validator.isFunc(bool)).toBeFalsy();
    });
  });

  describe('performs array validation of', () => {

    const arrayOfStrings = ['a', 'b', 'c'];
    const arrayOfNumbers = [1, 2, 3];
    const arrayOfObjects = [{}, {}, {}];
    const arrayOfBooleans = [true, false, true];

    it('strings', () => {
      expect(validator.isArrayOfStrings(arrayOfStrings)).toBeTruthy();
      expect(validator.isArrayOfStrings(arrayOfNumbers)).toBeFalsy();
      expect(validator.isArrayOfStrings(arrayOfObjects)).toBeFalsy();
      expect(validator.isArrayOfStrings(arrayOfBooleans)).toBeFalsy();
    });

    it('numbers', () => {
      expect(validator.isArrayOfNums(arrayOfStrings)).toBeFalsy();
      expect(validator.isArrayOfNums(arrayOfNumbers)).toBeTruthy();
      expect(validator.isArrayOfNums(arrayOfObjects)).toBeFalsy();
      expect(validator.isArrayOfNums(arrayOfBooleans)).toBeFalsy();
    });

    it('objects', () => {
      expect(validator.isArrayOfObj(arrayOfStrings)).toBeFalsy();
      expect(validator.isArrayOfObj(arrayOfNumbers)).toBeFalsy();
      expect(validator.isArrayOfObj(arrayOfObjects)).toBeTruthy();
      expect(validator.isArrayOfObj(arrayOfBooleans)).toBeFalsy();
    });

    it('booleans', () => {
      expect(validator.isArrayOfBoolean(arrayOfStrings)).toBeFalsy();
      expect(validator.isArrayOfBoolean(arrayOfNumbers)).toBeFalsy();
      expect(validator.isArrayOfBoolean(arrayOfObjects)).toBeFalsy();
      expect(validator.isArrayOfBoolean(arrayOfBooleans)).toBeTruthy();
    });
  });

  describe('get validator for', () => {
    it('strings', () => {
      expect(validator.getValidator('string')).toBe(validator.isString);
    });
    
    it('numbers', () => {
      expect(validator.getValidator('number')).toBe(validator.isNum);
      
    });

    it('arrays', () => {
      expect(validator.getValidator('array')).toBe(validator.isArray);
    });

    it('objects', () => {
      expect(validator.getValidator('object')).toBe(validator.isObj);
    });

    it('booleans', () => {
      expect(validator.getValidator('boolean')).toBe(validator.isBoolean);
    });

    it('functions', () => {
      expect(validator.getValidator('function')).toBe(validator.isFunc);
    });

    it.skip('array of strings', () => {
      
    });

    it.skip('array of numbers', () => {
      
    });

    it.skip('array of objects', () => {
      
    });

    it.skip('array of booleans', () => {
      
    });

  });
});