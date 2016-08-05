var secArrow = document.getElementsByClassName("secArrow")[0];
var minArrow = document.getElementsByClassName("minArrow")[0];
var hrArrow = document.getElementsByClassName("hrArrow")[0];

var secCount = 0;
var minCount = 0;
var hrCount = 0;

function RunSec() {
	if (secCount < 60) {
		secCount++;
	}
	else {
		secCount = 0;
	}
	secArrow.style.transform = "rotate(" + secCount*6 + "deg)";
}

function RunMin() {
	if (minCount < 60) {
		minCount++; 
	}
	else {
		minCount = 0;
	}
	minArrow.style.transform = "rotate(" + minCount*6 + "deg)";
}

function RunHr() {
	if (hrCount < 60) {
		hrCount++; 
	}
	else {
		hrCount = 0;
	}
	hrArrow.style.transform = "rotate(" + hrCount*6 + "deg)";
}

setInterval(RunSec, 1000);
setInterval(RunMin, 60000);
setInterval(RunHr, 3600000);