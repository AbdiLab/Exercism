// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let arr1ToStr = "";
  let arr2ToStr = "";
  for (let i = 0; i < array1.length; i++) {
    arr1ToStr = arr1ToStr + String(array1[i]);
  }
  for (let i = 0; i < array2.length; i++) {
    arr2ToStr = arr2ToStr + String(array2[i]);
  }

  return Number(arr1ToStr) + Number(arr2ToStr);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const valueToStr = String(value).split("").reverse().join("");

  return Number(valueToStr) === value;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input === "" || input === null || input === undefined) {
    return "Required field";
  }
  const num = Number(input);
  if (num === 0 || Number.isNaN(num)) {
    return "Must be a number besides 0";
  }
  return "";
}
