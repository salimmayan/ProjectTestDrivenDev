import { Calculator } from '../src/Calculator.js';
import { LifeExpectancy } from '../src/LifeExpectancy.js';

// Calculator Suite
describe('Calculator', () => {
  var calculator;
  const planetsConvFactor = [0.24, 0.62, 1.00, 1.88, 11.86];

  beforeEach(() => {
    calculator = new Calculator(0, 1, 2, 3, 4, 5);
  });

  test('should correctly create a Calculator object with a ageOnMercury value initialized to 0', () => {
    expect(calculator.ageOnMercury).toEqual(0);
  });

  test('should correctly create a Calculator object with a ageOnVenus value initialized to 1', () => {
    expect(calculator.ageOnVenus).toEqual(1);
  });

  test('should correctly create a Calculator object with a ageOnEarth value initialized to 2', () => {
    expect(calculator.ageOnEarth).toEqual(2);
  });

  test('should correctly create a Calculator object with a ageOnMars value initialized to 3', () => {
    expect(calculator.ageOnMars).toEqual(3);
  });

  test('should correctly create a Calculator object with a ageOnJupiter value initialized to 4', () => {
    expect(calculator.ageOnJupiter).toEqual(4);
  });

  test('should correctly create a Calculator object and return a anything but null or undefined', () => {
    expect(calculator.ageOnPlanets(35, planetsConvFactor)).toEqual(expect.anything());
  });

  test('should correctly create a Calculator object and return ages on all planets for inputted values', () => {
    expect(calculator.ageOnPlanets(35, planetsConvFactor)).toEqual(expect.arrayContaining([145, 56, 35, 18, 2]));
  });

  test('Create a Calculator object and return yearsRemaining for one Demographic on all planets (Current age < Life Expectancy)', () => {
    var expected = [83, 32, 20, 11, 2];
    expect(calculator.yearsRemaining(45, [270, 104, 65, 34, 5], planetsConvFactor)).toEqual(expect.arrayContaining(expected));
  });

  test('Create a Calculator object and return yearsRemaining for one Demographic on all planets (Current age === Life Expectancy)', () => {
    var expected = [0, 0, 0, 0, 0];
    expect(calculator.yearsRemaining(65, [270, 104, 65, 34, 5], planetsConvFactor)).toEqual(expect.arrayContaining(expected));
  });
});

// LifeExpectancy Suite
describe('LifeExpectancy', () => {
  var lifeExpectancy;
  const planetsConvFactor = [0.24, 0.62, 1.00, 1.88, 11.86];
  const constLifeExp = [65, 70, 65, 64];
  const expected = [[300, 116, 72, 38], [6, 320, 124, 77], [40, 6, 300, 116, 72], [38, 6, 295, 114, 71, 37, 5]];

  beforeEach(() => {
    lifeExpectancy = new LifeExpectancy([11, 12, 13], [14, 15, 16], [17, 18, 19], [20, 21, 22]);
  });

  test('should correctly create a LifeExpectancy object and return a anything but null or undefined', () => {
    var lifeExpectancy = new LifeExpectancy([], [], []);
    const planetsConvFactor = [0.24, 0.62, 1.00, 1.88, 11.86];
    const constLifeExp = [65, 70, 65, 64];
    expect(lifeExpectancy.lifeExpAllRaceAllPlanet("female", constLifeExp, planetsConvFactor)).toEqual(expect.anything());
  });

  test('should correctly create a LifeExpectancy object and return ages on all planets. Demographic:Sex:"american":"female"', () => {
    lifeExpectancy.lifeExpAllRaceAllPlanet("female", constLifeExp, planetsConvFactor);
    expect(lifeExpectancy.american).toEqual(expect.arrayContaining([300, 116, 72, 38, 6]));
    console.log("expected is " + expected);
  });

  test('should correctly create a LifeExpectancy object and return ages on all planets. Demographic:Sex:"canadian":"female"', () => {
    lifeExpectancy.lifeExpAllRaceAllPlanet("female", constLifeExp, planetsConvFactor);
    expect(lifeExpectancy.canadian).toEqual(expect.arrayContaining([320, 124, 77, 40, 6]));
    console.log("expected is " + expected);
  });

  test('should correctly create a LifeExpectancy object and return ages on all planets. Demographic:Sex:"mexican":"female"', () => {
    lifeExpectancy.lifeExpAllRaceAllPlanet("female", constLifeExp, planetsConvFactor);
    expect(lifeExpectancy.mexican).toEqual(expect.arrayContaining([300, 116, 72, 38, 6]));
    console.log("expected is " + expected);
  });

  test('should correctly create a LifeExpectancy object and return ages on all planets. Demographic:Sex:"cuban":"female"', () => {
    lifeExpectancy.lifeExpAllRaceAllPlanet("female", constLifeExp, planetsConvFactor);
    expect(lifeExpectancy.cuban).toEqual(expect.arrayContaining([295, 114, 71, 37, 5]));
    console.log("expected is " + expected);
  });

  test('should correctly create a LifeExpectancy object and return ages on all planets. Demographic:Sex:"american":"male"', () => {
    lifeExpectancy.lifeExpAllRaceAllPlanet("male", constLifeExp, planetsConvFactor);
    expect(lifeExpectancy.american).toEqual(expect.arrayContaining([270, 104, 65, 34, 5]));
    console.log("expected is " + expected);
  });

  test('should correctly create a LifeExpectancy object and return ages on all planets. Demographic:Sex:"canadian":"male"', () => {
    lifeExpectancy.lifeExpAllRaceAllPlanet("male", constLifeExp, planetsConvFactor);
    expect(lifeExpectancy.canadian).toEqual(expect.arrayContaining([291, 112, 70, 37, 5]));
    console.log("expected is " + expected);
  });

  test('should correctly create a LifeExpectancy object and return ages on all planets. Demographic:Sex:"mexican":"male"', () => {
    lifeExpectancy.lifeExpAllRaceAllPlanet("male", constLifeExp, planetsConvFactor);
    expect(lifeExpectancy.mexican).toEqual(expect.arrayContaining([270, 104, 65, 34, 5]));
    console.log("expected is " + expected);
  });

  test('should correctly create a LifeExpectancy object and return ages on all planets. Demographic:Sex:"cuban":"male"', () => {
    lifeExpectancy.lifeExpAllRaceAllPlanet("male", constLifeExp, planetsConvFactor);
    expect(lifeExpectancy.cuban).toEqual(expect.arrayContaining([266, 103, 64, 34, 5]));
    console.log("expected is " + expected);
  });

});