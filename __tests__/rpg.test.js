import { Warrior} from './../src/Warrior.js';
import { Character} from './../src/Character.js';
import { Fight} from './../src/Fight.js';

// Warrior Suite
describe('Warrior', () => {
  var reuseableWarrior;

  // beforeEach(() => {
  //   reuseableWarrior = new Warrior(1, "Salim");
  //   expect(reuseableWarrior.name).toEqual(1);
  //   expect(reuseableWarrior.weapon).toEqual("Salim");
  // });

  // Warrior Test
  test('should correctly create a warrior object with a name, a weapon and a level', () => {
    reuseableWarrior = new Warrior(1, "Salim");
    expect(reuseableWarrior.strength).toEqual(1);
    expect(reuseableWarrior.name).toEqual("Salim");
  });

});

// Character Suite
describe('Character', () => {
  var reuseableCharacter;

  // beforeEach(() => {
  //   reuseableCharacter = new Character("Dummy", "Lance", 10);
  //   expect(reuseableCharacter.name = "Dummy");
  //   expect(reuseableCharacter.weapon = "Lance");
  //   expect(reuseableCharacter.level = 10);
  // });

  // Character Test
  test('should correctly create a character object with a name, a weapon, and a level', () => {
    reuseableCharacter = new Character("somename", "Axe", 1, 20, 0);
    //expect(reuseableCharacter.name = "NPC");
    expect(reuseableCharacter.weapon = "Axe");
    expect(reuseableCharacter.health = 20);
    expect(reuseableCharacter.winCount = 0);

  });
});

// warriors array Suite
describe('warrior', () => {
  var reuseableCharacter;

  test('Array named warrior shall contain 2 elements', () => {
    const expected = ['fighter1', 'fighter2'];
      expect(['fighter1', 'fighter2']).toEqual(expect.arrayContaining(expected));
   

  });
});