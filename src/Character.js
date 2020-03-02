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
    let randomNumber = (Math.floor((Math.random() * 9)));
    console.log(`Character:heathReducer()::Random number generated is ${randomNumber}`);
    return this.health - randomNumber; //Generate Random no from 0 to 8
  }

  getName() {
    return this.name;
  }
  getWeapon() {
    return this.weapon;
  }

  getLevel() {
    return this.level;
  }
  getHealth() {
    return this.health;
  }
  getWinCount() {
    return this.winCount;
  }
}