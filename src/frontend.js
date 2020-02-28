const characters = [];


export class Character {
  constructor(name="NPC", weapon="Basic Sword", level=1, strength=5, health=20) {
    this.name = name;
    this.weapon = weapon;
    this.level = level;
    this.strength = strength;
    this.health = health;
    // this.currentId = currentId ++;
  }
}

export class Warrior extends Character {
  constructor(name, weapon) {
    super();
    this.name = name;
    this.weapon = weapon;
  }  
}

export class Enemy extends Character {
  constructor(hostility) {
    super();
    this.hostility = hostility;
  }
}

const computerNpcs = new Enemy(5);
const usersWarrior = new Warrior("Michael", "Axe");
console.log(computerNpcs);
console.log(usersWarrior);

