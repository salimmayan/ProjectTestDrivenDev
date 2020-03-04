// Base Character Class
export class Character {
  constructor(name, weapon, level, health, winCount) {
    this.name = name;
    this.weapon = weapon;
    this.level = 1;
    this.health = 20;
    this.winCount = 0;
  }

  // Health reduction function
  healthReducer(strength) {
    let randomNumber = (Math.floor((Math.random() * 9))); //Generate Random no from 0 to 8
    //console.log(`Character:heathReducer()::RandomNo:Warrior.Strength::${randomNumber}:${strength}`);
    return this.health - randomNumber  + strength; //Generate Random no from 0 to 8
    
  }

  randomNoGenMax9 (){
  let randomNumberMax9 = (Math.floor((Math.random() * 10))); //Generate Random no from 0 to 9
  return randomNumberMax9;
  }

  randomNoGenMax10 (){
  let randomNumberMax10 = (Math.floor((Math.random() * 11))); //Generate Random no from 0 to 10
  return randomNumberMax10;
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