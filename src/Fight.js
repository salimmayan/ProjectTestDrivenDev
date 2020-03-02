import { Warrior } from '../src/Warrior.js';

// Fight class that manages the battle, and displays the results
export class Fight {
  constructor() {
  }

  // Start the fight!
  battle(x, y) {
    // x = new Warrior();
    // y = new Warrior();   

    console.log(`FIGHT.JS: Calling healthReducer() for ${x.getName()}`);
    x.health = x.healthReducer();
    console.log(`FIGHT.JS: battle: health for ${x.getName()} is ${x.getHealth()}`);
    console.log(`FIGHT.JS: Calling healthReducer() for ${y.getName()}`);
    y.health = y.healthReducer();
    console.log(`FIGHT.JS: battle: health for ${y.getName()} is ${y.getHealth()}`);

    if (x.health > y.health) {
      x.winCount++;
      this.displayBattleResults(x);
    }
    else {
      y.winCount++;
      this.displayBattleResults(y);
    }
  }

  // Display fight results
  displayBattleResults(z) {
    console.log(`FIGHT.JS: For Winner ${z.getName()} Name:Weapon:Level:Health:WinCount:Strength::::::${z.getName()}:${z.getWeapon()}:${z.getLevel()}:${z.getHealth()}:${z.getWinCount()}:${z.strength}`);
  }

}