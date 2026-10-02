//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const colors = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

export const decodedValue = ([first, second]) => {
  return Number(`${colors.indexOf(first)}${colors.indexOf(second)}`);
};

console.log(decodedValue(["brown", "black"]));
