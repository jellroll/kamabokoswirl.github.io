function directions() {
	document.getElementById('directions').innerHTML = 'Click a button to control the traffic light.';
}

function lightStop() {
	lightsOff();
	buttonsOn();
	document.getElementById('light-stop').style.background = 'rgb(225,86,86';
	document.getElementById('button-stop').disabled = true;
	document.getElementById('car').style.WebkitAnimationPlayState = 'paused';
}

function lightCaution() {
	lightsOff();
	buttonsOn();
	document.getElementById('light-caution').style.background = 'rgb(236,244,12)';
	document.getElementById('button-caution').disabled = true;
	document.getElementById('car').style.WebkitAnimationDuration = '30s';
	document.getElementById('car').style.WebkitAnimationPlayState = 'running';
}

function lightGo() {
	lightsOff();
	buttonsOn();
	document.getElementById('light-go').style.background = 'rgb(99,197,73)';
	document.getElementById('button-go').disabled = true;	
	document.getElementById('car').style.WebkitAnimationPlayState = 'running';
}

function lightsOff() {
	document.getElementById('light-stop').style.background = 'rgb(0,0,0)';
	document.getElementById('light-caution').style.background = 'rgb(0,0,0)';
	document.getElementById('light-go').style.background = 'rgb(0,0,0)';
}

function buttonsOn() {
	document.getElementById('button-stop').disabled = false;
	document.getElementById('button-caution').disabled = false;
	document.getElementById('button-go').disabled = false;
}