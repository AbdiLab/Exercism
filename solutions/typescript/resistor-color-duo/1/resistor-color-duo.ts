export function decodedValue(colors:string[]):number[] {
const colorList: string[] = [
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
  const indexColors: number[] = [];
  colors.forEach((c, i) => {
    if (i < 2) {
      return indexColors.push(colorList.indexOf(c));
    }
  });

  return indexColors;
}



decodedValue(["black" , "red"])
decodedValue(["black" , "red", "white"])

