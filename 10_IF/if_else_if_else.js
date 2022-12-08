let br = 5;

if (br < 0) {
  console.log("Broj je negativan");
} else if (br == 0) {
  console.log("Broj je nula");
} else {
  console.log("Broj je pozitivan");
}

// Ako se neki uslovi preklapaju koristiti IF IF IF. Ako se ne preklapaju onda koristimo IF ELSE IF ELSE.

// 07.Preuzeti koji je dan u nedelji sa računara i ispitati da li je to radni dan ili je u pitanju vikend.

let dan = new Date().getDay();
console.log(dan);

console.log(dan);

if (dan > 6) {
  console.log("Radni dan");
} else if (dan != 0) {
  console.log("Radni dan");
} else {
  console.log("Vikend");
}

// 08. Na osnovu unetog broja poena u paragrafu ispitati koju ocenu profesor treba da upiše učeniku. Učenik je položio ispit nekom ocenom  ukoliko ima više od 50 poena, u suprotnom treba ispisati da je pao ispit.
// Za više od 50 poena učenik dobija ocenu 6,
// za više od 60 poena učenik dobija ocenu 7,
// za više od 70 poena učenik dobija ocenu 8,
// za više od 80 poena učenik dobija ocenu 9 i
// za više od 90 poena učenik dobija ocenu 10.

let brojPoena = 87;

if (brojPoena > 90) {
  document.write(`<p>Ucenik ima ${brojPoena} poena, dobija ocenu 10</p>`);
} else if (brojPoena > 80) {
  document.write(`<p>Ucenik ima ${brojPoena} poena, dobija ocenu 9</p>`);
} else if (brojPoena > 70) {
  document.write(`<p>Ucenik ima ${brojPoena} poena, dobija ocenu 8</p>`);
} else if (brojPoena > 60) {
  document.write(`<p>Ucenik ima ${brojPoena} poena, dobija ocenu 7</p>`);
} else if (brojPoena > 50) {
  document.write(`<p>Ucenik ima ${brojPoena} poena, dobija ocenu 6</p>`);
} else {
  document.write(`<p>Ucenik ima ${brojPoena} poena, nije polozio ispit</p>`);
}

// 10. Radno vreme jedne programerske firme je od 9h do 17h. Preuzeti vreme sa računara i ispitati da li u to vreme firma radi ili ne radi.

let h = new Date().getHours();

if (h < 9) {
  console.log("Firma ne radi");
} else if (h >= 17) {
  console.log("Firma ne radi");
} else {
  console.log("Firma radi");
}

// 11.Za unet sat početka i sat kraja radnog vremena dva lekara,  ispisati DA ukoliko se smene lekara preklapaju, u suprotnom ispisati NE.(Ne može se desiti da lekar počne smenu pre ponoći, a završi sa smenom nakon ponoći, ovo se podrazumeva i ne ispitivati dodatno)

let p1 = 8;
let k1 = 16;
let p2 = 10;
let k2 = 12;

if (k1 < p2) {
  console.log("Nema preklapanja");
} else if (k2 < p1) {
  console.log("Nema preklapanja");
} else {
  console.log("Ima preklapanja");
}

// 12. Za uneti broj ispitati da li je paran ili nije.

let broj = 33;

if (broj == 0) {
  console.log("Broj je neutralan");
} else if (broj % 2 == 0) {
  console.log("Broj je paran");
} else {
  console.log("Broj nije neparan broj");
}

// 13.Za uneti broj ispisati da li je deljiv sa 3 ili ne.

if (broj == 0) {
  console.log("Broj je neutralan");
} else if (broj % 3 < 3) {
  console.log("Broj je deljiv sa tri");
} else {
  console.log("Broj nije deljiv sa tri");
}

// 14.Za dva uneta broja, od većeg učitanog broja oduzeti manji i rezultat ispisati na ekranu.

let brojDva = 55;

if (broj == brojDva) {
  console.log("Brojevi su jednaki");
} else if (broj > brojDva) {
  console.log(broj - brojDva);
} else {
  console.log(brojDva - broj);
}

// 15. Za uneti broj ispitati da li je on manji od nule, veći od nule ili jednak nuli. Ukoliko je manji ili jednak nuli ispisati njegov prethodnik, a ukoliko je veći od nule ispisati njegov sledbenik.

let br1 = 33;

if (br1 <= 0) {
  console.log(--br1);
} else if (br1 >= 0) {
  console.log(++br1);
}

// 16. Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od njih je najmanji, korišćenjem if – else if strukture.

let brojTri = 132;

let max = broj;
let min = broj;

// 17. Za učitani broj ispitati da li je ceo.

let c = 10;
let f = c % 1;

if (f == 0) {
  console.log(`Broj ${c} je ceo broj.`);
} else {
  console.log(`${c} nije ceo broj.`);
}
