//const characters = [];

export class Character {
  constructor(name = "NPC", weapon = "Basic Sword", level = 1, health = 20, winCount = 0) {
    this.name = name;
    this.weapon = weapon;
    this.level = level;
    this.health = health;
    this.winCount = winCount;
  }
}

export class Warrior extends Character {
  constructor(strength) {
    super();
    this.strength = strength;
  }
}

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
  constructor(Warrior) {
    this.fighter1 = new Warrior();
    this.fighter2 = new Warrior();
  }
  battle() {
    let fighter1 = new Warrior(1);
    let fighter2 = new Warrior(3);
    if (fighter1.strength > fighter2.strength) {
      fighter1.winCount++;
      console.log(`Fighter1 wins`);
    }
    else {
      fighter2.winCount++;
      console.log(`Fighter2 wins`);
    }
  }
}

let fightStart = new Fight(Warrior);
fightStart.battle();