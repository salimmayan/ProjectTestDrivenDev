$(document).ready(function() {
	$('#formOne').submit(function() {
		const sideOne = parseInt($('#sideOne').val());
		const sideTwo = parseInt($('#sideTwo').val());
    const sideThree = parseInt($('#sideThree').val());

        
    const sumOfFirstTwo = sideOne + sideTwo;
    const sumOfLastTwo = sideTwo + sideThree;
    const sumOfFirstLast = sideOne + sideThree;
    const sumOfSides = sideOne + sideTwo + sideThree;


    if (sumOfFirstTwo <= sideThree || sumOfLastTwo <= sideOne || sumOfFirstLast <= sideTwo){
      alert('not a triangle');
    } else if ((sideOne === sideTwo) && (sideOne === sideThree)) 
    {
      alert('equilateral');
    } else if((sideOne / sideTwo === 1 || sideTwo / sideThree === 1 || sideOne / sideThree === 1)){
      alert('isosceles triangle')
    } else {
        alert('scalene triangle')
      }

    
    

		event.preventDefault();
	});
});
