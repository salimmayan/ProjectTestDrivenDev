import { Warrior } from '../src/Warrior.js';

// Fight class that manages the battle, and displays the results
export class Fight {
  constructor() {
  }

  // Start the fight!
  battle(warrior1, warrior2) {
    var staleMate = false;
    warrior1.health = warrior1.healthReducer(warrior1.strength);
    warrior2.health = warrior2.healthReducer(warrior2.strength);

    if (warrior1.health > warrior2.health) {
      warrior1.winCount++;
      console.log(`Winner was Warrior1 - Warrior1.health:Warrior2.health::${warrior1.health}:${warrior2.health}`);
      this.displayBattleResults(warrior1, "Winner ==> ");
      this.displayBattleResults(warrior2, "Loser ==> ");
      return warrior2;
    }
    else if (warrior2.health > warrior1.health) {
      warrior2.winCount++;
      console.log(`Winner was Warrior2 - Warrior1.health:Warrior2.health::${warrior1.health}:${warrior2.health}`);
      this.displayBattleResults(warrior2, "Winner ==> ");
      this.displayBattleResults(warrior1, "Loser ==> ");
      return warrior1;
    }
    else {
      console.log(`No Winner - warrior1.health:warrior2.health::${warrior1.health}:${warrior2.health}`);
      this.displayBattleResults(warrior1, "Draw ==> ");
      this.displayBattleResults(warrior2, "Draw ==> ");
      return staleMate = false;
    }
  }

  // Display fight results
  displayBattleResults(objectName, message) {
    console.log(`${message} Name:Weapon:Level:Health:WinCount:Strength::::::${objectName.getName()}:${objectName.getWeapon()}:${objectName.getLevel()}:${objectName.getHealth()}:${objectName.getWinCount()}:${objectName.strength}`);
  }

}