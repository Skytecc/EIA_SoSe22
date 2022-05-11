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
var grWRnr = germany2022 - germany2014;
var frEU = Math.round((france2022 / eu2022) * 100);
var frWR = Math.round((france2022 / france2014 - 1) * 100);
var frWRnr = france2022 - france2014;
var itEU = Math.round((italy2022 / eu2022) * 100);
var itWR = Math.round((italy2022 / italy2014 - 1) * 100);
var itWRnr = italy2022 - italy2014;
var swEU = Math.round((sweden2022 / eu2022) * 100);
var swWR = Math.round((sweden2022 / sweden2014 - 1) * 100);
var swWRnr = sweden2022 - sweden2014;
// 07 Aufgabe
// Deutschland
function changeNumberGR() {
    document.querySelector(".einwohnerGS").innerHTML = germany2022.toString() + "Mio";
    document.querySelector(".vglEU").innerHTML = grEU.toString() + "%";
    document.querySelector(".wr2014").innerHTML = grWR.toString() + "%";
    document.querySelector(".wrDifference").innerHTML = grWRnr.toString() + "Mio";
}
document.querySelector(".germany").addEventListener('click', changeNumberGR);
// Frankreich
function changeNumberFR() {
    document.querySelector(".einwohnerGS").innerHTML = france2022.toString() + "Mio";
    document.querySelector(".vglEU").innerHTML = frEU.toString() + "%";
    document.querySelector(".wr2014").innerHTML = frWR.toString() + "%";
    document.querySelector(".wrDifference").innerHTML = frWRnr.toString() + "Mio";
}
document.querySelector(".france").addEventListener('click', changeNumberFR);
// Italien
function changeNumberIT() {
    document.querySelector(".einwohnerGS").innerHTML = italy2022.toString() + "Mio";
    document.querySelector(".vglEU").innerHTML = itEU.toString() + "%";
    document.querySelector(".wr2014").innerHTML = itWR.toString() + "%";
    document.querySelector(".wrDifference").innerHTML = itWRnr.toString() + "Mio";
}
document.querySelector(".italy").addEventListener('click', changeNumberIT);
// Schweden
function changeNumberSWE() {
    document.querySelector(".einwohnerGS").innerHTML = sweden2022.toString() + "Mio";
    document.querySelector(".vglEU").innerHTML = swEU.toString() + "%";
    document.querySelector(".wr2014").innerHTML = swWR.toString() + "%";
    document.querySelector(".wrDifference").innerHTML = swWRnr.toString() + "Mio";
}
document.querySelector(".sweden").addEventListener('click', changeNumberSWE);
// EU Sterne
function changeNumberEU() {
    document.querySelector(".euZahl").innerHTML = "Einwohnerzahl in der europäischen Union: " + eu2022.toString() + "Mio";
}
document.querySelector(".stars").addEventListener('click', changeNumberEU);
//# sourceMappingURL=script02.js.map