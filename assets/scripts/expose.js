// expose.js

window.addEventListener('DOMContentLoaded', init);
var horn = null;
var volume = null;
function init() {
  // TODO
	const hornSelect = document.getElementById('horn-select');
	hornSelect.addEventListener('input', hornSwap);

	const volSelect = document.getElementById('volume-controls');
	volSelect.addEventListener('input', volSwap);

	const hornButton = document.getElementById('volume');
	hornButton.addEventListener('onclick',playSound);

	var confetti = new JSConfetti();
}

function hornSwap(event) {
	horn = event.target.value;	
	document.getElementsByTagName('img')[0].src = "./assets/images/" + horn + ".svg";
}

function volSwap(event) {
	volume = event.target.value;
	if (volume == 0){
		document.getElementsByTagName('img')[1].src = "./assets/icons/volume-level-0.svg";
	} else if (volume >= 1 && volume < 33){
		document.getElementsByTagName('img')[1].src = "./assets/icons/volume-level-1.svg";
	} else if (volume >= 33 && volume < 67){
		document.getElementsByTagName('img')[1].src = "./assets/icons/volume-level-2.svg";
	} else if (volume >= 67){
		document.getElementsByTagName('img')[1].src = "./assets/icons/volume-level-3.svg";
	}
}

function playSound(){
	if (horn != null){
		document.getElementsByTagName('audio')[0].src = "./assets/audio/" + horn + ".mp3";
		document.getElementsByTagName('audio')[0].volume = 1;
		document.getElementsByTagName('audio')[0].play();
		if (horn == 'party-horn'){
			confetti.addConfetti();
		}
	}
}