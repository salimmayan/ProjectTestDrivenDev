export class LifeExpectancy {  //when below fucn is called via object, the object properties shall contain LE values for all countries on all planets
    constructor(american, canadian, mexican, cuban) {
        this.american = american;
        this.canadian = canadian;
        this.mexican = mexican;
        this.cuban = cuban;
    }

    lifeExpAllRaceAllPlanet(sex, constLifeExp, planetsConvFactor) { // Life exp for ONE demographics on A;; planets
        let lifeExpCorrection = 0;	//const?	
        if (sex === "female") {
            lifeExpCorrection += 7;
        }
        for (let country = 0; country < constLifeExp.length; country++) { //take one demographic (constLifeExp) and find life exp for each planet (planetsConvFactor)
            let oneRaceAllPlanetLifeExp = [];
            for (let planet = 0; planet < planetsConvFactor.length; planet++) { //		
                oneRaceAllPlanetLifeExp.push(Math.floor((constLifeExp[country] + lifeExpCorrection) / planetsConvFactor[planet]));
            }
            switch (country) {
                case 0:
                    this.american = oneRaceAllPlanetLifeExp;
                    console.log(`In case 0 of Switch statement ${this.american}`);
                    break;
                case 1:
                    this.canadian = oneRaceAllPlanetLifeExp;
                    console.log(`In case 1 of Switch statement ${this.canadian}`);
                    break;
                case 2:
                    this.mexican = oneRaceAllPlanetLifeExp;
                    console.log(`In case 2 of Switch statement ${this.mexican}`);
                    break;
                case 3:
                    this.cuban = oneRaceAllPlanetLifeExp;
                    console.log(`In case 3 of Switch statement ${this.american}`);
                    break;
            }
        }
        return LifeExpectancy;
    }
    
}


