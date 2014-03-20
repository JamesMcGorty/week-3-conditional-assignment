// JavaScript Document
//James McGorty
//3/20/14
//conditional personal

//this calculator is to find out how much you should tip someone

var bill = parseFloat(prompt("Please enter your the amount of your bill "));
var tax = parseFloat(prompt("Please enter the tax rate " , .075));
var tip = prompt("Please enter how your service was, exellent, good, bad ", "");

//sales tax is the item cost * .075
//how much to tip exellent %20 good %15 bad %10

var taxAmt = bill * tax;
console.log("billTax " + taxAmt);

var billWithTax = bill + taxAmt;
console.log("billWithTax " + billWithTax);

// how to calculate how much the tip is

var tipAmt = 0.0;
if (tip == "exellent")
	tipAmt =  billWithTax * .2;
else if (tip == "good")
	tipAmt =  billWithTax * .15;
else if (tip == "bad")
	tipAmt =  billWithTax * .1;
console.log("tip " + tipAmt)

var billWithTaxAndTip = billWithTax + tipAmt;
console.log("billWithTaxAndTip " + billWithTaxAndTip);

document.write("the bill is $" + bill.toFixed(2) +"<br>" )
document.write(" with tax (" + taxAmt + ") added $" + billWithTax.toFixed(2) + "<br>" )
document.write(" bill with tip (" + tipAmt + ") added $" + billWithTaxAndTip.toFixed(2) )
