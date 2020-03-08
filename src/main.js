import { Calculator } from '../src/Calculator.js';
import { LifeExpectancy } from '../src/LifeExpectancy.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// Everything below this line is the user interface (or front-end) logic:
$(document).ready(function () {
    $('#restart').click(function () {
        document.location.reload(true);       //Reload Page
    });
    $('#formOne').submit(function () {
        event.preventDefault();
        $("#toppingsDiv").hide();
        const planetsConvFactor = [0.24, 0.62, 1.00, 1.88, 11.86];
        const constLifeExp = [65, 70, 65, 64]; //assumed values based on Demographic
        let userEnteredAge = parseInt($("#age").val());
        let userEnteredSex = $(".sex").val();
        let userEnteredDemographic = $(".demographic").val();
        $('input[type="number"], textarea').val('');  // to clear form of entered value after submit
        //console.log(`userEnteredAge:userEnteredSex:userEnteredDemographic:::${userEnteredAge}:${userEnteredSex}:${userEnteredDemographic}`);
        let calculator = new Calculator(0, 0, 0, 0, 0);
        let lifeExpectancy = new LifeExpectancy([11, 12, 13], [14, 15, 16], [17, 18, 19], [20, 21, 22]);
        let planetAgeArray = [];
        let yearsLeft = [];
        planetAgeArray = calculator.ageOnPlanets(userEnteredAge, planetsConvFactor);
        //console.log(`planet age array is ${planetAgeArray}`);
        lifeExpectancy.lifeExpAllDemoAllPlanet(userEnteredSex, constLifeExp, planetsConvFactor);
        //console.log(`life expenctancy of ${userEnteredDemographic}::::${lifeExpectancy[userEnteredDemographic]}`);
        let lifeExpOneDemoAllPlanet = [];
        lifeExpOneDemoAllPlanet = lifeExpectancy[userEnteredDemographic];
        //console.log(`for user entered demo userEnteredDemographic lifeExpOneDemoAllPlanet  is ${lifeExpOneDemoAllPlanet}`);
        yearsLeft = calculator.yearsRemaining(userEnteredAge, lifeExpectancy[userEnteredDemographic], planetsConvFactor);
        //console.log(`years left is ${yearsLeft}`);
        const demoNameCapitalized = userEnteredDemographic.charAt(0).toUpperCase() + userEnteredDemographic.slice(1);
        const SexCapitalized = userEnteredSex.charAt(0).toUpperCase() + userEnteredSex.slice(1);
        let yearsLeftSyntax = `<span class="greyColor">${userEnteredAge}</span> : <span class="greyColor">${SexCapitalized}</span> : <span class="greyColor">${demoNameCapitalized}</span>`;
        $("#ageDemoSex").empty().append(yearsLeftSyntax);
        $("ul#agePerPlanet").html(''); // to clear UL list from previous round of append
        let currentPlanet;
        let currentLE;
        let currentAge;
        let textYearsLeft;
        for (let planet = 0; planet < planetAgeArray.length; planet++) {
            switch (planet) {
                case 0:
                    currentPlanet = "Mercury";
                    currentLE = lifeExpOneDemoAllPlanet[planet];
                    currentAge = planetAgeArray[planet];
                    break;
                case 1:
                    currentPlanet = "Venus";
                    currentLE = lifeExpOneDemoAllPlanet[planet];
                    currentAge = planetAgeArray[planet];
                    break;
                case 2:
                    currentPlanet = "Earth";
                    currentLE = lifeExpOneDemoAllPlanet[planet];
                    currentAge = planetAgeArray[planet];
                    break;
                case 3:
                    currentPlanet = "Mars";
                    currentLE = lifeExpOneDemoAllPlanet[planet];
                    currentAge = planetAgeArray[planet];
                    break;
                case 4:
                    currentPlanet = "Jupiter";
                    currentLE = lifeExpOneDemoAllPlanet[planet];
                    currentAge = planetAgeArray[planet];
                    break;
            }
            let textYourAge = `Your Age in <span class="coralColor">${currentPlanet}</span> is <span class="coralColor">${planetAgeArray[planet]}</span>`;
            if ((currentAge - currentLE) > 0) {
                textYearsLeft = ` (<span class="blueColor">Estimated Life Expectancy</span> based on <span class="goldColor">Gender/Demographic</span>: <span class="coralColor">${currentLE}</span>. Years lived beyond Expiry date: <span class="coralColor">${currentAge - currentLE}</span)`;
            }
            else if ((currentAge - currentLE) < 0) {
                var negPos = Math.abs(currentAge - currentLE);
                textYearsLeft = ` (<span class="blueColor">Estimated Life Expectancy</span> based on <span class="goldColor">Gender/Demographic</span>: <span class="coralColor">${currentLE}</span>. Years left to live: <span class="coralColor">${negPos}</span>)`;
            }
            else if ((currentAge - currentLE) === 0) {
                textYearsLeft = ` (<span class="blueColor">Estimated Life Expectancy</span> based on <span class="goldColor">Gender/Demographic</span>: <span class="coralColor">${currentLE}</span>. Regret to inform you will kick the bucket someday this year)`;
            }
            $("ul#agePerPlanet").append("<li>" + textYourAge + textYearsLeft + "</li>");
        }
        $("#output").hide().show();
    });
});