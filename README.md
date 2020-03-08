# Super Galactic Age Calculator
#### A web application that will take a person’s _Age_ in years, _Gender_, and _Demographic_ and return various attributes of Age relative to other planets. A TDD spec was committed _before_ writing associated method thus ensuring adherence to the _Red, Green, Refactor_ workflow. At least one test was created for each spec and no test had more than one expectation. Application returns the following ...
-  Age in `Mercury years`
-  Age in `Venus years`
-  Age in `Mars years`
-  Age in `Jupiter years`
-  How many `years a user has left to live` on each planet (including `Earth`). This is calculated based on user’s estimated `Life Expectancy` which in turn is calculated based on two pieces of information collected from user (`Gender`, and `Demographic`). This spawns 3 cases ..
	- If user has already surpassed the estimated `Life Expectancy`, return the number of `years user has lived past` the estimated `Life Expectancy`.
	- If user hasn't surpassed the estimated `Life Expectancy`, return the number of years `left to live`
	- If user's `current age` is `exactly equal` to estimated` Life Expectancy`, gently inform on `impending death`

##### Date: **03/07/2020**

#### By **Salim Mayan**
  
## Description    
#### Further Exploration
##### Added additional features:

-  Added UI to application.
-  Included a `Refresh` should the user wish to refresh page

_**Example:**_ If a user enter Age in Mandatory `Age` field, choose `Gender'`as `Male`from drop down, choose `Demographic'`as `American`from drop down, and `Submit`, the program shall display below content

### For your chosen  `Earth Age` : `Gender` : `Demographic` : : : `45`  :  `Male`  :  `American`

> -   Your Age in  `Mercury`  is  `187`  (Estimated `Life Expectancy`  based on  Gender/Demographic:  `270`. `Years left to live`:  `83`)
> -   Your Age in  `Venus`  is  `72`  (Estimated `Life Expectancy`  based on  Gender/Demographic:  `104`. `Years left to live`:  `32`)
> -   Your Age in  `Earth`  is  `45`  (Estimated `Life Expectancy`  based on  Gender/Demographic:  `65`. `Years left to live`:  `20`)
> -   Your Age in  `Mars`  is  `23`  (Estimated `Life Expectancy`  based on  Gender/Demographic:  `34`. `Years left to live`:  `11`)

_**Example:**_ If a user enter Age in Mandatory `Age` field, choose `Gender'`as `Male`from drop down, choose `Demographic'`as `American`from drop down, and `Submit`, the program shall display below content

### For your chosen  `Earth Age` : `Gender` : `Demographic` : : : `65`  :  `Male`  :  `American`

> -   Your Age in  `Mercury`  is  `270`  (Estimated `Life Expectancy`  based on  Gender/Demographic:  `270`. Regret to inform you will `kick the bucket` someday this year)
> -   Your Age in  `Venus`  is  `104`  (Estimated `Life Expectancy`  based on  Gender/Demographic:  `104`. Regret to inform you will `kick the bucket` someday this year)
> -   Your Age in  `Earth`  is  `65`  (Estimated `Life Expectancy`  based on  Gender/Demographic:  `65`. Regret to inform you will `kick the bucket` someday this year)
> -   Your Age in  `Mars`  is  `34`  (Estimated `Life Expectancy`  based on  Gender/Demographic:  `34`. Regret to inform you will `kick the bucket` someday this year)
> -   Your Age in  `Jupiter`  is  `5`  (Estimated `Life Expectancy`  based on  Gender/Demographic:  `5`. Regret to inform you will `kick the bucket` someday this year)

### For your chosen  `Earth Age` : `Gender` : `Demographic` : : : `87`  :  `Male`  :  `American`

> -   Your Age in  `Mercury`  is  `362`  (Estimated Life Expectancy  based on  Gender/Demographic:  `270`. Years lived beyond `Expiry date`:  `92`
> -   Your Age in  `Venus`  is  `140`  (Estimated Life Expectancy  based on  Gender/Demographic:  `10`4. Years lived beyond `Expiry date`:  `36`
> -   Your Age in  `Earth`  is  `87`  (Estimated `Life Expectancy`  based on  Gender/Demographic:  `65`. Years lived beyond `Expiry date`:  `22`
> -   Your Age in  `Mars`  is  `46`  (Estimated `Life Expectancy`  based on  Gender/Demographic:  `34`. Years lived beyond `Expiry date`:  `12`
> -   Your Age in  `Jupiter`  is  `7`  (Estimated `Life Expectancy`  based on  Gender/Demographic:  `5`. Years lived beyond `Expiry date`:  `2`

### Specs

| Spec | Input | Output |

| :------------- | :------------- | :------------- |

  
| **Homepage** | User accesses localhost:5500 | Homepage with user input form |

| ** Program will not accept empty Input in `Age` form**| Output: `Please fill out this field` |

## Setup/Installation Requirements
1. Clone this repository.
2. To run program, do `npm install' and "npm run start'

## Known Bugs

* No known bugs at this time.

## Technologies Used
* HTML
* CSS
* JQuery
* JS
* Bootstrap

## Support and contact details
_Email no one with any questions, comments, or concerns._

### License
*{This software is licensed under the MIT license}*
Copyright (c) 2020 **_{Salim Mayan}_**