var mileage = prompt("How many miles approximately do you drive per year?");

var gasPrice = prompt("What is the cost of one gallon of gas in your area?");


function annualVehicleCost(mpgRating) {
  var totalAnnualCost = mileage * gasPrice * mpgRating;
  document.querySelector(".totalCarGasExpense").innerHTML = ("The estimated annual cost of a vehicle with a mpg rating of " + mpgRating + " for " + mileage + " miles at " + gasPrice + " per gallon is " + totalAnnualCost + ".");
}

annualVehicleCost(12);

annualVehicleCost(17);

annualVehicleCost(26);

annualVehicleCost(29);