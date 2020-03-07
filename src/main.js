import { Calculator } from '../src/Calculator.js';
import { LifeExpectancy } from '../src/LifeExpectancy.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


let calculator = new Calculator(0,0,0,0,0);
let lifeExpectancy = new LifeExpectancy([1, 2, 3], [4 ,5, 6], [7, 8, 9], [10, 11, 12]);

const planetsConvFactor = [0.24, 0.62, 1.00, 1.88, 11.86];
const constLifeExp =[65, 70, 65, 64];

let planetAgeArray = []; 
planetAgeArray = calculator.ageOnPlanets(35, planetsConvFactor);

console.log(`planet age array is ${planetAgeArray}`);

lifeExpectancy.lifeExpAllRaceAllPlanet("male", constLifeExp, planetsConvFactor);

console.log(`life expenctancy of american:canadian:mexican:cuban::::${lifeExpectancy.american}:${lifeExpectancy.canadian}:${lifeExpectancy.mexican}:${lifeExpectancy.cuban}`);

let yearsLeft = [];
yearsLeft = calculator.yearsRemaining(65, lifeExpectancy.american, planetsConvFactor);

console.log(`years left is ${yearsLeft}`);