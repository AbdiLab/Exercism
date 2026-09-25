
const colorCode = [
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
] as const;


export function decodedResistorValue(value: (typeof colorCode)[number][]) {

  const firstIndex= colorCode.indexOf(value[0])
  const secondIndex=colorCode.indexOf(value[1])
  const thirdIndex= colorCode.indexOf(value[2])
  const zeros= "0".repeat(thirdIndex)

  return `${firstIndex} ${secondIndex} ${zeros} ohms`

}



decodedResistorValue(["orange", "orange", "black"])