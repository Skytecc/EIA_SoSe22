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

window.addEventListener("load", function (): void {
  document.querySelector(".button1").addEventListener("click", function (): void { soundSample(sounds[0]) });
  document.querySelector(".button2").addEventListener("click", function (): void { soundSample(sounds[1]) });
  document.querySelector(".button3").addEventListener("click", function (): void { soundSample(sounds[2]) });
  document.querySelector(".button4").addEventListener("click", function (): void { soundSample(sounds[3]) });
  document.querySelector(".button5").addEventListener("click", function (): void { soundSample(sounds[4]) });
  document.querySelector(".button6").addEventListener("click", function (): void { soundSample(sounds[5]) });
  document.querySelector(".button7").addEventListener("click", function (): void { soundSample(sounds[6]) });
  document.querySelector(".button8").addEventListener("click", function (): void { soundSample(sounds[7]) });
  document.querySelector(".button9").addEventListener("click", function (): void { soundSample(sounds[8]) });

  var playBtn: HTMLElement = document.querySelector(".btn");

  const playIconClassName = "fa-play";
  const stopIconClassName = "fa-stop";

  var btns = document.querySelectorAll(".btn")


  
    document.querySelector("#play").addEventListener("click", function () {
      document.querySelector("#play").classList.add("hidden");
      document.querySelector("#stop").classList.remove("hidden");
    })

    document.querySelector("#stop").addEventListener("click", function () {
      document.querySelector("#stop").classList.add("hidden");
      document.querySelector("#play").classList.remove("hidden");
    })

  var beat: HTMLAudioElement[] = [sound06, sound09, sound05];

  var index = 0;


  function beatSounds() {
    var loop: number = setInterval(function (): void {
      soundSample(beat[index]);
      index += 1;
      if (index > 2)
        index = 0;
    }, 700)

    document.querySelector(".fa-stop").addEventListener("click", function (): void {
      clearInterval(loop);
    });

  }

  document.querySelector(".fa-play").addEventListener("click", beatSounds);

  function randomizer(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)

      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  document.querySelector("#remix").addEventListener("click", randomizer(sounds));


});