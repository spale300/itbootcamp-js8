// zadatak 01
let h = 17;
let m = 42;
let mn = h * 60 + m;
console.log(mn);

// zadatak 02

let ms = Math.floor(mn / 60);
let mh = mn % 60;
console.log(ms);
console.log(mh);

// zadatak 03
let cena = 1355;
let novac = 3000;
let kusur = console.log(novac - cena);

// zadatak 04
let datum = new Date();

// zadatak 05

console.log(`${datum.getFullYear()}/${datum.getMonth() + 1}/${datum.getDay()}`);
console.log("2022/12/02");

// zadatak 06

let euro = 33;
let kurs = 120;

// euro u dinar

let dinar = euro * kurs;
console.log(dinar);

// dinar u euro

console.log(dinar / kurs);

let sati = new Date().getHours();
let minuti = new Date().getMinutes();
let vreme = `${sati}:${minuti}`;
console.log(vreme);
