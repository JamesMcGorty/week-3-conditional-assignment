// JavaScript Document
//James McGorty
//3/20/14
//conditional personal

//this calculator is to find out how much you should tip someone

var bill = prompt("Please enter your the amount of your bill ");
var tax = prompt("Please enter the tax rate " , .075);
var tip = prompt("Please enter how your service was, exellent, good, bad ");

//sales tax is the item cost * .075
var billWithTax = bill * tax
var tipAdded = "please choose a selection"


// how much to tip 20% exellent 15% good 10% bad

if (tip == "exellent")
	tipAdded = (billWithout * .2);
else if (tip == "good")
	tipAdded = billWithout * .15;
else if (tip == "bad")
tipAdded = billWithout * .1;

document.write("the bill is" + bill)
document.write("with tax added" + billWithTax)
document.write("bill with tip" + tipAdded)
