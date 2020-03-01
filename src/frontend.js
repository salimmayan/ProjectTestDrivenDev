const characters = [];

export class Character {
  constructor(name, weapon, level, health, winCount) {
    this.name = name;
    this.weapon = "Basic Sword";
    this.level = 1;
    this.health = 20;
    this.winCount = 0;
  }
}

export class Warrior extends Character {
  constructor(strength,name) {
    super(name);
    this.strength = strength;
  }
}

let fighter1 = new Warrior(1, "Luke");
let fighter2 = new Warrior(2, "Kent");

characters.push(fighter1, fighter2);
console.log(characters);

export class Enemy extends Character {
  constructor(hostility) {
    super();
    this.hostility = hostility;
  }
}

//const computerNpcs = new Enemy(5);
//const usersWarrior = new Warrior("Michael", "Axe");
//console.log(computerNpcs);
//console.log(usersWarrior);

export class Fight {
  constructor() {
  }
  battle() { 
    if (fighter1.strength > fighter2.strength) {
      fighter1.winCount++;
      console.log(`${fighter1} wins`);
    }
    else {
      fighter2.winCount++;
      console.log(`${fighter2} wins`);
    }
  }
}

let fightStart = new Fight(Warrior);
fightStart.battle();