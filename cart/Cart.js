
function video() {
	const linkUrl = "https://www.youtube.com/watch?v=o9plP_RSC8U"; // Replace with the URL you want to open in a new tab
		window.open(linkUrl, "_blank");
}
function smart() {
	const linkUrl = "https://www.youtube.com/watch?v=6BrZryMz-ac"; // Replace with the URL you want to open in a new tab
		window.open(linkUrl, "_blank");
}
function change() {
	var all = document.getElementById('AAA').innerHTML;
	if ( all === "..") {
		const linkUrl = "https://www.youtube.com/watch?v=2McN9qOw8t4"; // Replace with the URL you want to open in a new tab
	  window.open(linkUrl, "_blank");
	  const button = document.getElementById("AAA").innerHTML = "HA!!! I Rick Rolled you!!!";
	}
	if ( all === "... ") {
		const button = document.getElementById("AAA").innerHTML = "..";
	}
	if ( all === "...") {
		const button = document.getElementById("AAA").innerHTML = "... ";
	}
	if ( all === "DON'T EVEN THINK ABOUT Hi...") {
		const button = document.getElementById("AAA").innerHTML = "...";
	}
	if ( all === "He is DANGEROUISSSS!!!") {
		const button = document.getElementById("AAA").innerHTML = "DON'T EVEN THINK ABOUT Hi...";
	}
	if ( all === "Let Me Tell You About Tiny Tim...") {
		const button = document.getElementById("AAA").innerHTML = "He is DANGEROUISSSS!!!";
	}
	if ( all === "Well Hello!") {
		const button = document.getElementById("AAA").innerHTML = "Let Me Tell You About Tiny Tim...";
	}
	if ( all === "Hello") {
		const button = document.getElementById("AAA").innerHTML = "Well Hello!";
	
	}
}

function ispalidrone (x){
	let i = 0;
	const stringArray = x.toLowerCase().split(''); // ['b', 'o', 'b']
	while (i <= stringArray.length/2) {
		if (stringArray[i] === stringArray[stringArray.length-(i + 1)]) {
			console.log(stringArray[i])
			i++
		} else {
			console.log('false')
			return
		}
	}
	console.log('true')
}

ispalidrone ('Rotavator');