import '../src/frontend.js';
import { Character } from '../src/Character.js';
import { Fight } from '../src/Fight.js';
import { Warrior } from '../src/Warrior.js';

const warriors = [];

// Fighter assignemnt

let fighter1 = new Warrior(5, "Luke");
let fighter2 = new Warrior(2, "Kent");


console.log(`MAIN FIGHTER1 NAME IS ${fighter1.name}`);
console.log(`MAIN FIGHTER1 strength IS ${fighter1.strength}`);

var fight = new Fight ();
fight.battle(fighter1,fighter2);

// Push warriors to our array
warriors.push(fighter1);
warriors.push(fighter2);
console.log(warriors);

let fightStart = new Fight(Warrior);
fightStart.battle(); 