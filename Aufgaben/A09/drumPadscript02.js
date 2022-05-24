var sound01 = new Audio('DrumPadSounds02/A.mp3');
var sound02 = new Audio('DrumPadSounds02/C.mp3');
var sound03 = new Audio('DrumPadSounds02/F.mp3');
var sound04 = new Audio('DrumPadSounds02/G.mp3');
var sound05 = new Audio('DrumPadSounds02/hihat.mp3');
var sound06 = new Audio('DrumPadSounds02/kick.mp3');
var sound07 = new Audio('DrumPadSounds02/laugh-1.mp3');
var sound08 = new Audio('DrumPadSounds02/laugh-2.mp3');
var sound09 = new Audio('DrumPadSounds02/snare.mp3');
var sounds = [sound01, sound02, sound03, sound04, sound05, sound06, sound07, sound08, sound09];
function soundSample(sound) {
    sound.play();
}
window.addEventListener("load", function () {
    document.querySelector(".button1").addEventListener("click", function () { soundSample(sounds[0]); });
    document.querySelector(".button2").addEventListener("click", function () { soundSample(sounds[1]); });
    document.querySelector(".button3").addEventListener("click", function () { soundSample(sounds[2]); });
    document.querySelector(".button4").addEventListener("click", function () { soundSample(sounds[3]); });
    document.querySelector(".button5").addEventListener("click", function () { soundSample(sounds[4]); });
    document.querySelector(".button6").addEventListener("click", function () { soundSample(sounds[5]); });
    document.querySelector(".button7").addEventListener("click", function () { soundSample(sounds[6]); });
    document.querySelector(".button8").addEventListener("click", function () { soundSample(sounds[7]); });
    document.querySelector(".button9").addEventListener("click", function () { soundSample(sounds[8]); });
    document.querySelector(".btn").addEventListener("click", function playBeats() {
        setInterval(function () {
            soundSample(sounds[5]);
            soundSample(sounds[8]);
            soundSample(sounds[4]);
        }), 500;
    });
    var playBtn = document.querySelector("fa-play");
    var stopBtn = document.querySelector("fa-stop");
    playBtn.addEventListener('click', function () {
        if (playBtn.getAttribute('class') == "fa-play") {
            playBtn.setAttribute('class', 'fa-stop');
        }
        else if (playBtn.getAttribute('class') == "active") {
            playBtn.setAttribute('class', 'stop');
        }
        else if (playBtn.getAttribute('class') == "stop") {
            playBtn.setAttribute('class', 'active');
        }
    });
});
//# sourceMappingURL=drumPadscript02.js.map