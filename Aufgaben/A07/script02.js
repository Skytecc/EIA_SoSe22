var germany2022 = 83.77;
var germany2014 = 81.31;
var france2022 = 65.88;
var france2014 = 64.04;
var italy2022 = 60.6;
var italy2014 = 64.04;
var sweden2022 = 10.23;
var sweden2014 = 9.65;
var eu2022 = 447.1;
var grEU = Math.round((germany2022 / eu2022) * 100);
var grWR = Math.round((germany2022 / germany2014 - 1) * 100);
var grWRnr = Math.round(germany2022 - germany2014);
var frEU = Math.round((france2022 / eu2022) * 100);
var frWR = Math.round((france2022 / france2014 - 1) * 100);
var frWRnr = Math.round(france2022 - france2014);
var itEU = Math.round((italy2022 / eu2022) * 100);
var itWR = Math.round((italy2022 / italy2014 - 1) * 100);
var itWRnr = Math.round(italy2022 - italy2014);
var swEU = Math.round((sweden2022 / eu2022) * 100);
var swWR = Math.round((sweden2022 / sweden2014 - 1) * 100);
var swWRnr = Math.round(sweden2022 - sweden2014);
var ger = "#germany";
var fra = "#france";
var ita = "#italy";
var swe = "#sweden";
var landbefore = "#france";
// 07 Aufgabe
window.addEventListener("load", function () {
    // EU Sterne
    function changeNumberEU() {
        document.querySelector(".euZahl").innerHTML = "Einwohnerzahl in der europäischen Union: " + eu2022.toString() + "Mio";
    }
    function changeNumber(number2022, numberEU, numberWR, numberWRnr, land) {
        document.querySelector(".einwohnerGS").innerHTML = number2022.toString() + "Mio";
        document.querySelector(".vglEU").innerHTML = numberEU.toString() + "%";
        document.querySelector(".wr2014").innerHTML = numberWR.toString() + "%";
        document.querySelector(".wrDifference").innerHTML = numberWRnr.toString() + "Mio";
        document.querySelector(".chart").setAttribute("style", "height:" + numberEU + "%");
        document.querySelector(land).classList.add("active");
    }
    document.querySelector(".germany").addEventListener("click", function () { changeNumber(germany2022, grEU, grWR, grWRnr, ger); });
    document.querySelector(".france").addEventListener("click", function () { changeNumber(france2022, frEU, frWR, frWRnr, fra); });
    document.querySelector(".italy").addEventListener("click", function () { changeNumber(italy2022, itEU, itWR, itWRnr, ita); });
    document.querySelector(".sweden").addEventListener("click", function () { changeNumber(sweden2022, swEU, swWR, swWRnr, swe); });
    document.querySelector(".stars").addEventListener('click', changeNumberEU);
});
//# sourceMappingURL=script02.js.map