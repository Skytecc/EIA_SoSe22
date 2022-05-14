var sound01 = new Audio('DrumPadSounds/A.mp3');
var sound02 = new Audio('DrumPadSounds/C.mp3');
var sound03 = new Audio('DrumPadSounds/F.mp3');
var sound04 = new Audio('DrumPadSounds/G.mp3');
var sound05 = new Audio('DrumPadSounds/hihat.mp3');
var sound06 = new Audio('DrumPadSounds/kick.mp3');
var sound07 = new Audio('DrumPadSounds/laugh-1.mp3');
var sound08 = new Audio('DrumPadSounds/laugh-2.mp3');
var sound09 = new Audio('DrumPadSounds/snare.mp3');
var sounds = [];
new Audio('DrumPadSounds/A.mp3')[0] = 'musik01';
function soundSample(sound) {
    sound.play();
}
window.addEventListener("load", function () {
    document.querySelector(".button1").addEventListener("click", function () { soundSample(sound01); });
    document.querySelector(".button2").addEventListener("click", function () { soundSample(sound02); });
    document.querySelector(".button3").addEventListener("click", function () { soundSample(sound03); });
    document.querySelector(".button4").addEventListener("click", function () { soundSample(sound04); });
    document.querySelector(".button5").addEventListener("click", function () { soundSample(sound05); });
    document.querySelector(".button6").addEventListener("click", function () { soundSample(sound06); });
    document.querySelector(".button7").addEventListener("click", function () { soundSample(sound07); });
    document.querySelector(".button8").addEventListener("click", function () { soundSample(sound08); });
    document.querySelector(".button9").addEventListener("click", function () { soundSample(sound09); });
});
//# sourceMappingURL=drumPadscript.js.map