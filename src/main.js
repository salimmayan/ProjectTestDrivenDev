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
    });
});