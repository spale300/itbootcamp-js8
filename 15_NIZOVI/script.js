let cars = ["Toyota", "BMW", "Volvo"];
console.log(cars);
console.log(cars[0]);

cars[1] = "Peugeot";
console.log(cars);

let razno = [15, -3.5, "hello", true, [1, 2, 3]];
console.log(razno);

//Ispis elemenata niza cars
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// pristup elementima niza razno

for (let i = 0; i < razno.length; i++) {
  console.log(razno[i]);
}

let unutrasnjiNiz = razno[4];
for (let i = 0; i < unutrasnjiNiz.length; i++) {
  console.log(unutrasnjiNiz[i]);
}

for (let i = 0; i < razno[4].length; i++) {
  console.log(razno[4][i]);
}

//uvecenje vrednosti unitrasnjeg niza za 10%;
for (let i = 0; i < razno[4].length; i++) {
  razno[4][i] *= 1.1;
}
for (let i = 0; i < razno[4].length; i++) {
  console.log(razno[4][i]);
}

//02.Odrediti zbir elemenata celobrojnog niza.

let brojevi = [8, 4, -2, 0, 1, 0];
let brojevi2 = [10, -5, 0, -3];

let sumaElem = (niz) => {
  let suma = 0;

  for (let i = 0; i < niz.length; i++) {
    suma += niz[i];
  }
  return suma;
};

console.log(sumaElem(brojevi));
console.log(sumaElem(brojevi2));

//03.Odrediti proizvod elemenata celobrojnog niza.

let proizvodElem = (niz) => {
  let proizvod = 1;
  for (let i = 0; i < niz.length; i++) {
    proizvod *= niz[i];
  }
  return proizvod;
};

let brojevi3 = [5, 1, 2];

console.log(proizvodElem(brojevi3));

//04.Odrediti srednju vrednost elemenata celobrojnog niza.
let srednjaVrednost = (niz) => {
  let suma = 0;
  for (let i = 0; i < niz.length; i++) {
    suma += niz[i];
  }
  return suma / niz.length;
};

console.log(srednjaVrednost(brojevi3));

//05.Odrediti maksimalnu vrednost u celobrojnom nizu.

let brojevi4 = [13, -2, -6, 12, 8, -19, -1, 25];

let max = (niz) => {
  let max = niz[0];

  for (let i = 1; i < niz.length; i++) {
    if (niz[i] > max) {
      max = niz[i];
    }
  }
  return max;
};

console.log(max(brojevi4));

//06.Odrediti minimalnu vrednost u celobrojnom nizu.

let min = (niz) => {
  let min = 0;

  for (let i = 0; i < niz.length; i++) {
    if (niz[i] < min) {
      min = niz[i];
    }
  }
  return min;
};

console.log(min(brojevi4));

//07.Odrediti indeks maksimalnog elementa celobrojnog niza.

let indMaxNiza = (niz) => {
  let maks = max(niz);
  let indeks = -1; // pozicija -1 je neutralana zato sto index ide od 0 do ...

  for (let i = 0; i < niz.length; i++) {
    if (maks == niz[i]) {
      indeks = i;
    }
  }
  return indeks;
};

console.log(indMaxNiza(brojevi4));

//v3
let indMaxNiza2 = (niz) => {
  let maks = max(niz);
  let indeks = -1; // pozicija -1 je neutralana zato sto index ide od 0 do ...

  for (let i = 0; i < niz.length; i++) {
    if (maks == niz[i]) {
      indeks = i;
      // break //break ili return index
      return indeks;
    }
  }
};

console.log(indMaxNiza(brojevi4));

//09.Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.

let veciOdSredine = (niz) => {
  let srednja = srednjaVrednost(niz);
  let brojElemenata = 0;

  for (let i = 0; i < niz.length; i++) {
    if (niz[i] > srednja) {
      brojElemenata++;
    }
  }
  return brojElemenata;
};

console.log(veciOdSredine(brojevi4));
console.log(veciOdSredine(brojevi3));

//10.Izračunati zbir pozitivnih elemenata celobrojnog niza.

let zbirPozitivnih = (niz) => {
  let suma = 0;
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] > 0) {
      suma += niz[i];
    }
  }
  return suma;
};

console.log(zbirPozitivnih(brojevi4));

//11. Odrediti broj parnih elemenata u celobrojnom nizu.

let parniBrojevi = (niz) => {
  let parni = 0;
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] % 2 == 0) {
      parni++;
    }
  }
  return parni;
};

console.log(parniBrojevi(brojevi4));

//12. Odrediti broj parnih elemenata sa neparnim indeksom.

let neparniIndex = (niz) => {
  let broj = 0;

  for (let i = 0; i < niz.length; i++) {
    if (niz[i] % 2 == 0 && i % 2 != 0) {
      broj++;
    }
  }
  return broj;
};

console.log(neparniIndex(brojevi4));

//13.Izračunati sumu elemenata niza sa parnim indeksom.

let sumaParanIndex = (niz) => {
  let suma = 0;

  for (let i = 1; i < niz.length; i += 2) {
    suma += niz[i];
  }
  return suma;
};

let brojevi5 = [13, -3, -6, 12, 8, -19, -1, -25];

console.log(sumaParanIndex(brojevi5));

//14.Promeniti znak svakom elementu celobrojnog niza.

let promena = (niz) => {
  let change = [];

  for (i = 0; i < niz.length; i++) {
    // change = `${change} ${niz[i] * -1}`;
    change.push(niz[i] * -1);
  }
  return change;
};

console.log(promena(brojevi5));

//15.Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.

let neparnaPromena = (niz) => {
  for (i = 0; i < niz.length; i++) {
    if (i % 2 == 0 && niz[i] % 2 != 0) {
      niz[i] = niz[i] * -1;
    }
  }
  return niz;
};

console.log(neparnaPromena(brojevi5));
