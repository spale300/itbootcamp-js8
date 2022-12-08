// 18. Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od njih je najmanji, ovoga puta korišćenjem ugnježdenog grananja.

let a = 10;
let b = 20;
let c = 15;

let max;
let mid;
let min;

if (a > b) {
  if (a > c) {
    console.log(`Najveci broj je ${a}.`);
    if (b > c) {
      console.log(`Srednji broj je ${b}.`);
      console.log(`Najmanji broj je ${c}.`);
    } else {
      console.log(`Srednji broj je ${c}.`);
      console.log(`Najmanji broj je ${b}.`);
    }
  } else {
    console.log(`Najveci broj je ${c}.`);
    console.log(`Srednji broj je ${a}.`);
    console.log(`Najmanji broj je ${b}.`);
  }
} else {
  if (b > c) {
    console.log(`Najveci broj je ${b}.`);

    if (a > c) {
      console.log(`Srednji broj je ${a}.`);
      console.log(`Najmanji broj je ${c}.`);
    } else {
      console.log(`Srednji broj je ${c}.`);
      console.log(`Najmanji broj je ${a}.`);
    }
  } else {
    console.log(`Najveci broj je ${c}.`);
    console.log(`Srednji broj je ${b}.`);
    console.log(`Najmanji broj je ${a}.`);
  }
}

// 19. Učitati dva cela broja i ispitati da li je veći od njih paran.

a = 3;
b = 15;

if (a > b) {
  if (a % 2 == 0) {
    console.log(`Broj ${a} je paran i veci od broja ${b}`);
  } else {
    console.log(`Broj ${a} neparan ali nije veci od broja  ${b}`);
  }
} else {
  if (b % 2 == 0) {
    console.log(`Broj ${b} je paran i veci od broja ${a}`);
  } else {
    console.log(`Broj ${b} neparan ali je veci od broja ${a}`);
  }
}

// 20. Uneti dva datuma i ispisati onaj koji je raniji. Datume unosimo tako što u posebnim promenljivama navedemo dan, mesec i godinu, za svaki od njih.

let d1 = 12;
let m1 = 12;
let g1 = 2021;

let d2 = 20;
let m2 = 2;
let g2 = 2021;

if (g1 < g2) {
  console.log(`Raniji datum je: ${d1}/${m1}/${g1}`);
} else if (g2 < g1) {
  console.log(`Raniji datum je: ${d2}/${m2}/${g2}`);
} else {
  if (m1 < m2) {
    console.log(`Raniji datum je: ${d1}/${m1}/${g1}`);
  } else if (m2 < m1) {
    console.log(`Raniji datum je: ${d2}/${m2}/${g2}`);
  } else {
    // Obuhvata one slucajeve kada su i meseci isti!
    if (d1 < d2) {
      console.log(`Raniji datum je: ${d1}/${m1}/${g1}`);
    } else if (d2 < d1) {
      console.log(`Raniji datum je: ${d2}/${m2}/${g2}`);
    } else {
      console.log("Datumi su isti.");
    }
  }
}
