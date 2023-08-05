function Alert() {
	alert ("a hacker wants to take over your device");
	confirm ("Is This Ok");
	prompt ("Good", "Enter Your ID");
	prompt ("Please Enter Your Real ID", "");
	alert ("thank you very much");
}

function explosion() {
	const video = document.getElementById("myVideo");
	video.classList.remove("hidden"); // Show the video element
	video.play()
	 video.addEventListener("ended", () => {
		video.classList.add("hidden"); // Hide the video element when playback ends
	 });
}
function Shop() {
	window.location = '/Shop'
}
// Get references to the button and video container

document.addEventListener("DOMContentLoaded", function(){
    //....
	const showVideoButton = document.getElementById("show");
	const videoContainer = document.getElementById("videoContainer");

	// Add a click event listener to the button
	showVideoButton.addEventListener("click", function() {
		// Toggle the visibility of the video container
		videoContainer.style.display = (videoContainer.style.display === "none") ? "block" : "none";
	});
});