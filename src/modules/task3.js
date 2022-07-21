class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }
  static calcSum(num1, num2) {
    return num1 + num2;
  }
  static calcSubtract(num1, num2) {
    return num1 - num2;
  }
  static calcDivision(num1, num2) {
    return num1 / num2;
  }
  static calcMultiply(num1, num2) {
    return num1 * num2;
  }
}

module.exports = Calculator;