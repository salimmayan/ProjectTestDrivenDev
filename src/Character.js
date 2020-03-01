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