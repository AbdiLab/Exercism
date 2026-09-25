export function decodedValue(colors:string[]):number {
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

  return Number(`${colorList.indexOf(colors[0])}${colorList.indexOf(colors[1])}`);
}



decodedValue(["black" , "red"])
decodedValue(["black" , "red", "white"])

