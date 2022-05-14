var sound01 = new Audio('DrumPadSounds/A.mp3');
sound01.play();
var audio = [];
sound01[0] = 'sound01';
window.addEventListener("load", function soundSample() {
    document.querySelector(".button1").addEventListener('click', function () { sound01[0]; });
});
//# sourceMappingURL=drumPadscript.js.map