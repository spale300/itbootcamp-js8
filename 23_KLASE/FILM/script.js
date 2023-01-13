import { Film } from "./film.js";

let f1 = new Film("Dark", "Random", 2018, [9, 10, 9, 8, 10]);

console.log(f1);

console.log(f1);

f1.stampaj();

let f2 = new Film(
  "Gospodar Prstenova",
  "Peter Jackson",
  2001,
  [7, 10, 8, 6, 9, 10]
);
let f3 = new Film("", "", 1901, [6, 4, 5, 7, 8, 2]);

console.log(f2);

f2.naslov = "Ime filma";
f2.reziser = "Petar Petrovic";
f2.godinaIzdanja = 2000;

console.log(f2);

f2.stampaj();

f1.stampaj();

let filmovi = [f1, f2, f3];

console.log(f3.ocene);

console.log(`Prosecna ocena ${f1.naslov} filma je ${f1.prosek()}`);

console.log("==============================================");

//Napraviti funkciju vekFilmova kojoj se prosleđuje niz filmova i ceo broj (vek), a funkcija ispisuje samo one filmove koji su stvoreni u prosleđenom veku

let vekFilmova = (niz, vek) => {
  niz.forEach((el) => {
    let vekFilma = Math.ceil(el.godinaIzdanja / 100);

    if (vekFilma == vek) {
      console.log(el);
    }
  });
};

vekFilmova(filmovi, 20);

//Napraviti funkciju prosecnaOcena kojoj se prosleđuje niz filmova, a koja određuje i vraća  prosečnu ocenu svih filmova.

let prosecnaOcena = (niz) => {
  let suma = 0;
  let broj = 0;
  niz.forEach((el) => {
    el.ocene.forEach((ocena) => {
      suma += ocena;
      broj++;
    });
  });
  return suma / broj;
};

console.log(prosecnaOcena(filmovi));

//Napraviti funkciju najboljeOcenjeni kojoj se prosleđuje niz filmova, a ona vraća najbolje ocenjeni film. DOmaci

//Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona vraća film koji je najbliži prosečnoj oceni svih filmova.

let osrednjiFilm = (niz) => {
  let avgSvihFilmova = prosecnaOcena(niz);
  let minFilm = niz[0];
  let minRastojanje = Math.abs(avgSvihFilmova - minFilm.prosek());

  niz.forEach((el) => {
    let rastojanje = Math.abs(avgSvihFilmova - el.prosek());
    if (minRastojanje > rastojanje) {
      minRastojanje = rastojanje;
      minFilm = el;
    }
  });
  return minFilm;
};

console.log(osrednjiFilm(filmovi));
