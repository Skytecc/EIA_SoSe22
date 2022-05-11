var germany2022 : number = 83.77;


var germany2014 : number = 81.31;

var france2022 : number = 65.88;
var france2014 : number = 64.04;

var italy2022 : number = 60.6;
var italy2014 : number = 64.04;

var sweden2022 : number = 10.23;
var sweden2014 : number = 9.65;

var eu2022 : number = 447.1;

var grEU : number = Math.round((germany2022/eu2022) * 100);
var grWR : number = Math.round((germany2022/germany2014 - 1) * 100);
var grWRnr : number = germany2022-germany2014;

var frEU : number = Math.round((france2022/eu2022) * 100);
var frWR : number = Math.round((france2022/france2014 -1) * 100);
var frWRnr : number = france2022-france2014;

var itEU : number = Math.round((italy2022/eu2022) * 100);
var itWR : number = Math.round((italy2022/italy2014 -1) * 100);
var itWRnr : number = italy2022-italy2014;

var swEU : number = Math.round((sweden2022/eu2022) * 100);
var swWR : number = Math.round((sweden2022/sweden2014 -1) *100);
var swWRnr : number = sweden2022-sweden2014;
// 07 Aufgabe

function changeNumber(number2022:number, numberEU:number,numberWR:number, numberWRnr:number) {
    document.querySelector(".einwohnerGS").innerHTML = number2022.toString() + "Mio";
    document.querySelector(".vglEU").innerHTML = numberEU.toString() + "%";
    document.querySelector(".wr2014").innerHTML = numberWR.toString() + "%";
    document.querySelector(".wrDifference").innerHTML = numberWRnr.toString() + "Mio";
    document.querySelector(".chart").setAttribute("style", "height:" + numberEU + "%");
}

window.addEventListener("load", function() {
    document.querySelector(".germany").addEventListener("click",function() { changeNumber (germany2022, grEU, grWR, grWRnr)} );
    document.querySelector(".france").addEventListener("click",function() { changeNumber (france2022, frEU, frWR, frWRnr)} );
    document.querySelector(".italy").addEventListener("click",function() { changeNumber (italy2022, itEU, itWR, itWRnr)} );
    document.querySelector(".sweden").addEventListener("click",function() { changeNumber (sweden2022, swEU, swWR, swWRnr)} );
})

// EU Sterne

function changeNumberEU() {
    document.querySelector(".euZahl").innerHTML = "Einwohnerzahl in der europäischen Union: " + eu2022.toString() + "Mio";
}
    document.querySelector(".stars").addEventListener('click', changeNumberEU);






