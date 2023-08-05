
let cart = 0;

function Index() {
	window.location = '/';
}


function Click() {
	var all = document.getElementById('2').innerHTML;
	if ( all === "HA!!! I Rick Rolled you!!!") {
	  const button = document.getElementById("2").innerHTML = "I bet you can't rickroll me!!!'";
	}
	if ( all === "THIS IS NOOOO GAME! STOP CLICKING ME!!!!!") {
		const linkUrl = "https://www.youtube.com/watch?v=xvFZjo5PgG0"; // Replace with the URL you want to open in a new tab
	  window.open(linkUrl, "_blank");
	  const button = document.getElementById("2").innerHTML = "HA!!! I Rick Rolled you!!!";
	}
	if ( all === "Why did you click this?!") {
		const button = document.getElementById("2").innerHTML = "THIS IS NOOOO GAME! STOP CLICKING ME!!!!!";
	}
	if ( all === "I'm not sure you want to click on this...") {
		const button = document.getElementById("2").innerHTML = "Why did you click this?!";
	
	}
	
}

function add() {
	cart = (cart + 1);
	const button = document.getElementById("car").innerHTML = "Cart: " + cart;
}

function shop() {
	window.location = '/Cart'
}