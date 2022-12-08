let x = 5;
let y = 7;

if (x == y) {
  console.log(`Vrednosti ${x} i ${y} su jednake!`);
} else {
  console.log(`Vrednosti ${x} i ${y} su razlicite!`);
}

if (x != y) {
  console.log(`Vrednosti ${x} i ${y} su razlicite!`);
} else {
  console.log(`Vrednosti ${x} i ${y} su jednake!`);
}

// 01. Za unetu zapreminu proizvoda, u paragrafu ispisati “Throw away”, ukoliko je proizvod zapremine veće od 100ml. U suprotnom ispisati “Pack up”.

let p = 100;

if (p > 100) {
  document.write("<p>Trow Away</p>");
} else {
  document.write("<p>Pack up</p>");
}

// 02. Za unetu temperaturu u paragrafu, ispisati “Temperatura u plusu” crvenom bojom ili “Temperatura u minusu” plavom bojom. Ukoliko je temperatura nula, računati kao temperaturu u plusu.

let temp = -10;

if (temp >= 0) {
  document.write("<p style='color:red;'>Temperatura u plusu</p>");
} else {
  document.write("<p style='color:blue;'>Temperatura u minusu</p>");
}

// 03. U odnosu na pol koji je korisnik uneo u promenljivu  (“m” za muški pol ili “z” za ženski pol)  na ekranu prikazati odgovarajući avatar (odgovarajuću sličicu).

let pol = "m";

if (pol == "m") {
  document.write("<p>👨</p>");
} else {
  document.write("<p>👩</p>");
}

// 04. U odnosu na preuzeto trenutno vreme sa računara, u paragrafu ispisati da li je trenutno jutro ili popodne.Popodne je kada prođe 12:00 sati, ne računajući i to vreme.

let vreme = new Date().getHours();
console.log(vreme);

if (vreme > 12) {
  document.write("<p>Popodne</p>");
} else {
  document.write("<p>Jutro</p>");
}

// 05. Za preuzetu godinu sa računara i unetu godinu rođenja izračunati i u paragrafu ispisati da li je osoba punoletna ili maloletna. osoba je punoletna kada napuni 18 godina.

let godina = new Date().getFullYear();
let godinaRodjenja = 1994;
if (godina - godinaRodjenja >= 18) {
  document.write("<p>Osoba je punoletna</p>");
} else {
  document.write("<p>Osoba je maloletna</p>");
}

// 06. Odrediti i u paragrafu ispisati najveći od tri uneta broja (samo uz pomoć if naredbi, bez korišćenja logičkih operatora).

let j = 999;
let d = 333;
let t = 1333;
let b = j;

if (b < d) {
  b = d;
}

if (b < t) {
  b = t;
}

document.write(`<p>Maksimum je ${b}</p>`);
