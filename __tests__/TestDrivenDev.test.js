import { Calculator } from '../src/Calculator.js';

// Warrior Suite
describe('Calculator', () => {
  var calculator;

  // beforeEach(() => {
  //   reuseableWarrior = new Warrior(1, "Salim");
  //   expect(reuseableWarrior.name).toEqual(1);
  //   expect(reuseableWarrior.weapon).toEqual("Salim");
  // });

  // Warrior Test
  test('should correctly create a Calculator object and return ages on all planets', () => {
    calculator = new Calculator();
    //expect(calculator.ageOnPlanets(35, [0.24, 0.62, 1,00, 1.88, 11.86])).toEqual(expect.arrayContaining(145.83, 56.45, 35.00, 18.62, 2.95));
   // expect(calculator.ageOnPlanets(35, [0.24, 0.62, 1,00, 1.88, 11.86])).toEqual(expect.anything());
   // expect(reuseableWarrior.name).toEqual("Salim");
  });

});