var spin = document.getElementById("spin");
spin.addEventListener("click", run);

var wheel = document.getElementById("wheel");

var count = 1;
var points = 100;

var result = document.getElementById("points");
result.innerHTML = "YOUR POINT: " + points;

function Rotate() {
	console.log(numbOfTurns);
	if (count < numbOfTurns) {
		count ++;
	}
	else {
		stop();
	}

	wheel.style.transform = "rotate(" + 18 * count + "deg)";
}

function run() {
	points -= 15;
	result.innerHTML = "YOUR POINT: " + points;
	numbOfTurns = Math.floor(Math.random() * 38 + 19);
	// numbOfTurns = 5;
	count = 1;
	interval = setInterval(Rotate, 50);
}

function stop() {
	clearInterval(interval);
	calculatePoints();
}

function calculatePoints() {
	//GIFT
	if (!(numbOfTurns % 20)) {
		console.log("YOU GOT A GIFT");
		points += 115;
	}
	//DOUBLE
	else if (numbOfTurns == 26 || numbOfTurns == 32 || numbOfTurns == 36 ||
		numbOfTurns == 46 || numbOfTurns == 52 || numbOfTurns == 56) {
		console.log("YOU GOT DOUBLE");
		points += 15;
		points *= 2;
	}
	else if (!(numbOfTurns % 2)) {
		console.log("SAFE");
		points += 15;
	}
	else {
		console.log("LOSE");
	}
	if (points <= 0) {
		alert("YOU LOST ALL MONEY!");
		points = 0;
	}
	result.innerHTML = "YOUR POINT: " + points;
}