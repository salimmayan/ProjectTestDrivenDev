import { Fight } from '../src/Fight.js';
import { Warrior } from '../src/Warrior.js';

const warriors = [];

// Fighter assignemnt

let fighter1 = new Warrior(5, "Luke");
let fighter2 = new Warrior(2, "Kent");


console.log(`Main.js: Fighter1Name:Fighter2Name::${fighter1.getName()}:${fighter2.getName()}`);

var fight = new Fight ();
console.log(`Main.js: Calling Fight.battle()`);
fight.battle(fighter1,fighter2);

// Push warriors to our array
warriors.push(fighter1);
warriors.push(fighter2);
//console.log(warriors);

let fightStart = new Fight(Warrior);
fightStart.battle(fighter1,fighter2); 