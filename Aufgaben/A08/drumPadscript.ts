  var sound01:HTMLAudioElement = new Audio('DrumPadSounds/A.mp3');
  var sound02:HTMLAudioElement = new Audio('DrumPadSounds/C.mp3');
  var sound03:HTMLAudioElement = new Audio('DrumPadSounds/F.mp3');
  var sound04:HTMLAudioElement = new Audio('DrumPadSounds/G.mp3');
  var sound05:HTMLAudioElement = new Audio('DrumPadSounds/hihat.mp3');
  var sound06:HTMLAudioElement = new Audio('DrumPadSounds/kick.mp3');
  var sound07:HTMLAudioElement = new Audio('DrumPadSounds/laugh-1.mp3');
  var sound08:HTMLAudioElement = new Audio('DrumPadSounds/laugh-2.mp3');
  var sound09:HTMLAudioElement = new Audio('DrumPadSounds/snare.mp3');

  var sounds:HTMLAudioElement [] = [sound01, sound02, sound03, sound04, sound05, sound06, sound07, sound08, sound09];

  function soundSample01 (sound:HTMLAudioElement) {
    sound.play();
  }
  
window.addEventListener("load", function() {
    document.querySelector(".button1").addEventListener("click", function() {soundSample01 (sounds[0])} );
    document.querySelector(".button2").addEventListener("click", function() {soundSample01 (sounds[1])} );
    document.querySelector(".button3").addEventListener("click", function() {soundSample01 (sounds[2])} );
    document.querySelector(".button4").addEventListener("click", function() {soundSample01 (sounds[3])} );
    document.querySelector(".button5").addEventListener("click", function() {soundSample01 (sounds[4])} );
    document.querySelector(".button6").addEventListener("click", function() {soundSample01 (sounds[5])} );
    document.querySelector(".button7").addEventListener("click", function() {soundSample01 (sounds[6])} );
    document.querySelector(".button8").addEventListener("click", function() {soundSample01 (sounds[7])} );
    document.querySelector(".button9").addEventListener("click", function() {soundSample01 (sounds[8])} );
    
    document.querySelector(".playButton").addEventListener("click", function playBeats () { 
      setInterval(function() {
      
        sounds[5].play();
        sounds[8].play();
        sounds[4].play();
     
       
     }), 500;})
  });