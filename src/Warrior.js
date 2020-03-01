import { Character } from '../src/Character.js';

// Warrior Class
export class Warrior extends Character {
    constructor(strength, name) {
      super(name);
      this.strength = strength;
    }
  }
