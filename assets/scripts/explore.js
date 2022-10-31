// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const textArea = document.getElementById('text-to-speak');
  const selection = document.getElementById('voice-select');
  const synth = window.speechSynthesis;
  var voices;

  synth.addEventListener('voiceschanged', function(){voices = synth.getVoices();

  for (let i = 0; i < voices.length; i++){
    let option = document.createElement('option');
    option.label = voices[i].name;
    option.value = voices[i].name;
    selection.append(option);
  }

  });

  const talkButton = document.querySelector('button');
	talkButton.addEventListener('click', function(){
    let speech = new SpeechSynthesisUtterance(textArea.value);
  
    //doesnt recognize string so look back at array
    for (let i = 0; i < voices.length; i++){
      if (voices[i].name == selection.value){
        speech.voice = voices[i];
      }
    }
  
    speech.addEventListener('start', function(){document.getElementsByTagName('img')[0].src = "./assets/images/smiling-open.png";})
    speech.addEventListener('end', function(){document.getElementsByTagName('img')[0].src = "./assets/images/smiling.png";})
  
    synth.speak(speech);
  });
}

