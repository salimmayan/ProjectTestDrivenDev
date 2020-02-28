import { Warrior } from './../src/frontend.js';

describe('Warrior', () => {
  var reuseableWarrior;

  beforeEach(() => {
    reuseableWarrior = new Warrior("Dummy", "Pinata", 1);
    expect(reuseableWarrior.name).toEqual("Dummy");
    expect(reuseableWarrior.weapon).toEqual("Pinata");
    expect(reuseableWarrior.level).toEqual(1);
  });

  test('should correctly create a warrior object with a name, a weapon and a level', () => {
    reuseableWarrior = new Warrior("Michael", "Axe", 10);
    expect(reuseableWarrior.name).toEqual("Michael");
    expect(reuseableWarrior.weapon).toEqual("Axe");
    expect(reuseableWarrior.level).toEqual(10);
  });

});