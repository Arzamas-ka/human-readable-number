const lessTwenty = number => {
  switch (number) {
    case "10":
      return "ten";
    case "11":
      return "eleven";
    case "12":
      return "twelve";
    case "13":
      return "thirteen";
    case "14":
      return "fourteen";
    case "15":
      return "fifteen";
    case "16":
      return "sixteen";
    case "17":
      return "seventeen";
    case "18":
      return "eighteen";
    case "19":
      return "nineteen";
    default:
      return "";
  }
};

const lessTen = number => {
  switch (number) {
    case "1":
      return "one";
    case "2":
      return "two";
    case "3":
      return "three";
    case "4":
      return "four";
    case "5":
      return "five";
    case "6":
      return "six";
    case "7":
      return "seven";
    case "8":
      return "eight";
    case "9":
      return "nine";
    default:
      return "";
  }
};

const lessHundread = numberStr => {
  const secondPart = lessTen(numberStr[1]);
  let firstPart;

  switch (numberStr[0]) {
    case "2":
      firstPart = "twenty";
      break;
    case "3":
      firstPart = "thirty";
      break;
    case "4":
      firstPart = "forty";
      break;
    case "5":
      firstPart = "fifty";
      break;
    case "6":
      firstPart = "sixty";
      break;
    case "7":
      firstPart = "seventy";
      break;
    case "8":
      firstPart = "eighty";
      break;
    case "9":
      firstPart = "ninety";
      break;
  }

  return secondPart ? `${firstPart} ${secondPart}` : firstPart;
};

const lessThousend = numberStr => {
  let firstPart = lessTen(numberStr[0]);
  let secondPart = "";
  let thirdPart = "";
  let finalNumber = `${firstPart} hundred`;

  if (numberStr[1] !== "0" && numberStr[1] === "1") {
    secondPart = lessTwenty(numberStr.slice(1));
    finalNumber += ` ${secondPart}`;
  }

  if (numberStr[1] !== "0" && numberStr[1] !== "1") {
    secondPart = lessHundread(numberStr.slice(1));
    finalNumber += ` ${secondPart}`;
  }

  if (!secondPart && numberStr[2] !== "0") {
    thirdPart = lessTen(numberStr[2]);
    finalNumber += ` ${thirdPart}`;
  }

  return finalNumber;
};

module.exports = function toReadable(number) {
  const str = String(number);

  if (number === 0) {
    return "zero";
  }

  if (str.length === 1) {
    return lessTen(str);
  }

  if (str.length === 2 && number < 20) {
    return lessTwenty(str);
  }

  if (str.length === 2 && number < 100) {
    return lessHundread(str);
  }

  return lessThousend(str);
};
