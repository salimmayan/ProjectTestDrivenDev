import { Character } from '../src/Character.js';

// Warrior Class
export class Warrior extends Character {
  constructor(strength, name, weapon) {
    super(name, weapon);
    this.strength = strength; 
  }
}
