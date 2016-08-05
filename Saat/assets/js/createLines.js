var lines = [];
var main = document.getElementById("main");

function CreateLines() {
	for (i = 0; i < 60; i++) {
		lines[i] = document.createElement("DIV");
		if (!(i%5)) {
			lines[i].setAttribute("class", "bigLine");
		}
		else {
			lines[i].setAttribute("class", "smallLine");
		}
		lines[i].style.transform = "rotate(" + i*6 + "deg)";
		if (i < 30) {
			lines[i].style.top = 20*i + "px";
			if (i < 15) {
				lines[i].style.left = i * 20 + "px";
			}
			else {
				lines[i].style.left = ((30 - i) * 20) + "px";
			}
		}
		else {
			lines[i].style.top = (60 - i) * 20 + "px";
			if (i <= 45) {
				lines[i].style.left = ((30 - i) * 20) + "px";
			}
			else {
				lines[i].style.left = ((60 - i) * (-20)) + "px"; 
			}
		}
		// lines[i].style.left = "" + 5 + "px";
		main.appendChild(lines[i]);
	}
}

CreateLines();