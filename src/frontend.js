// Fight class that manages the battle, and displays the results
export class Fight {
  constructor() {
  }
  // Display fight results
  displayBattleResults(Warrior) {
    console.log(`${Warrior.name} wins`);
    console.log(`winCount is ${Warrior.winCount}`);
    console.log(`Health is ${Warrior.health}`);
  }
  // Start the fight!
  battle() {
    if (fighter1.strength > fighter2.strength) {
      fighter1.winCount++;
      fighter1.health = fighter1.healthReducer();
      this.displayBattleResults(fighter1);
    }
    else {
      fighter2.winCount++;
      fighter2.health = fighter2.healthReducer();
      this.displayBattleResults(fighter2);
    }
  }
}

// Base Character Class
export class Character {
  constructor(name, weapon, level, health, winCount) {
    this.name = name;
    this.weapon = "Basic Sword";
    this.level = 1;
    this.health = 20;
    this.winCount = 0;
  }
  // Health reduction function
  healthReducer() {
    return this.health - (Math.floor((Math.random() * 9))); //Generate Random no from 0 to 8
  }
}

// Warrior Class
export class Warrior extends Character {
  constructor(strength, name) {
    super(name);
    this.strength = strength;
  }
}

const warriors = [];

// Fighter assignemnt
let fighter1 = new Warrior(1, "Luke");
let fighter2 = new Warrior(2, "Kent");

// Push warriors to our array
warriors.push(fighter1, fighter2);
console.log(warriors);

let fightStart = new Fight(Warrior);
fightStart.battle();