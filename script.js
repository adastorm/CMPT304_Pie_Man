//add event listener for keydown event that calls changeImage
document.addEventListener("keydown", changeImage, false);

//setInterval for 100 miliseconds to move pieman by 10px
var timeOutVariable = window.setInterval(startMotion, 25);

/*GLOBAL VARIABLES FOR PIEMAN MOTION*/
var x = 200; //keeps track Pieman's horizontal position
var y = 200; //Keeps track of Pieman Vertical Position

var score = 0;

var direction = 0;
//        up
//		   2
//left -1  0  1 right
//		  -2
//       down


//Animation Setup
var animationFrame = 1;
var animationIncreacing = true;
var pm = document.getElementById("Pieman");


//Arrays and stuff for teh pellets life
var pel = document.getElementById("PacDots");
var newTime = 300;
var numPellets = 0;
var pelletArray = [];


//Audio Setup
var death = document.getElementById("death");
var walk = document.getElementById("walk");
var gameOverPlayed = false;
walk.loop = true;
walk.play();

//Create the inition pellet
createPellet(newTime,numPellets);


//Function to create a new pellet and add it to the array
function createPellet(time, index) {
	//Create a structure for the array
	pelletArray[index] = {
		x: Math.floor(Math.random()* (window.innerWidth-200)),
		y: Math.floor(Math.random()* (window.innerHeight-200)),
		time: time,
		originalTime: time
	}
	numPellets++;
}



//create function changeImage(event) to respond to an arrow key direction that will change Pieman's image to the correspond to the key pressed
function changeImage(event) {
	//add event listener to Pieman that will close pieman's mouth on click
	if (event.key == "ArrowLeft") {
		pm.setAttribute("alt", "Pieman facing left");
		direction = -1;
	}
	if (event.key == "ArrowRight") {
		pm.setAttribute("alt", "Pieman facing right");
		direction = 1;
	}
	if (event.key == "ArrowUp") {
		pm.setAttribute("alt", "Pieman facing up");
		direction = 2;
	}
	if (event.key == "ArrowDown") {
		pm.setAttribute("alt", "Pieman facing down");
		direction = -2;
	}
}

//Function to move the packman
function startMotion() {

	//Change direction based on direction variable
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

	//First make the pellets age
	subtractPellets();

	//Check if you hit a pellet
	pelletHit();

	//Draw all the pellets
	drawPellet();

	//Check if you have no pellets left
	checkGameOver();

	//Display Score
	document.getElementById("Score").innerText = "Score: " + score;
}


//Function for checking if the game
function checkGameOver() {
	let trigger = true;
	for (let index = 0; index < pelletArray.length; index++) {
		if (pelletArray[index].time > 0) trigger = false;

	}
	//If game is over, spawn text and play noise
	if (trigger) {
		pel.innerHTML = '<h1>GAME OVER</h1>';
		direction = 0;
		
		//Condition for playing the end sound once
		if (gameOverPlayed == false)
		{
			gameOverPlayed = true;
			walk.pause();
			death.play();
			
		}
	}

}

//Function for drawing out the pellets
function drawPellet()
{
	//Create a large string and add pelell code for each position
	let pelletHtml = "";
	for (let index = 0; index < pelletArray.length; index++) {
		if (pelletArray[index].time > 0) pelletHtml +=
			'<img src = "images/stopped.PNG" width="40px" height="40px" alt="Pieman Pellet" style="position: absolute; left: '+ pelletArray[index].x +'px; top: '+ pelletArray[index].y +'px;">';	
	}
	pel.innerHTML = pelletHtml;
}

// Function for checking if the pellet was hit
function pelletHit()
{
	//Cheack each pellet in the array
	for (let index = 0; index < pelletArray.length; index++)
	{
		let pelletX = pelletArray[index].x;
		let pelletY = pelletArray[index].y;
		let offset = 40;
		//see if packmans position is at the same place as teh compared pellet
		if (x < pelletX + offset && x > pelletX - offset && y < pelletY + 150 && y > pelletY + 70  && pelletArray[index].time > 0)
		{
			pelletArray[index].time = 0;
			console.log()
			createPellet(pelletArray[index].originalTime*.95, numPellets);
			createPellet(pelletArray[index].originalTime*.95, numPellets);
			score++;
			break;
		}
	}	
}


//function for decrimenting the time on the pellets
function subtractPellets()
{
	//Go through each pellet and decreace its time alive
	for (let index = 0; index < pelletArray.length; index++) {
		pelletArray[index].time--;
	}
}



//Function to update the pacmans frame and animate the character
function updateFrame()
{

	//Use a switch to decide direction of the pellet
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


	//Animate the packman based on the current frame
	if (direction == 0) pm.setAttribute("src", "images/stopped.PNG");
	else {
		if (animationFrame >= 12) animationIncreacing = false;
		if (animationFrame <= 1) animationIncreacing = true;
	
		name += "" + animationFrame + ".PNG";
		pm.setAttribute("src", name);

		if (animationIncreacing) animationFrame++;
		else animationFrame--;
	}
}
 


