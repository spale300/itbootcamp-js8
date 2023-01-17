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

let najboljeOcenjeni = (niz) => {
  let naj = niz[0];
  niz.forEach((f) => {
    if (naj.prosek() < f.prosek()) {
      naj = f;
    }
  });
  return naj;
};
console.log(najboljeOcenjeni(filmovi));

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

// Napraviti funkciju najmanjaOcenaNajboljeg kojoj se prosleđuje niz filmova a ona određuje najbolji film i ispisuje njegovu najslabiju ocenu.

let najmanjaOcenaNajboljeg = (niz) => {
  let najFilm = najboljeOcenjeni(niz);
  let najslabijaOcena = najFilm.ocene[0];
  najFilm.ocene.forEach((el) => {
    if (najslabijaOcena > el) {
      najslabijaOcena = el;
    }
  });
  console.log(najslabijaOcena);
};

najmanjaOcenaNajboljeg(filmovi);

let najmanjaOcena = (niz) => {
  let najmanja = niz[0].ocene[0];

  niz.forEach((el) => {
    el.ocene.forEach((o) => {
      if (o < najmanja) {
        najmanja = o;
      }
    });
  });

  return najmanja;
};

console.log(najmanjaOcena(filmovi));

//Napisati funkciju najcescaOcena kojoj se prosleđuje niz ocena, a ona vraća ocenu koju su filmovi najčešće dobijali.

let sveOcene = (niz) => {
  let arrSveOcene = [];

  niz.forEach((el) => {
    // arrSveOcene.push(el.ocene); // daje niz u kome su ocene za svaki od filmova podnizovi

    arrSveOcene = arrSveOcene.concat(el.ocene); // daje niz svih ocena u jednom nizu
  });

  return arrSveOcene;
};

console.log(sveOcene(filmovi));

let najcescaOcena = (niz) => {
  let najcesci = niz[0];
  let brojac = 1;

  for (let i = 0; i < niz.length; i++) {
    let tekuci = niz[i];
    let tekuciPojavljivanje = 0;

    for (let j = 0; j < niz.length; j++) {
      if (tekuci == niz[j]) {
        tekuciPojavljivanje++;
      }
    }

    if (tekuciPojavljivanje > brojac) {
      brojac = tekuciPojavljivanje;
      najcesci = tekuci;
    }
  }

  return najcesci;
};

console.log(najcescaOcena(sveOcene(filmovi)));

//Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni (veća im je prosečna ocena) od prosleđene ocene.

let iznadOcene = (ocena, niz) => {
  let nizFilmova = [];

  niz.forEach((el) => {
    if (el.prosek() > ocena) {
      nizFilmova.push(el);
    }
  });
  return nizFilmova;
};

console.log(iznadOcene(8, filmovi));

//Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz filmova  a koja treba da na ekranu da ispiše sve podatke o najnovijem filmu koji zadovoljava prosleđenu ocenu

let iznadOceneNoviji = (ocena, niz) => {
  let nizFilmova = iznadOcene(ocena, niz);
  let noviji = nizFilmova[0];

  nizFilmova.forEach((el) => {
    if (el.godinaIzdanja > noviji.godinaIzdanja) {
      noviji = el;
    }
  });

  return noviji;
};

console.log(iznadOceneNoviji(8, filmovi));
