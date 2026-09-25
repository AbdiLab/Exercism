/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  let pizzaPrice = 0;
  let extraSaucePrice = 0;
  let ExtraToppingPrice = 0;

  switch (pizza) {
    case "Caprese":
      pizzaPrice = pizzaPrice + 9;
      break;
    case "Formaggio":
      pizzaPrice = pizzaPrice + 10;
      break;
    default:
      pizzaPrice = pizzaPrice + 7;
  }

  for (let i = 0; i < extras.length; i++) {
    if (extras[i] === "ExtraSauce") {
      extraSaucePrice = extraSaucePrice + 1;
    } else {
      ExtraToppingPrice = ExtraToppingPrice + 2;
    }
  }

  return pizzaPrice + extraSaucePrice + ExtraToppingPrice;
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let totalPizzaOrders = 0;

  pizzaOrders.forEach((order) => {
    totalPizzaOrders = totalPizzaOrders + pizzaPrice(order.pizza, ...order.extras);
  });

  return totalPizzaOrders;
}
