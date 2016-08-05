var main = document.getElementById("main");

function CreateArrow() {
	var secArrow = document.createElement("DIV");
	secArrow.setAttribute("class", "secArrow");
	main.appendChild(secArrow);

	var minArrow = document.createElement("DIV");
	minArrow.setAttribute("class", "minArrow");
	main.appendChild(minArrow);

	var hrArrow = document.createElement("DIV");
	hrArrow.setAttribute("class", "hrArrow");
	main.appendChild(hrArrow);


}

CreateArrow();