import { Warrior } from '../src/Warrior.js';
import { Character } from '../src/Character.js';




// Fight class that manages the battle, and displays the results
export class Fight {
    constructor() {
    }
    // Display fight results
    displayBattleResults(Warrior) {
      console.log(`Name is ${Warrior.name}`);
      console.log(`weapon is ${Warrior.weapon}`);
      console.log(`level is ${Warrior.level}`);
      console.log(`health is ${Warrior.health}`);
      console.log(`winCount is ${Warrior.winCount}`);
      console.log(`Strenth is ${Warrior.strength}`);     
    }
    // Start the fight!
    battle(fighter1, fighter2) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        // console.log(fighter1, fighter2);
        console.log(this.fighter1);
    //     //let fighter1 = new Warrior();
    //    // let fighter2 = new Warrior();
    //    //    this.fighter1 = fighter1;
    //  //    this.fighter2 = fighter2;
    //   // console.log(`FIGHT.JS: IS ERROR HERE? fighter1 name is ${fighter1.name}`); 
    // //    console.log(`FIGHT.JS: IS ERROR HERE? fighter2 name is ${fighter2.name}`); 
    // //    console.log(`FIGHT.JS: IS ERROR HERE? fighter1 ${fighter1.strength}`); 
    // //    console.log(`FIGHT.JS: IS ERROR HERE? fighter2 ${fighter2.strength}`);
    //   if (fighter1.strength > fighter2.strength) {
    //     fighter1.winCount++;
    //     fighter1.health = fighter1.healthReducer();
    //     this.displayBattleResults(fighter1); 
    //     console.log(`FIGHT.JS: Iam in loop1 ${fighter1.health}`);
    //     console.log(`FIGHT.JS: Iam in loop1 ${fighter1.strength}`);
    //   }
    //   else {
    //     fighter2.winCount++;
    //     fighter2.health = fighter2.healthReducer();
    //     this.displayBattleResults(fighter2);
    //     console.log(`FIGHT.JS: Iam in loop2 ${fighter2.health}`);
    //     console.log(`FIGHT.JS: Iam in loop1 ${fighter2.strength}`);
      } 
  }