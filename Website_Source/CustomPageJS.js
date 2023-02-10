var clickCounter = 1;
var timer = 1;
window.setInterval (updateFunction, 10);


window.onclick = testFunction;
//document.getElementById("bodyID").onclick = testFunction;

function testFunction() {
	document.getElementById("pageClickCounter").innerHTML = "CLICK COUNTER = " + clickCounter;
	clickCounter++;	
}

function updateFunction() {
	document.getElementById("pageTimer").textContent = "TIMER = " + timer + " Seconds";
	timer++;	
}
