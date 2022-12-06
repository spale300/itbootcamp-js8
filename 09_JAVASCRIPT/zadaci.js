// zadatak 01
console.log("---Zadatak 01---");

let h = 17;
let m = 42;
let mn = h * 60 + m;
console.log(mn);

// zadatak 02
console.log("---Zadatak 02---");

let ms = Math.floor(mn / 60);
let mh = mn % 60;
console.log(ms);
console.log(mh);

// zadatak 03
console.log("---Zadatak 03---");

let cena = 1355;
let novac = 3000;
let kusur = console.log(novac - cena);

// zadatak 04
console.log("---Zadatak 04---");

let datum = new Date();
let sati = new Date().getHours();
let minuti = new Date().getMinutes();
let vreme = `${sati}:${minuti}`;
console.log(vreme);

let trenutniMinuti = sati * 60 + minuti;
console.log(trenutniMinuti);

// zadatak 05
console.log("---Zadatak 05---");

console.log(
  `${datum.getFullYear()}/${datum.getMonth() + 1}/${datum.getDate()}`
);
console.log(
  `${datum.getDate()}/${datum.getMonth() + 1}/${datum.getFullYear()}`
);

// zadatak 06
console.log("---Zadatak 06---");

let euro = 33;
let kurs = 117.2986;

// euro u dinar

let dinar = euro * kurs;
console.log(dinar);

// dinar u euro
let dinar1 = 33000;

console.log(dinar1 / kurs);

// zadatak 07
console.log("---Zadatak 07---");

// euro u dolar
let nasEuro = 33;
let euroDinar = 117.2986;
let dolarDinar = 111.65;

let nasDinar = nasEuro * euroDinar;
let nasDolar = nasDinar / dolarDinar;
console.log(nasDolar);

// dolar u euro

let dolar = 33;
let dolarToDinar = dolar * dolarDinar;
let dinarToEuro = dolarToDinar / euroDinar;
console.log(dinarToEuro);

// zadatak 08

let c = 23;
let cToF = c * 1.8 + 32;
let fToC = (cToF - 32) / 1.8;
let cToK = c + 273.15;
let kToC = cToK - 273.15;

console.log("Celzijus u Farenhajte");
console.log(cToF);
console.log("Faranhajt u Celziju");
console.log(fToC);

console.log("Celzijus u Kelvin");
console.log(cToK);
console.log("Kelvin u Celzijus");
console.log(kToC);
