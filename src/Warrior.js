import { Character } from '../src/Character.js';

// Warrior Class
export class Warrior extends Character {
  constructor(strength, loserStatus, name, weapon) {
    super(name, weapon);
    this.strength = strength;
    this.loserStatus = loserStatus;
  }
}
