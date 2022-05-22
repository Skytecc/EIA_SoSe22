var sound01 = new Audio('DrumPadSounds/A.mp3');
var sound02 = new Audio('DrumPadSounds/C.mp3');
var sound03 = new Audio('DrumPadSounds/F.mp3');
var sound04 = new Audio('DrumPadSounds/G.mp3');
var sound05 = new Audio('DrumPadSounds/hihat.mp3');
var sound06 = new Audio('DrumPadSounds/kick.mp3');
var sound07 = new Audio('DrumPadSounds/laugh-1.mp3');
var sound08 = new Audio('DrumPadSounds/laugh-2.mp3');
var sound09 = new Audio('DrumPadSounds/snare.mp3');
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
    document.querySelector(".playButton").addEventListener("click", function playBeats() {
        setInterval(function () {
            sounds[5].play();
            sounds[8].play();
            sounds[4].play();
        }), 500;
    });
});
//# sourceMappingURL=drumPadscript.js.map