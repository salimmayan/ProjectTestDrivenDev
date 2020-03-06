import { Fight } from '../src/Fight.js';
import { Warrior } from '../src/Warrior.js';
import { Character } from '../src/Character.js';
import { BattleRecord } from '../src/BattleRecord.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


let arrayNames = ["Ada", "Adelia", "Alba", "Alessia", "Alma", "Amalia", "Amaris", "Angelica", "Ansel", "Antonina", "Arden", "Ari", "Artemis", "Arthur", "Asa", "Aurelius", "Azariah", "Bear", "Bram", "Cassia", "Cora", "Darcy", "Eira", "Elva", "Emil", "Faye", "Fia", "Fleur", "Gracia", "Henley", "Horatio", "Ione", "Ivo", "Jacinta", "Jericho", "Jessamy", "Juliette", "Keir", "Kit", "Koa", "Leopold", "Lev", "Lilia", "Linus", "Logan", "Lorcan", "Lucinda", "Magnus", "Maia", "Malachy", "Marisol", "Marlow", "Massimo", "Milana", "Millicent", "Niamh", "Nola", "November", "Olympia", "Ottoline", "Petra", "Quincy", "Rafferty", "Ramona", "Ren", "Renata", "Reverie", "Romilly", "Romy", "Roscoe", "Rowan", "Rowena", "Sabine", "Sasha", "Saul", "Sera", "Serafina", "Seth", "Tansy", "Teddy", "Tempest", "Teo", "Thelonious", "Thorin", "Urban", "Verity", "Veronica", "Vida", "Virgil", "Viviana", "Wilfred", "Winslow", "Wynn", "Xen", "Zahra", "Zephyr", "Ziggy", "Zion", "Ken", "Luke"];
let arrayWeapons = ["Antiaircraft Gun", "Antitank", "Big Bertha", "Cannon", "French 75", "Vulcan Automatic", "Coastal Gun", "German 88", "Maxim Gun", "Mortar", "Panzerfaust", "Panzerschreck", "Paris Gun", "Schwarz Gun", "Anthrax", "Plague", "Q Fever", "Ricin", "Smallpox", "Yellow Rain", "Adamsite", "Diphosgene", "Hydrogen Cyanide", "Lewisite", "Nerve Gas", "Phosgene", "Tear Gas", "Chloropicrin", "Bola", "Boomerang", "Bow & Arrow", "Crossbow", "Longbow", "Grapeshot", "Flamethrower", "Greek Fire", "Sling", "Spear", "Spear-Thrower", "Bayonet", "Club", "Dagger", "Halberd", "Lance", "Pike", "Quarterstaff", "Sabre", "Sword", "Tomahawk", "Depth Charge", "Dirty Bomb", "Grenade", "Improvised Explosive Device", "Mine", "Shrapnel", "Petn", "Rdx", "TNT", "AB Missile", "Icbm", "Lance Missile", "Peacekeeper Missile", "Minuteman Missile", "Nike Missile", "Polaris Missile", "Poseidon Missile", "Torpedo", "Trident Missile", "V-2 Missile", "Tomahawk", "V-1 Missile", "Bazooka", "Congreve Rocket", "Firearms", "Manual", "Air Gun", "Blowgun", "Blunderbuss", "Carbine", "Spencer Carbine", "Gatling Gun", "Handgun", "Pistol", "Revolver", "Derringer", "Harquebus", "Musket", "Rifle", "Dreyse Rifle", "Lee-Enfield Rifle", "Mauser Rifle", "Springfield Rifle", "Shotgun", "Handgun", "Pistol", "Semiauto Pistol", "Luger Pistol", "Revolver", "Rifle", "Sarcasm"];


// Fighter Assignment
$(document).ready(function () {
    $('#restart').click(function () {
        document.location.reload(true);       //Reload Page
    });
    $('#formOne').submit(function () {
        event.preventDefault();       
       // $("#output").hide();
        // $("#winner").hide();
        var warriorCount;
        warriorCount = parseInt($('#warriorCount').val());
        console.log(`Warrior count is ${warriorCount}`);
        var warriors = [];
        var battleRecordArray = [];
        let numberOfPairings = 0;
        let tmpVariableName = "";
        let objectCharacter = new Character("name", "weapon", 1, 20, 0);
        let tmpStrength = 0;
        let tmpFighterName = "";
        let tmpWeapon = "";
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
            //console.log(`Random numbers are ::${randomNumbers}`);
            let fight = new Fight();
            var tempFighter1 = warriors[randomNumbers[0]];
            var tempFighter2 = warriors[randomNumbers[1]];
            var loser = fight.battle(tempFighter1, tempFighter2);
            //console.log("Starting battle between " + tempFighter1.name + " and " + tempFighter2.name);
            numberOfPairings++;
            let battleRecord = new BattleRecord();
            battleRecord.battleCount = numberOfPairings;
            battleRecord.warriorObject1 = tempFighter1;
            battleRecord.warriorObject2 = tempFighter2;
            if (loser !== false) {
                loser.loserStatus = false;
                battleRecord.result = loser.name;
                console.log("Loser is " + loser.name);
            }
            else if (loser === false) {
                battleRecord.result = "Draw";
                console.log("Battle was a DRAW");
            }
            var removed;
            //console.log("Length of Warrior array before splicing is " + warriors.length + " and should be " + warriorCount);
            for (let i = 0; i < warriors.length; i++) {
                //console.log("We're printing the ith warriors name: " + warriors[i].name);
                if (warriors[i].name === loser.name) {
                    warriors[i].loserStatus = true;
                    //console.log("SPLICING: Warrior name matched: " + warriors[i].name + " and index i " + i);
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
            battleRecordArray.push(battleRecord);
            //console.log(`battleRecord length is ${battleRecordArray.length}`);
        }
        console.log(`Winner is ${warriors[0].name} with health ${warriors[0].health}`);
        //console.log(`battleRecord length is ${battleRecordArray.length}`);
        for (let m = 0; m < battleRecordArray.length; m++) {
            let temp3New = battleRecordArray[m].battleCount + ":" + battleRecordArray[m].warriorObject1.name + ":" + battleRecordArray[m].warriorObject1.weapon + ":" + battleRecordArray[m].warriorObject1.level + ":" + battleRecordArray[m].warriorObject1.health + ":" + battleRecordArray[m].warriorObject1.winCount + ":" + battleRecordArray[m].warriorObject1.strength + ":" + battleRecordArray[m].warriorObject1.loserStatus + ":" + battleRecordArray[m].warriorObject2.name + ":" + battleRecordArray[m].warriorObject2.weapon + ":" + battleRecordArray[m].warriorObject2.level + ":" + battleRecordArray[m].warriorObject2.health + ":" + battleRecordArray[m].warriorObject2.winCount + ":" + battleRecordArray[m].warriorObject2.strength + ":" + battleRecordArray[m].warriorObject2.loserStatus + ":" + battleRecordArray[m].result;
            console.log(`temp3New ${temp3New}`);
        }
        //$("ul#fighter").empty().append("<li></li>");
        battleRecordArray.forEach(function (battle) {
            let test = "";
            if (battle.result !== "Draw") {
                test = `<b>Battle # </b><span class="greyColor">${battle.battleCount}</span>: <span class="greyColor"> ${battle.warriorObject1.name} </span> (<b>Weapon</b>: <span class="greyColor">${battle.warriorObject1.weapon}</span>)<b> Vs. </b><span class="greyColor">${battle.warriorObject2.name}</span> (<b>Weapon</b>: <span class="greyColor">${battle.warriorObject2.weapon}</span>) whose <b>Health #</b>'s were <span class="greyColor">${battle.warriorObject1.health}</span> and <span class="greyColor">${battle.warriorObject2.health}</span>. <b>Loser</b> was <span class="greyColor">${battle.result}</span>`
            }
            else {
                test = `<b>Battle # </b><span class="greyColor">${battle.battleCount}</span>: <span class="greyColor"> ${battle.warriorObject1.name} </span> (<b>Weapon</b>: <span class="greyColor">${battle.warriorObject1.weapon}</span>)<b> Vs. </b><span class="greyColor">${battle.warriorObject2.name}</span> (<b>Weapon</b>: <span class="greyColor">${battle.warriorObject2.weapon}</span>) whose <b>Health #</b>'s were <span class="greyColor">${battle.warriorObject1.health}</span> and <span class="greyColor">${battle.warriorObject2.health}</span>. <b>Result</b> was a <span class="greyColor">${battle.result}</span>`
            }
            $("ul#fighter").append("<li>" + test + "</li>");
        });
        $("#output").hide().show();
        $("#dropDownSel").empty().append(warriorCount);
        $("#coralColor").empty().append(warriors[0].name);
        $("#coralColor2").empty().append(warriors[0].health);
        battleRecordArray = [];
        warriors = [];
        
        //console.log("warrior legnth:battleRecordArray length::" + warriors.length + ":" + battleRecordArray.length);

    });
});


