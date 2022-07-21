function capitalize(string) {
  const splitString = string.split("");
  splitString[0] = splitString[0].toUpperCase();
  const joinArray = splitString.join("");
  return joinArray;
}

module.exports = capitalize;