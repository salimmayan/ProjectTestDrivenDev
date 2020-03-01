const characters = [];

// Base Character
export class Character {
  constructor(name, weapon, level, health, winCount) {
    this.name = name;
    this.weapon = "Basic Sword";
    this.level = 1;
    this.health = 20;
    this.winCount = 0;
  }
  // Health reduction function
  injuryCountFunc() {
    return this.health - (Math.floor((Math.random() * 9))); //Generate Random no from 0 to 8
  }
}

// Actual Fighters
export class Warrior extends Character {
  constructor(strength, name) {
    super(name);
    this.strength = strength;
  }
}

export class Game {
  constuctor () {

  }
  displayBattleResults(Warrior) {
    console.log(`${Warrior.name} wins`);
    console.log(`winCount is ${Warrior.winCount}`);
    console.log(`Health is ${Warrior.health}`);
  }
}

// Fighter assignemnt
let fighter1 = new Warrior(1, "Luke");
let fighter2 = new Warrior(2, "Kent");

// Push characters to our array
characters.push(fighter1, fighter2);
console.log(characters);

// Fight class that manages the battle, and displays the results
export class Fight {
  constructor() {
  }
  battle() {
    var game = new Game();
    if (fighter1.strength > fighter2.strength) {
      fighter1.winCount++;
      fighter1.health = fighter1.injuryCountFunc();
      game.displayBattleResults(fighter1);
    }
    else {
      fighter2.winCount++;
      fighter2.health = fighter2.injuryCountFunc();
      game.displayBattleResults(fighter2);
    }
  }
}

let fightStart = new Fight(Warrior);
fightStart.battle();