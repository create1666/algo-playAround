const convertFahrToCelsius = (f) => {
  if (typeof f === "number" || typeof f === "string") {
    let calcFahr = parseInt(((f - 32) * 5) / 9);
    console.log(calcFahr.toFixed(4));
  } else if (Array.isArray(f)) {
    console.log(`${JSON.stringify(f)} is not a valid number but an Array`);
  } else
    console.log(
      `${JSON.stringify(f)} is not a number but ${
        typeof f === "object" && "an"
      } ${typeof f}`
    );
};
convertFahrToCelsius("70");
convertFahrToCelsius(30);
convertFahrToCelsius([45]);
convertFahrToCelsius({temp: 0});