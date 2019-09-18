const CastError = require('./Errors');

/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
const isString = input => {
  return typeof input === 'string';
};

/** 
 * Is this a number?
 * @param input
 * @returns {boolean}
*/
const isNum = input => {
  return typeof input === 'number';
};

/**
 * Is this an array?
 * @param {array} input
 * @returns {boolean}
 */
const isArray = input => {
  return input instanceof Array;
};

/**
 * Is this an object?
 * @param {object} input
 * @return {boolean} 
 */
const isObj = input => {
  return isArray(input) ? false : typeof input === 'object';
};

/**
 * Is this a boolean?
 * @param {boolean} input 
 * @return {boolean}
 */
const isBoolean = input => {
  return typeof input === 'boolean';
};

/**
 * Is this a function?
 * @param {function} input 
 * @return {boolean}
 */
const isFunc = input => {
  return typeof input === 'function';
};

/**
 * Is this an array of strings?
 * @param {array} input 
 * @returns {boolean}
 */
const isArrayOfStrings = input => {
  return input.every(isString);
};

/**
 * Is this an array of numbers?
 * @param {array} input
 * @returns {boolean}
 */
const isArrayOfNums = input => {
  return input.every(isNum);
};

/**
 * Is this an array of objects?
 * @param {array} input
 * @returns {boolean}
 */
const isArrayOfObj = input => {
  return input.every(isObj);
};

/**
 * Is this an array of Boolean?
 * @param {array} input
 * @returns {boolean}
 */
const isArrayOfBoolean = input => {
  return input.every(isBoolean);
};

/**
 * Based on a set of rules, what is correct validator?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param rules
 * @returns {boolean}
 */
const getValidator = input => {
  // CHANGE ME
  const validator = {
    string: isString,
    number: isNum,
    array: isArray,
    object: isObj,
    boolean: isBoolean,
    function: isFunc,
    strings: isArrayOfStrings,
    numbers: isArrayOfNums,
    objects: isArrayOfObj,
    booleans: isArrayOfBoolean
  };
  return validator[input];
};

/**
 * Cast to string 
 * @param {string} input 
 * @return {string}
 */
const toString = input => {
  if(isArray(input) || isObj(input)) {
    throw new CastError(input);
  } else {
    return String(input);
  }
};

/**
 * Cast to number 
 * @param {number} input 
 * @return {number}
 */
const toNumber = input => {
  if(isNum(input) || isString(input) && input.match(/[0-9]/)) {
    return Number(input);
  } else {
    throw new CastError(input);
  }
};

/**
 * Cast to boolean 
 * @param {boolean} input 
 * @return {boolean}
 */
// const toBoolean = input => {
//   if(isBoolean(input)) {
//     return Boolean(input);
//   } else if(isString(input)) {
//     if(input === true) {
//       return true;
//     } else if(input === false) {
//       return false;
//     } else {
//       throw new CastError(input);
//     }
//   } else if(isNum(input)) {
//     if(input === 0 || input === 1) {
//       return Boolean(input);
//     } else {
//       throw new CastError(input);
//     }
//   }
const toBoolean = (input) => {
  if(isBoolean(input)) {
    return Boolean(input);
  } else if(isString(input)) {
    if(input === 'true') {
      return true;
    } else if(input === 'false') {
      return false;
    } else {
      throw new CastError(input);
    }
  } else if(isNum(input)) {
    if(input === 0 || input === 1) {
      return Boolean(input);
    } else {
      throw new CastError(input);
    }
  }
  else {
    throw new CastError(input);
  }
};


module.exports = {
  isString,
  isNum,
  isArray,
  isObj,
  isBoolean,
  isFunc,
  // moar types...

  isArrayOfStrings,
  isArrayOfNums,
  isArrayOfObj,
  isArrayOfBoolean,

  // moar array types...

  //casters
  toString,
  toNumber,
  toBoolean,

  getValidator,
};


