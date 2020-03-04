import { Fight } from '../src/Fight.js';
import { Warrior } from '../src/Warrior.js';
import { Character } from '../src/Character.js';

const warriors = [];

// var fight = new Fight();
// console.log(`Main.js: Calling Fight.battle()`);
// //fight.battle(fighter1,fighter2);

// let fightStart = new Fight(Warrior);
// fightStart.battle(fighter1, fighter2);

let arrayNames = ["Luke", "Kent", "Rueter", "Bob", "Jack", "Cindy", "Jane", "Michelle", "Randy", "Curtis"];
let arrayWeapons = ["Axe", "Sword", "NinjaStarts", "Nunchucks", "Bow", "Wrench", "Samurai Sword", "Dagger", "Butter Knife", "Bad Sushi", "Sarcasm"];

// Fighter Assignment
$(document).ready(function () {

    $('#formOne').submit(function () {
        event.preventDefault();
        var warriorCount;
        warriorCount = parseInt($('#warriorCount').val());
        console.log(`Warrior count is ${warriorCount}`);

        let tmpVariableName = "";
        let tmpCharacter = new Character("Temporary", "Temporary");

        let tmpStrength = 0;
        let tmpFighterName = "";
        let tmpWeapon = "";

        for (let x = 0; x < warriorCount; x++) {
            tmpVariableName = "fighter" + x;
            tmpStrength = tmpCharacter.randomNoGenMax10();
            tmpFighterName = arrayNames[tmpCharacter.randomNoGenMax9()];
            tmpWeapon = arrayWeapons[tmpCharacter.randomNoGenMax10()];
            tmpVariableName = new Warrior(tmpStrength, tmpFighterName, tmpWeapon);
            warriors.push(tmpVariableName);
        }
        console.log(warriors);

        let fight = new Fight();
        console.log("We're starting the battle between " + warriors[0].name + " and " + warriors[1].name);
        var loser = fight.battle(warriors[0], warriors[1]);
        console.log("loser is " + loser);

        console.log(warriors.length);
        for (let i = 0; i < warriors.length; i++) {
            //console.log("We're printing the ith warriors name: " + warriors[i].name);
            if (warriors[i].name === loser) {
                warriors.splice(i);
               // console.log("Warrior name matched: " + warriors[i].name + " and index i " + i);
            }
        
        }
        
        
        for (let k = 0; k < warriors.length; k++) {
            console.log("retained warrior is " + warriors[k].name);
        }

        // console.log(warriors.name);


        // warriors.name.splice(['Randy']);


    });
});