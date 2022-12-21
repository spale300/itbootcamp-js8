//Napisati funkciju koja ispisuje sve elemente niza u jednom redu, ali sa varijantama:
//U konzoli,
//U nekom div elementu na stranici.

function ispisKonzola(poruka) {
  console.log(poruka);
}

function ispisStranica(poruka) {
  let div = document.getElementById("container");
  div.innerHTML = poruka;
}

function ispisNiza(niz, cb) {
  let poruka = "";
  for (let i = 0; i < niz.length; i++) {
    poruka += niz[i] + " ";
  }
  cb(poruka);
}

let a = [6, 33, 62, -3, -66];
let b = [16, 3, 6, -33, -616];

ispisNiza(a, ispisStranica);

a.forEach(ispisKonzola);
// forEach petlja je metoda koja za svaki element niza poziva callback fuknciju, a koa parametar te callback funkcije prosledjuje bas taj element niza.
// Konkretno, 26 linija koda za niz a poziva sledece:
// ispisKonzola(6);
// ispisKonzola(33);
// ispisKonzola(62);
//...

b.forEach(ispisKonzola);

a.forEach(function (element) {
  console.log(element);
});
