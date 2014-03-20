// JavaScript Document
//James McGorty
//3/20/14
//conditional personal

//this calculator is to find out how much you should tip someone

var bill = parseFloat(prompt("Please enter your the amount of your bill "));
var tax = parseFloat(prompt("Please enter the tax rate " , .075));
var tip = prompt("Please enter how your service was, exellent, good, bad ", "");

console.log("bill " + bill);
console.log("tax " + tax );
console.log("tip " + tip );

//sales tax is the item cost * .075
//how much to tip exellent %20 good %15 bad %10

var billTax = bill * tax;
console.log("billTax " + billTax);

var billWithTax = bill + billTax;
console.log("billWithTax " + billWithTax);

var tipAdded = 0.0;


// how to calculate how much the tip is

if (tip == "exellent")
	tipAdded = billWithTax + (billWithTax * .2);
else if (tip == "good")
	tipAdded = billWithTax + (billWithTax * .15);
else if (tip == "bad")
	tipAdded = billWithTax + (billWithTax * .1);
console.log("tipAdded " + tipAdded)

document.write("the bill is $" + bill.toFixed(2) )
document.write(" with tax added $" + billWithTax.toFixed(2) )
document.write(" bill with tip $" + tipAdded.toFixed(2) )
