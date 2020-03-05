import { Fight } from '../src/Fight.js';
import { Warrior } from '../src/Warrior.js';
import { Character } from '../src/Character.js';

let arrayNames = ["Luke", "Kent", "Rueter", "Bob", "Jack", "Cindy", "Jane", "Michelle", "Randy", "Curtis"];
let arrayWeapons = ["Axe", "Sword", "NinjaStarts", "Nunchucks", "Bow", "Wrench", "Samurai Sword", "Dagger", "Butter Knife", "Bad Sushi", "Sarcasm"];

// Fighter Assignment
$(document).ready(function () {
    $('#formOne').submit(function () {
        event.preventDefault();
        var warriorCount;
        warriorCount = parseInt($('#warriorCount').val());
        console.log(`Warrior count is ${warriorCount}`);
        var warriors = [];
        let tmpVariableName = "";
        let objectCharacter = new Character("name", "weapon", 1, 20, 0);
        let tmpStrength = 0;
        let tmpFighterName = "";
        let tmpWeapon = "";
        //var loserStatusHash = {}; // var h = new Object(); // or just {}
        //hash[‘Salim’] = 4;
        let temp = "";

        for (let x = 0; x < warriorCount; x++) {
            tmpVariableName = "fighter" + x;
            tmpStrength = objectCharacter.randomNoGen(10);
            tmpFighterName = arrayNames[x];
            tmpWeapon = arrayWeapons[objectCharacter.randomNoGen(10)];
            tmpVariableName = new Warrior(tmpStrength, false, tmpFighterName, tmpWeapon);
            warriors.push(tmpVariableName);
            let temp2 = warriors[x].name + ":" + warriors[x].loserStatus + ":" + warriors[x].strength;
            temp = temp + ", " + temp2;
        }

        console.log(`Before battle warriors:status::${temp}`);

        while (warriors.length > 1) {
            let randomNumbers = [];
            randomNumbers = objectCharacter.selectTwoRandomNo(warriors, warriors.length);
            console.log(`Random numbers are ::${randomNumbers}`);

            let fight = new Fight();
            var tempFighter1 = warriors[randomNumbers[0]];
            var tempFighter2 = warriors[randomNumbers[1]];
            var loser = fight.battle(tempFighter1, tempFighter2);
            console.log("We're starting the battle between " + tempFighter1.name + " and " + tempFighter2.name);
            if (loser !== false) {
                loser.loserStatus = false;
                console.log("Loser is " + loser.name);
            }

            // loserStatusHash[loser] = true;

            var removed;
            console.log("Length of Warrior array before splicing is " + warriors.length + " and should be " + warriorCount);
            for (let i = 0; i < warriors.length; i++) {
                //console.log("We're printing the ith warriors name: " + warriors[i].name);
                if (warriors[i].name === loser.name) {
                    warriors[i].loserStatus = true;
                    console.log("SPLICING: Warrior name matched: " + warriors[i].name + " and index i " + i);
                    removed = warriors.splice(i, 1);
                    //console.log("SPLICING: removed item name is: " + removed.name);
                    break;
                }
            }

            let tempNew = "";
            console.log("Lenth of Warrior array after splicing is " + warriors.length + " and should be " + (warriors.length));
            if (warriors.length !== 2) {
                for (let k = 0; k < warriors.length; k++) {
                    let temp2New = warriors[k].name + ":" + warriors[k].loserStatus;
                    tempNew = tempNew + ", " + temp2New;
                }
                console.log(`After battle warriors:status::${tempNew}`);
            }
        }
        console.log(`Winner is ${warriors[0].name} with health ${warriors[0].health}`);
    });
});


