const validator = require('../lib/validator.js');

describe('validator module', () => {
  
  const str = 'yes';
  const num = 1;
  const arr = ['a'];
  const obj = { x: 'y' };
  const func = () => {};
  const bool = false;
  const date = new Date();

  describe('performs basic validation of', () => {

    it('strings', () => {
      expect(validator.isString(str)).toBeTruthy();
      expect(validator.isString(num)).toBeFalsy();
      expect(validator.isString(arr)).toBeFalsy();
      expect(validator.isString(obj)).toBeFalsy();
      expect(validator.isString(func)).toBeFalsy();
      expect(validator.isString(bool)).toBeFalsy();
      expect(validator.isString(date)).toBeFalsy();
    });

    it('numbers', () => {
      expect(validator.isNum(str)).toBeFalsy();
      expect(validator.isNum(num)).toBeTruthy();
      expect(validator.isNum(arr)).toBeFalsy();
      expect(validator.isNum(obj)).toBeFalsy();
      expect(validator.isNum(func)).toBeFalsy();
      expect(validator.isNum(bool)).toBeFalsy();
      expect(validator.isNum(date)).toBeFalsy();
    });

    it('arrays', () => {
      expect(validator.isArray(str)).toBeFalsy();
      expect(validator.isArray(num)).toBeFalsy();
      expect(validator.isArray(arr)).toBeTruthy();
      expect(validator.isArray(obj)).toBeFalsy();
      expect(validator.isArray(func)).toBeFalsy();
      expect(validator.isArray(bool)).toBeFalsy();
      expect(validator.isArray(date)).toBeFalsy();
    });

    it('objects', () => {
      expect(validator.isObj(str)).toBeFalsy();
      expect(validator.isObj(num)).toBeFalsy();
      expect(validator.isObj(arr)).toBeFalsy();
      expect(validator.isObj(obj)).toBeTruthy();
      expect(validator.isObj(func)).toBeFalsy();
      expect(validator.isObj(bool)).toBeFalsy();
      expect(validator.isObj(date)).toBeTruthy();
    });

    it('booleans', () => {
      expect(validator.isBoolean(str)).toBeFalsy();
      expect(validator.isBoolean(num)).toBeFalsy();
      expect(validator.isBoolean(arr)).toBeFalsy();
      expect(validator.isBoolean(obj)).toBeFalsy();
      expect(validator.isBoolean(func)).toBeFalsy();
      expect(validator.isBoolean(bool)).toBeTruthy();
      expect(validator.isBoolean(date)).toBeFalsy();
    });

    it('dates', () => {
      expect(validator.isDate(date)).toBeTruthy();
      expect(validator.isDate(str)).toBeFalsy();
      expect(validator.isDate(num)).toBeFalsy();
      expect(validator.isDate(arr)).toBeFalsy();
      expect(validator.isDate(obj)).toBeFalsy();
      expect(validator.isDate(func)).toBeFalsy();
      expect(validator.isDate(bool)).toBeFalsy();
    });

    it('functions', () => {
      expect(validator.isFunc(str)).toBeFalsy();
      expect(validator.isFunc(num)).toBeFalsy();
      expect(validator.isFunc(arr)).toBeFalsy();
      expect(validator.isFunc(obj)).toBeFalsy();
      expect(validator.isFunc(func)).toBeTruthy();
      expect(validator.isFunc(bool)).toBeFalsy();
      expect(validator.isFunc(date)).toBeFalsy();
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

    it('date', () => {
      expect(validator.getValidator('date')).toBe(validator.isDate);
    });

    it('array of strings', () => {
      expect(validator.getValidator('strings')).toBe(validator.isArrayOfStrings);
    });

    it('array of numbers', () => {
      expect(validator.getValidator('numbers')).toBe(validator.isArrayOfNums);
    });

    it('array of objects', () => {
      expect(validator.getValidator('objects')).toBe(validator.isArrayOfObj);
    });

    it('array of booleans', () => {
      expect(validator.getValidator('booleans')).toBe(validator.isArrayOfBoolean);
    });

  });
 
  describe('performs basic casting of', () => {
    const str = 'tacos';
    const number = 1974;
    const boolean = true;
    const date = new Date(); // dates are objects
    const numStr = '1977';
    const trueStr = 'true';
    const falseStr = 'false';
    const zero = 0;
    const one = 1;
    const obj = {};
    const arr = [];

    it('strings', () => {
      expect(validator.toString(str)).toBe('tacos');
      expect(validator.toString(number)).toBe('1974');
      expect(validator.toString(boolean)).toBe('true');
      expect(() => validator.toString(arr)).toThrow(validator.CastError);
      expect(() => validator.toString(obj)).toThrow(validator.CastError);
      expect(() => validator.toString(date)).toThrow(validator.CastError);
    });

    it('numbers', () => {
      expect(validator.toNumber(number)).toBe(1974);
      expect(validator.toNumber(numStr)).toBe(1977);
      expect(() => validator.toNumber(arr)).toThrow(validator.CastError);
      expect(() => validator.toNumber(obj)).toThrow(validator.CastError);
      expect(() => validator.toNumber(date)).toThrow(validator.CastError);
    });
    
    it('booleans', () => {
      expect(validator.toBoolean(boolean)).toBe(true);
      expect(validator.toBoolean(trueStr)).toBe(true);
      expect(validator.toBoolean(falseStr)).toBe(false);
      expect(validator.toBoolean(zero)).toBe(false);
      expect(validator.toBoolean(one)).toBe(true);
      expect(() => validator.toBoolean(arr)).toThrow(validator.CastError);
      expect(() => validator.toBoolean(obj)).toThrow(validator.CastError);
      expect(() => validator.toBoolean(date)).toThrow(validator.CastError);
    });

    it('dates', () => {
      expect(validator.toDate(date)).toEqual(String(new Date()));
      expect(() => validator.toDate(arr)).toThrow(validator.CastError);
      expect(() => validator.toDate(obj)).toThrow(validator.CastError);
      expect(() => validator.toDate(str)).toThrow(validator.CastError);
      expect(() => validator.toDate(number)).toThrow(validator.CastError);
    });
  }); 
});