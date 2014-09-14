function directions() {
	document.getElementById('directions').innerHTML = 'Click a button to control the traffic light and car.';
}

function lightStop() {
	lightsOff();
	buttonsOn();
	document.getElementById('light-stop').style.background = 'rgb(225,86,86)';
	document.getElementById('button-stop').disabled = true;
	document.getElementById('car').style.width = '100px';
	document.getElementById('car').style.Transform = 'skew(0deg)';
	document.getElementById('car').style.AnimationPlayState = 'paused';
	document.getElementById('car').style.MozTransform = 'skew(0deg)';
	document.getElementById('car').style.MozAnimationPlayState = 'paused';
	document.getElementById('car').style.WebkitTransform = 'skew(0deg)';
	document.getElementById('car').style.WebkitAnimationPlayState = 'paused';
}

function lightCaution() {
	lightsOff();
	buttonsOn();
	document.getElementById('light-caution').style.background = 'rgb(236,244,12)';
	document.getElementById('button-caution').disabled = true;
	document.getElementById('car').style.width = '100px';
	document.getElementById('car').style.Transform = 'skew(0deg)';
	document.getElementById('car').style.AnimationPlayState = 'running';
	document.getElementById('car').style.MozTransform = 'skew(0deg)';
	document.getElementById('car').style.MozAnimationPlayState = 'running';
	document.getElementById('car').style.WebkitTransform = 'skew(0deg)';
	document.getElementById('car').style.WebkitAnimationPlayState = 'running';
}

function lightGo() {
	lightsOff();
	buttonsOn();
	document.getElementById('light-go').style.background = 'rgb(99,197,73)';
	document.getElementById('button-go').disabled = true;
	document.getElementById('car').style.width = '120px';
	document.getElementById('car').style.Transform = 'skew(20deg)';
	document.getElementById('car').style.AnimationPlayState = 'running';
	document.getElementById('car').style.MozTransform = 'skew(20deg)';
	document.getElementById('car').style.MozAnimationPlayState = 'running';
	document.getElementById('car').style.WebkitTransform = 'skew(20deg)';
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