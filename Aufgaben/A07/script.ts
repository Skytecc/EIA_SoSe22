var germany2022 : number = 83.77;
var germany2014 : number = 81.31;

var france2022 : number = 65.88;
var france2014 : number = 64.04;

var italy2022 : number = 60.6;
var italy2014 : number = 64.04;

var sweden2022 : number = 10.23;
var sweden2014 : number = 9.65;

var eu2022 : number = 447.1;

var grEU : number = (germany2022/eu2022) * 100;
var grWR : number = (germany2022/germany2014 - 1) * 100;
var grWRnr : number = germany2022-germany2014;

var frEU : number = (france2022/eu2022) * 100;
var frWR : number = (france2022/france2014 -1) * 100;
var frWRnr : number = france2022-france2022;

var itEU : number = (italy2022/eu2022) * 100;
var itWR : number = (italy2022/italy2014 -1) * 100;
var itWRnr : number = italy2022-italy2014;

var swEU : number = (sweden2022/eu2022) * 100;
var swWR : number = (sweden2022/sweden2014 -1) *100;
var swWRnr : number = sweden2022-sweden2014;


console.log("Die Einwohnerzahl von Deutschland in 2022: " + germany2022 );
console.log("Die relative Gesamtzahl von Deutschland zur EU ist: " + grEU + "%" );
console.log("Deutschlands Wachstumsrate seit 2014: " + grWR + "%");
console.log("Deutschlands gesamte Wachstumsrate zwischen 2014 und 2022: " + grWRnr);

console.log("Die Einwohnerzahl von Frankreich in 2022: " + france2022 );
console.log("Die relative Gesamtzahl von Frankreich zur EU ist: " + frEU + "%" );
console.log("Frankreich Wachstumsrate seit 2014: " + frWR + "%" );
console.log("Frankreich gesamte Wachstumsrate zwischen 2014 und 2022: " + frWRnr);

console.log("Die Einwohnerzahl von Italien in 2022: " + italy2022 );
console.log("Die relative Gesamtzahl von Italien zur EU ist: " + itEU + "%" );
console.log("Italien Wachstumsrate seit 2014: " + itWR + "%" );
console.log("Italien gesamte Wachstumsrate zwischen 2014 und 2022: " + itWRnr);

console.log("Die Einwohnerzahl von Schweden in 2022: " + sweden2022 );
console.log("Die relative Gesamtzahl von Schweden zur EU ist: " + swEU + "%" );
console.log("Schweden Wachstumsrate seit 2014: " + swWR + "%" );
console.log("Schweden gesamte Wachstumsrate zwischen 2014 und 2022: " + swWRnr);

