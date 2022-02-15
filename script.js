//add event listener for keydown event that calls changeImage
document.addEventListener("keydown", changeImage, false);

//setInterval for 100 miliseconds to move pieman by 10px
var timeOutVariable = window.setInterval(startMotion, 25);

/*GLOBAL VARIABLES FOR PIEMAN MOTION*/
var x = 0; //keeps track Pieman's left position



var direction = 1;
//        up
//		   2
//left -1  0  1 right
//		  -2
//       down

var animationFrame = 0;

var pm = document.getElementById("Pieman");



//create function changeImage(event) to respond to an arrow key direction that will change Pieman's image to the correspond to the key pressed
function changeImage(event) {
	//add event listener to Pieman that will close pieman's mouth on click
	if (event.key == "ArrowLeft") {
		pm.setAttribute("src", "images/Left01.PNG");
		pm.setAttribute("alt", "Pieman facing left");
		direction = -1;
	}
	if (event.key == "ArrowRight") {
		pm.setAttribute("src", "images/Right01.PNG");
		pm.setAttribute("alt", "Pieman facing right");
		direction = 1;
	}
	if (event.key == "ArrowUp") {
		pm.setAttribute("src", "images/Up01.PNG");
		pm.setAttribute("alt", "Pieman facing up");
		direction = 2;
	}
	if (event.key == "ArrowDown") {
		pm.setAttribute("src", "images/Down01.PNG");
		pm.setAttribute("alt", "Pieman facing down");
		direction = -2;
	}
}

//create function startMotion() that will move pieman by 10px to right (for now)
function startMotion() {
	pm.style.position = "absolute";

	updateFrame();
	if (direction == -1 || direction == 1){
		if (x + 90 > window.innerWidth && direction == 1)
			direction = 0;
		else if (x - 10 < 0 && direction == -1)
			direction = 0;
		else {
			x += direction * 10;
			pm.style.left = x + "px";
		}
	}
}


function updateFrame()
{
	let name = "images/";
	switch (direction) {
		case -1:
			name += ""
			break;
	
		default:
			break;
	}
}
 