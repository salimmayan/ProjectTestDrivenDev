import { Warrior, Character, Enemy } from './../src/frontend.js';

// Warrior Suite
describe('Warrior', () => {
  var reuseableWarrior;

  beforeEach(() => {
    reuseableWarrior = new Warrior("Arthur", "Bow");
    expect(reuseableWarrior.name).toEqual("Arthur");
    expect(reuseableWarrior.weapon).toEqual("Bow");
  });

  // Warrior Test
  test('should correctly create a warrior object with a name, a weapon and a level', () => {
    reuseableWarrior = new Warrior("Michael", "Axe");
    expect(reuseableWarrior.name).toEqual("Michael");
    expect(reuseableWarrior.weapon).toEqual("Axe");
  });

});

// Character Suite
describe('Character', () => {
  var reuseableCharacter;

  beforeEach(() => {
    reuseableCharacter = new Character("Dummy", "Lance", 10);
    expect(reuseableCharacter.name = "Dummy");
    expect(reuseableCharacter.weapon = "Lance");
    expect(reuseableCharacter.level = 10);
  });

  // Character Test
  test('should correctly create a character object with a name, a weapon, and a level', () => {
    reuseableCharacter = new Character("NPC", "Basic Sword", 1);
    expect(reuseableCharacter.name = "NPC");
    expect(reuseableCharacter.weapon = "Basic Sword");
    expect(reuseableCharacter.level = 1);
  });
});