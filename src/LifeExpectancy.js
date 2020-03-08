export class LifeExpectancy {  //when below fucn is called via object, the object properties shall contain LE values for all countries on all planets
    constructor(american, canadian, mexican, cuban) {
        this.american = american;
        this.canadian = canadian;
        this.mexican = mexican;
        this.cuban = cuban;
    }

    lifeExpAllDemoAllPlanet(sex, constLifeExp, planetsConvFactor) { // Life exp for ONE demographics on A;; planets
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
                    break;
                case 1:
                    this.canadian = oneRaceAllPlanetLifeExp;
                    break;
                case 2:
                    this.mexican = oneRaceAllPlanetLifeExp;
                    break;
                case 3:
                    this.cuban = oneRaceAllPlanetLifeExp;
                    break;
            }
        }
        return LifeExpectancy;
    }
    
}


