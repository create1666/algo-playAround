const checkYuGioh = (n) => {
  const lengthy = n;
  if (Number.isNaN(lengthy)) {
    return console.log("this is not a number");
  } else {
    let generateArray = [];
    for (let count = 1; count <= lengthy; count++) {
      generateArray.push(count);
      console.log("automated", generateArray);
    }

    for (let i of generateArray) {
      if (generateArray[i] % 3 === 0) {
        generateArray[i] = "gi";
        console.log(generateArray);
      } else if (generateArray[i] % 5 === 0) {
        generateArray[i] = "oh";
        console.log(generateArray);
      } else if (generateArray[i] % 2 === 0) {
        generateArray[i] = "yu";
        console.log(generateArray);
      }
    }
  }
};
console.log(checkYuGioh(30));
