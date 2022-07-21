const stringLength = require('./task1.js');
const reverseString = require('./task2.js');
const Calculator = require('./task3.js');
const capitalize = require('./task4.js');

test('Hello length equal to 5', () => {
  expect(stringLength('Hello')).toBe(5);
});

test('HolaMundoGrande throw an error', () => {
  expect(stringLength('HolaMundoGrande')).toBe("Error");
});

test('No string throw an error', () => {
  expect(stringLength('')).toBe("Error");
});

test('Hello in reverse equal to olleH', () => {
  expect(reverseString('Hello')).toBe('olleH');
});

describe('A sum', () => {
  test('4 + 2 is 6', () => {
    expect(Calculator.calcSum(4,2)).toBe(6);
  })
  test('4 + 4 is 8',() => {
    expect(Calculator.calcSum(4,4)).toBe(8);
  })
  test('5 + 5 is 10',() => {
    expect(Calculator.calcSum(5,5)).toBe(10);
  })
})

describe('A substract', () => {
  test('4 - 2 is 2',() => {
    expect(Calculator.calcSubtract(4,2)).toBe(2);
  })
  test('4 - 4 is 0',() => {
    expect(Calculator.calcSubtract(4,4)).toBe(0);
  })
  test('5 - 5 is 0',() => {
    expect(Calculator.calcSubtract(5,5)).toBe(0);
  })
})

describe('A division', () => {
  test('4 / 2 is 2',() => {
    expect(Calculator.calcDivision(4,2)).toBe(2);
  })
  test('4 / 4 is 1',() => {
    expect(Calculator.calcDivision(4,4)).toBe(1);
  })
  test('9 / 3 is 3',() => {
    expect(Calculator.calcDivision(9,3)).toBe(3);
  })
})

describe('A multiplication', () => {
  test('4 * 2 is 8',() => {
    expect(Calculator.calcMultiply(4,2)).toBe(8);
  })
  test('4 * 4 is 16',() => {
    expect(Calculator.calcMultiply(4,4)).toBe(16);
  })
  test('9 * 3 is 27',() => {
    expect(Calculator.calcMultiply(9,3)).toBe(27);
  })
})

test('hello is equal to Hello',() => {
  expect(capitalize('hello')).toBe('Hello');
});