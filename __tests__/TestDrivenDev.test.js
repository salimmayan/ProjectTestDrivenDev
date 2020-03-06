import { Calculator } from '../src/Calculator.js';

// Calculator Suite
describe('Calculator', () => {
  var calculator;

  beforeEach(() => {
    calculator = new Calculator();
    // expect(reuseableWarrior.name).toEqual(1);
    // expect(reuseableWarrior.weapon).toEqual("Salim");
  });

  test('should correctly create a Calculator object and return ages on all planets', () => {
    expect(calculator.ageOnPlanets(35, [0.24, 0.62, 1, 1.88, 11.86])).toEqual(expect.arrayContaining([145, 56, 35, 18, 2]));
  });

  test('should correctly create a Calculator object and return a anything but null or undefined', () => {
    expect(calculator.ageOnPlanets(35, [0.24, 0.62, 1, 1.88, 11.86])).toEqual(expect.anything());
  });

});