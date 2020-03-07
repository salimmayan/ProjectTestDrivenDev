export class Calculator {
    constructor(ageOnMercury, ageOnVenus, ageOnEarth, ageOnMars, ageOnJupiter) {
        this.ageOnMercury = ageOnMercury;
        this.ageOnVenus = ageOnVenus;
        this.ageOnEarth = ageOnEarth;
        this.ageOnMars = ageOnMars;
        this.ageOnJupiter = ageOnJupiter;

    }
    ageOnPlanets(userInputAge, planetsConvFactor) {
        let ageOnMercury = (Math.floor(userInputAge / planetsConvFactor[0]));
        let ageOnVenus = (Math.floor(userInputAge / planetsConvFactor[1]));
        let ageOnEarth = (Math.floor(userInputAge / planetsConvFactor[2]));
        let ageOnMars = (Math.floor(userInputAge / planetsConvFactor[3]));
        let ageOnJupiter = (Math.floor(userInputAge / planetsConvFactor[4]));
        let planetAgeArray = [];
        planetAgeArray.push(ageOnMercury, ageOnVenus, ageOnEarth, ageOnMars, ageOnJupiter);
        return planetAgeArray;
    }


    yearsRemaining(currentAge, lifeExpectancy, planetsConvFactor) {// array will have age for 5 planets for asian like me
        let yearsLeft = [];
        let planetsAgeArray = [];
        planetsAgeArray = this.ageOnPlanets(currentAge, planetsConvFactor);
        console.log(`Inside yearsReamining: planetsAgeArray is ${planetsAgeArray}`);
        if (planetsAgeArray[2] > lifeExpectancy[2]) { //age greater then LE
            for (let planetAge = 0; planetAge < planetsAgeArray.length; planetAge++) {
                yearsLeft.push(lifeExpectancy[planetAge] - planetsAgeArray[planetAge]); 
            }
        }
        else if (planetsAgeArray[2] < lifeExpectancy[2]) { //age less then LE
            for (let planetAge = 0; planetAge < planetsAgeArray.length; planetAge++) {
                yearsLeft.push(lifeExpectancy[planetAge] - planetsAgeArray[planetAge]);  //-ve values
            }
        }
        if (planetsAgeArray[2] === lifeExpectancy[2]) { //age equal to LE
            for (let planetAge = 0; planetAge < planetsAgeArray.length; planetAge++) {
                yearsLeft.push(lifeExpectancy[planetAge] - planetsAgeArray[planetAge]); 
            }
        }
        return yearsLeft;

    }

}


