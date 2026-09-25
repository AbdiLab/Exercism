/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 * export function yourFunction(...) {
 *   ...
 * }
 */

/**
 *  @param {layers} layers
 * @returns {Quantities}
 */
export function quantities(layers) {
  const noodleGrams = 50;
  const sauceLiters = 0.2;

  const noodlesCount = layers.filter((s) => s === "noodles").length;
  const SauceCount = layers.filter((s) => s === "sauce").length;

  return { noodles: noodleGrams * noodlesCount, sauce: sauceLiters * SauceCount };
}

/**
 *  @param {layers} layers
 */

export function preparationTime(layers, time = 2) {
  return layers.length * time;
}

export function cookingStatus(time = undefined) {
  if (time === undefined) return "You forgot to set the timer.";
  if (time === 0) return "Lasagna is done.";

  return "Not done, please wait.";
}

/**
 *  @param {layers} friendsList
 *  @param {layers} myList
 */

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

/**
 *  @param {Recipe} recipe
 * @param {number|undefined} amount
 *  @returns {Recipe}
 *
 */

export function scaleRecipe(recipe, amount = undefined) {
  const portion = amount === undefined ? 1 : amount / 2;
  /** @type {Recipe} */
  let needRecipe = {};
  for (const key in recipe) {
    needRecipe[key] = recipe[key] * portion;
  }

  return needRecipe;
}
