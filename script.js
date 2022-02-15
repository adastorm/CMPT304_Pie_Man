//add event listener for keydown event that calls changeImage
document.addEventListener("keydown", changeImage, false);

//setInterval for 100 miliseconds to move pieman by 10px
var timeOutVariable = window.setInterval(startMotion, 25);

/*GLOBAL VARIABLES FOR PIEMAN MOTION*/
var x = 50; //keeps track Pieman's left position
var y = 0;


var direction = 0;
//        up
//		   2
//left -1  0  1 right
//		  -2
//       down

var animationFrame = 1;
var animationIncreacing = true;
var pm = document.getElementById("Pieman");



//create function changeImage(event) to respond to an arrow key direction that will change Pieman's image to the correspond to the key pressed
function changeImage(event) {
	//add event listener to Pieman that will close pieman's mouth on click
	if (event.key == "ArrowLeft") {
		// pm.setAttribute("src", "images/Left01.PNG");
		pm.setAttribute("alt", "Pieman facing left");
		direction = -1;
	}
	if (event.key == "ArrowRight") {
		// pm.setAttribute("src", "images/Right01.PNG");
		pm.setAttribute("alt", "Pieman facing right");
		direction = 1;
	}
	if (event.key == "ArrowUp") {
		// pm.setAttribute("src", "images/Up01.PNG");
		pm.setAttribute("alt", "Pieman facing up");
		direction = 2;
	}
	if (event.key == "ArrowDown") {
		// pm.setAttribute("src", "images/Down01.PNG");
		pm.setAttribute("alt", "Pieman facing down");
		direction = -2;
	}
}

//create function startMotion() that will move pieman by 10px to right (for now)
function startMotion() {
	pm.style.position = "absolute";

	updateFrame();
	if (direction == 1 && x + 90 <= window.innerWidth) {
		x += direction * 10;
	}
	if (direction == -1 && x - 10 >= 0) {
		x += direction * 10;
	}
	if (direction == 2 && y - 10 > 0) {
		y += direction * -5;
	}
	if (direction == -2 && y + 90 < window.innerHeight) {
		y += direction * -5;
		
	}
	pm.style.left = x + "px";
	pm.style.top = y + "px";
}


function updateFrame()
{

	let name = "images/";
	switch (direction) {
		case -1:
			name += "Left";
			break;
		case 1:
			name += "Right";
			break;
		case -2:
			name += "Down";
			break;
		case 2:
			name += "Up";
			break;
		case 0:
			break;
	}

	if (direction == 0) pm.setAttribute("src", "images/stopped.PNG");
	else {
		if (animationFrame >= 12) animationIncreacing = false;
		if (animationFrame <= 1) animationIncreacing = true;
	
		name += "" + animationFrame + ".PNG";
		console.log(name);
		pm.setAttribute("src", name);

		if (animationIncreacing) animationFrame++;
		else animationFrame--;
	}
}
 