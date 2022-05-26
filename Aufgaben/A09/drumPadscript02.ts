var sound01: HTMLAudioElement = new Audio('DrumPadSounds02/A.mp3');
var sound02: HTMLAudioElement = new Audio('DrumPadSounds02/C.mp3');
var sound03: HTMLAudioElement = new Audio('DrumPadSounds02/F.mp3');
var sound04: HTMLAudioElement = new Audio('DrumPadSounds02/G.mp3');
var sound05: HTMLAudioElement = new Audio('DrumPadSounds02/hihat.mp3');
var sound06: HTMLAudioElement = new Audio('DrumPadSounds02/kick.mp3');
var sound07: HTMLAudioElement = new Audio('DrumPadSounds02/laugh-1.mp3');
var sound08: HTMLAudioElement = new Audio('DrumPadSounds02/laugh-2.mp3');
var sound09: HTMLAudioElement = new Audio('DrumPadSounds02/snare.mp3');

var sounds: HTMLAudioElement[] = [sound01, sound02, sound03, sound04, sound05, sound06, sound07, sound08, sound09];

function soundSample(sound: HTMLAudioElement) {
  sound.play();
}

window.addEventListener("load", function () {
  document.querySelector(".button1").addEventListener("click", function () { soundSample(sounds[0]) });
  document.querySelector(".button2").addEventListener("click", function () { soundSample(sounds[1]) });
  document.querySelector(".button3").addEventListener("click", function () { soundSample(sounds[2]) });
  document.querySelector(".button4").addEventListener("click", function () { soundSample(sounds[3]) });
  document.querySelector(".button5").addEventListener("click", function () { soundSample(sounds[4]) });
  document.querySelector(".button6").addEventListener("click", function () { soundSample(sounds[5]) });
  document.querySelector(".button7").addEventListener("click", function () { soundSample(sounds[6]) });
  document.querySelector(".button8").addEventListener("click", function () { soundSample(sounds[7]) });
  document.querySelector(".button9").addEventListener("click", function () { soundSample(sounds[8]) });

  /* function beatSounds () { 
    setInterval(function(){

      soundSample (sounds[5]);
     },1000);

    setInterval(function() {
      soundSample (sounds[8]);
    }, 5000)

    setInterval(function(){
      soundSample (sounds[4])
    }, 8000) 
   }*/


  var playBtn: HTMLElement = document.querySelector(".btn");

  const playIconClassName = "fa-play";
  const stopIconClassName = "fa-stop";

  var btns = document.querySelectorAll(".btn")


  function onChange(change) {

    const buttonName = change.currentTarget;

    const isPlayButton = buttonName.classList.contains(playIconClassName);

    if (isPlayButton) {
      buttonName.classList.remove(playIconClassName);
      buttonName.classList.add(stopIconClassName);
    } else {
      buttonName.classList.remove(stopIconClassName);
      buttonName.classList.add(playIconClassName);

    }
  }

  document.querySelector(".btn").addEventListener("click", onChange);

  var beat: HTMLAudioElement[] = [sound06, sound09, sound05];

  var index = 0;


  function beatSounds() {
    var loop: number = setInterval(function () {
      soundSample(beat[index]);
      index += 1;
      if (index > 2)
        index = 0;

      document.querySelector(".fa-stop").addEventListener("click", function () {
        clearInterval(loop);
      });
    }, 700)
  };

  document.querySelector(".fa-play").addEventListener("click", beatSounds);


  document.querySelector("#remix").addEventListener("click", function () {
    setInterval(function () {
      
      let randomSound = Math.floor(Math.random() * sounds.length);

      soundSample(sounds[randomSound]);

    }, 700)
  });



});