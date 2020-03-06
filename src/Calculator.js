export class Calculator {
    constructor() {
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


    yearsRemaining(currentAge, lifeExpectancy) {// array will have age for 5 planets for asian liek me
        let yearsLeft = [];
        let planetsAgeArray = [];
        planetsAgeArray = this.ageOnPlanets(currentAge);
        if (planetsAgeArray[2] > lifeExpectancy[2]) { //age greater then LE
            for (let planetAge = 0; planetAge < planetsAgeArray.length; planetAge++) {
                yearsLeft.push(planetsAgeArray[planetAge] - lifeExpectancy[planetAge]);
            }
        }
        else if (planetsAgeArray[2] < lifeExpectancy[2]) { //age less then LE
            for (let planetAge = 0; planetAge < planetsAgeArray.length; planetAge++) {
                yearsLeft.push(planetsAgeArray[planetAge] - lifeExpectancy[planetAge]); //-ve values
            }
        }
        if (planetsAgeArray[2] === lifeExpectancy[2]) { //age equal to LE
            for (let planetAge = 0; planetAge < planetsAgeArray.length; planetAge++) {
                yearsLeft.push(planetsAgeArray[planetAge] - lifeExpectancy[planetAge]);
            }
        }
        return yearsLeft;

    }

}


