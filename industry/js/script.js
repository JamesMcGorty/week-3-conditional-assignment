// JavaScript Document
//James McGorty
//3/19/14
//conditions industryassingment

// this will calculate how many pixels and in one inch on your computer screen
// resolution size width / screen size width * resolution height / screen height = how many how many pixles are in one inch of your screen

var screenRezHeight = prompt("Please enter your screens height resolution ");
var screenRezWidth = prompt("Please enter your screen width resolution ");
var screenSizHeight = prompt("Please enter how many inches you screens height is ");
var screenSizWidth = prompt("Please enter how many inches your screens width is ");

// Handle both pos and neg numbers
if (screenRezHeight < 0)
	screenRezHeight *= -1;
if (screenRezWidth < 0)
	screenRezWidth *= -1;
if (screenSizHeight < 0)
	screenSizHeight *= -1;
if (screenSizWidth < 0)
	screenSizWidth *= -1;
	
		
var height = screenRezHeight / screenSizHeight;
var width = screenRezWidth / screenSizWidth;
var howMany = height * width

document.write("Your screen has " + howMany + " pixels in an inch");
