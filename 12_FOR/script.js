// 01
let w = 1;
while (w <= 20) {
  console.log(w);
  w++;
}

for (i = 1; i <= 20; i++) {
  console.log(i);
}

// 02

for (i = 20; i >= 1; i--) {
  console.log(i);
}

//03
for (i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

for (i = 2; i <= 20; i += 2) {
  console.log(i);
}

//04

//05

let n = 2;
let suma = 0;

for (i = 1; i <= n; i++) {
  suma += i;
}
console.log(suma);

//07
let m = 5;
let proizvod = 1;

for (i = n; i <= m; i++) {
  proizvod *= i;
}
console.log(proizvod);

//08
let sumaKvadrata = 0;
for (i = n; i <= m; i++) {
  sumaKvadrata = i ** 2 + sumaKvadrata;
}
console.log(sumaKvadrata);
//09
for (i = 1; i <= 3; i++) {
  document.write(`<img src="slika${i}.JPG">`);
}

// Ispisati prvih n brojeva pocevsi od broja 2

n = 3;
i = 2;
let brojParnih = 0;

while (brojParnih < n) {
  if (i % 2 == 0) {
    brojParnih++;
    console.log(`${brojParnih}. od ${n} parnih je broj ${i}.`);
  }
  i++;
}

// Koliko brojeva ucestvuje u sumiranju dok suma ne predje broj k

i = 1;
let k = 33;
suma = 0;
let brBrojeva = 0;

while (suma < k) {
  suma += i;
  brBrojeva++;
  i++;
}

console.log(brBrojeva);

// 11. Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.

let brojeviDeljivi = 0;
for (i = 5; i <= 150; i++) {
  if (i % 13 == 0) {
    console.log(i);
    brojeviDeljivi++;
  }
}

console.log(brojeviDeljivi);

// 12.Ispisati aritmetičku sredinu brojeva od n do m.

n = 10;
m = 14;
let zbir = 0;
let brojac = 0;

for (i = n; i <= m; i++) {
  zbir += i;
  brojac++;
}

console.log(zbir / brojac);

// 15.Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4.

m = 33;
zbir = 0;
brojac = 0;

for (i = n; i <= m; i++) {
  if (i % 10 == 4) {
    zbir += i;
    brojac++;
  }
}

console.log(
  `Zbir brojeva od ${n} do ${m} kojima je poslednja cifra 4. je:${zbir}, imamo ukupno ${brojac} broja/`
);

// 16.Odrediti sumu brojeva od n do m koji nisu deljivi brojem a.

let a = 7;
suma = 0;

for (i = n; i <= m; i++) {
  if (i % a != 0) {
    suma += i;
  }
}

console.log(suma);

// 18.Odrediti sa koliko brojeva je deljiv uneti broj k
brojac = 0;
k = 24;

for (i = 1; i <= k; i++) {
  if (k % i == 0) {
    brojac++;
  }
}

console.log(`Broj ${k} je deljiv sa ${brojac}. broja`);

// 19. Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.

n = 22;
let brojDelioca = 0;

for (i = 1; i <= n / 2; i++) {
  if (n % i == 0) {
    brojDelioca++;
  }
}

if (brojDelioca > 2) {
  console.log(`Broj ${n} je slozen broj.`);
} else {
  console.log(`Broj ${n} je prost broj.`);
}

//20.Napraviti tabelu sa 6 redova.Svaki red tabele treba da ima po dve ćelije (dve kolone).Svakom parnom redu dodati klasu „obojen“.Korišćenjem CSS-a, klasi obojen postaviti proizvoljnu boju pozadine.

let str = `<table border="1">`;
for (i = 1; i <= 6; i++) {
  if (i % 2 == 0) {
    str += `
    <tr class="red">
      <td>Tekst</td>
      <td>Tekst</td>
    </tr>`;
  } else {
    str += `
    <tr >
      <td>Tekst</td>
      <td>Tekst</td>
    </tr>`;
  }
}
str += `</table>`;

document.write(str);

//21.Koristeći for petlju kreirati neuređenu listu sa ugnježdenim elementima, kao što je prikazano na slici sa desne strane.

let lista = "<ul>";
for (i = 1; i <= 10; i++) {
  if (i % 3 == 0) {
    lista += `<ul><li>Element ${i}</li></ul>`;
  } else {
    lista += `<li>Element ${i}</li>`;
  }
}

lista += `</ul>`;

document.write(lista);
