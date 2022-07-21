function stringLength(string) {
  if (string.length <= 10 && string.length >=1) {
    return string.length;
  } else {
    return "Error";
  }
}

module.exports = stringLength;