//Napisati funkciju koja ispisuje sve elemente niza u jednom redu, ali sa varijantama:
//U konzoli,
//U nekom div elementu na stranici.

// function ispisKonzola(poruka) {
//   console.log(poruka);
// }

// function ispisStranica(poruka) {
//   let div = document.getElementById("container");
//   div.innerHTML = poruka;
// }

// function ispisNiza(niz, cb) {
//   let poruka = "";
//   for (let i = 0; i < niz.length; i++) {
//     poruka += niz[i] + " ";
//   }
//   cb(poruka);
// }

// let a = [6, 33, 62, -3, -66];
// let b = [16, 3, 6, -33, -616];

// ispisNiza(a, ispisStranica);

// a.forEach(ispisKonzola);
// forEach petlja je metoda koja za svaki element niza poziva callback fuknciju, a koa parametar te callback funkcije prosledjuje bas taj element niza.
// Konkretno, 26 linija koda za niz a poziva sledece:
// ispisKonzola(6);
// ispisKonzola(33);
// ispisKonzola(62);
//...

// b.forEach(ispisKonzola);

// a.forEach(function (element) {
//   console.log(element);
// });

// Zadatak 02

let sumaEle = (niz) => {
  let suma = 0;
  niz.forEach((element) => {
    suma += element;
  });
  return suma;
};

let a = [1, 3, 4, 6];

console.log(sumaEle(a));

// Zadatak 0

let maxVr = (niz) => {
  let max = niz[0];

  niz.forEach((el) => {
    if (el > max) {
      max = el;
    }
  });
  return max;
};

console.log(maxVr(a));

// Zadatak 07 Izvuci index najveceg broja

let indexMaxVr = (niz) => {
  let idx = 0;
  let max = niz[0];

  niz.forEach((el, i) => {
    if (el > max) {
      max = el;
      idx = i;
    }
  });
  return idx;
};

console.log(indexMaxVr(a));

let b = [1, 3, 6, -8, 6, 6, 4];

console.log(indexMaxVr(b)); //Vraca vrednost a

let indexMaxVr2 = (niz) => {
  let max = maxVr(niz);
  let index = undefined;

  niz.forEach((el, i) => {
    if (el == max && index == undefined) {
      index = i;
    }
  });
  return index;
};

console.log(indexMaxVr2(b));

let str = ["kosarak", "fudbal", "tenis", "sah"];

//19.Ispisati dužinu svakog elementa u nizu stringova.

let duzinaStringa = (niz) => {
  let duzinaStr = [];
  {
    niz.forEach((el) => {
      duzinaStr.push(el.length);
    });
  }
  return duzinaStr;
};

console.log(duzinaStringa(str));

//20. Odrediti element u nizu stringova sa najvećom dužinom.

let najduziElm = (niz) => {
  let max = 0;

  niz.forEach((el) => {
    if (max < el.length) {
      max = el.length;
    }
  });

  let maxStr = undefined;
  niz.forEach((el) => {
    if (el.length == max) {
      maxStr = el;
    }
  });
  return maxStr;
};

console.log(najduziElm(str));

//21.Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.

let prosecnaDuzina = (niz) => {
  let max = 0;
  niz.forEach((el) => {
    max += el.length;
  });

  return max / niz.length;
};

console.log(prosecnaDuzina(str));

let brojNatprosecnoDugih = (niz) => {
  let duz = prosecnaDuzina(niz);
  let br = 0;

  niz.forEach((el) => {
    if (duz < el.length) {
      br++;
    }
  });
  return br;
};

console.log(brojNatprosecnoDugih(str));

//22.Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’.

let brojSadrziA = (niz) => {
  let br = 0;
  niz.forEach((el) => {
    if (el.includes("a") || el.includes("A")) {
      br++;
    }
  });
  return br;
};

console.log(brojSadrziA(str));

//23.Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’.

let brojPocinjeA = (niz) => {
  let br = 0;
  niz.forEach((el) => {
    if (el[0] == "a" || el[0] == "A") {
      br++;
    }
  });
  return br;
};

console.log(brojPocinjeA(str));
