// JavaScript Document
//james mcgorty
//3/20/14
//conditions wacky 

//how much it will cost getting gas and if you want a car wash

var gallons = prompt("How many gallons will you pump?");
var gallonPrice = prompt("How much does a gallon cost?");
var carWash = prompt("would you like a car wash? Yes or No");

// cost of  gas for your car
var bCarWash = carWash == "Yes" ? true : false;
var nCarWashCost = 8.00;
var nTotalCost = gallons * gallonPrice;

console.log(nTotalCost);

if (bCarWash)
	nTotalCost += nCarWashCost;

console.log(nTotalCost);

var sMessage = bCarWash ? "The price for your gas and wash is $" : "The price for your gas is $";

document.write( sMessage + nTotalCost);

