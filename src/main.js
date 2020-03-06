import { Calculator } from '../src/Calculator.js';
import { Warrior } from '../src/Warrior.js';
import { Character } from '../src/Character.js';
import { BattleRecord } from '../src/BattleRecord.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


let calculator = new Calculator();
const planetsConvFactor = [0.24, 0.62, 1.00, 1.88, 11.86];

let planetAgeArray = []; 
planetAgeArray = calculator.ageOnPlanets(35, planetsConvFactor);

console.log(`planet age array is ${planetAgeArray}`);