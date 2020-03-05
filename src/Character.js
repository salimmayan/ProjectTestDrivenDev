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
    let randomNumber = this.randomNoGen(9); (Math.floor((Math.random() * (9 + 1)))); //Generate Random no from 0 to 8
    //console.log(`Character:heathReducer()::RandomNo:Warrior.Strength::${randomNumber}:${strength}`);
    let hr = this.health - randomNumber + strength;
    return hr; //Generate Random no from 0 to 8
  }

  randomNoGen(max) {
    let randomNumber = (Math.floor((Math.random() * (max + 1)))); //Generate Random no from 0 to 9
    return randomNumber;
  }

  selectTwoRandomNo(arrayWarriors, arraySize) {
    let firstRandomNo = this.randomNoGen(arraySize - 1);
    let SecondRandomNo = this.randomNoGen(arraySize - 1);
    while (firstRandomNo === SecondRandomNo) {
      SecondRandomNo = this.randomNoGen(arraySize - 1);
    }
    let randomNumbers = [];
    randomNumbers.push(firstRandomNo);
    randomNumbers.push(SecondRandomNo);
    return randomNumbers
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