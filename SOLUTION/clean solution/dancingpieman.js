/* JavaScript for dancing Pieman
** CMPT304 Lecture Feb. 4 + 7, 2022
** Ben Cameron
*/

/* FUNCTIONS*/

//create function changeImage(event) to respond to an arrow key direction that will change Pieman's image to the correspond to the key pressed
function changeImage(event){
	
	//var pm = document.getElementById("Pieman");
	if (event.key == "ArrowLeft"){
		//pm.setAttribute('src',"Up1.PNG");
		pm.setAttribute('alt',"Pieman facing left");
		pm.src="Left1.PNG";
	}
	
	if (event.key == "ArrowRight"){
		pm.setAttribute('src',"Right1.PNG");
		pm.setAttribute('alt',"Pieman facing right");
	}
	
	if (event.key == "ArrowDown"){
		pm.setAttribute('src',"Down1.PNG");
		pm.setAttribute('alt',"Pieman facing down");
	}
	
	if (event.key == "ArrowUp"){
		pm.setAttribute('src',"Up1.PNG");
		pm.setAttribute('alt',"Pieman facing up");
	}

}

//create function closeMouth() that closes Pieman's mouth on a mouse click
function closeMouth(){
	
	//var pm = event.target;
	pm.setAttribute('src',"closed.PNG");
	pm.setAttribute('alt',"Pieman with their mouth closed");
}


//create function startMotion() that 
function startMotion()
{
	//var pm = document.getElementById("Pieman");
	pm.style.position = "absolute";

	if((x + 90 > window.innerWidth) && (direction === 1))
	{		
		direction *= -1;
		x+=direction*10;
		pm.style.left = x+"px" ;
	}
	if((x - 10 < 0) && (direction === -1))
	{		
		direction *= -1;
		x+=direction*10;
		pm.style.left = x+"px" ;
	}
	else
	{
		x+=direction*10;
		pm.style.left = x+"px" ;		
	}
}

/* ADDING EVENT LISTENERS*/

//add event listener for keydown event that calls changeImage
document.addEventListener('keydown', changeImage, false);

//add event listener to Pieman that will close pieman's mouth on click
var pm = document.getElementById("Pieman"); //note script tags have to appear after the img tag with id Pieman no element yet exists!
pm.addEventListener('click', closeMouth, false);

//setIntervalfor 100 miliseconds to move pieman by 10px
var timeOutVariable = window.setInterval(startMotion, 100);

/*GLOBAL VARIABLES FOR PIEMAN MOTION*/
var x = 0; //Pieman's initial left position
var direction = 1; //controls if Pieman is moving right (+1) or left (-1)

/*LAST MODIFIED MESSAGE*/
var modNode = document.createElement('h6');
document.body.appendChild(modNode);
var mod = document.lastModified;
modNode.textContent = "Last modified by CMPT304 class on " + mod;

