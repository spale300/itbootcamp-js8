import { Pacijent } from "./pacijent.js";

let p1 = new Pacijent("Stefan", 1.83, 88);
let p2 = new Pacijent("Goran", 2.02, 105);
let p3 = new Pacijent("Milan", 1.69, 190);
let p4 = new Pacijent("Ana", 1.73, 65);

let pacijenti = [p1, p2, p3, p4];

//Ispisati podatke o pacijentu sa najmanjom tezinom.

// let btn1 = document.getElementById("btn1");
// btn1.addEventListener("click", () => {
//   let najmanjaPacijent = pacijenti[0];
//   pacijenti.forEach((el) => {
//     if (el.tezina < najmanjaPacijent.tezina) {
//       najmanjaPacijent = el;
//     }
//   });

//   najmanjaPacijent.stampaj();

//   let pMinTezina = document.getElementById("minTezina");
//   pMinTezina.innerHTML = najmanjaPacijent.stampajListu();
// });

// let btn2 = document.getElementById("btn2");
// btn2.addEventListener("click", () => {
//   let najveciBmi = pacijenti[0];
//   pacijenti.forEach((el) => {
//     if (el.bmi() > najveciBmi.bmi()) {
//       najveciBmi = el;
//     }
//   });

//   najveciBmi.stampaj();
//   let pNajveciBmi = document.getElementById("najvecaBmi");
//   pNajveciBmi.innerHTML = najveciBmi.stampajListu();
// });

// let btn3 = document.getElementById("btn3");
// btn3.addEventListener("click", () => {
//   let sadrziA = document.getElementById("sadrziA");
//   pacijenti.forEach((el) => {
//     if (el.ime.includes("a") || el.ime.includes("A")) {
//       sadrziA.innerHTML += el.stampajListu();
//     }
//   });
// });

let btn = document.querySelectorAll("button");

btn.forEach((el, i) => {
  el.addEventListener("click", () => {
    if (i == 0) {
      let najmanjaPacijent = pacijenti[0];
      pacijenti.forEach((el) => {
        if (el.tezina < najmanjaPacijent.tezina) {
          najmanjaPacijent = el;
        }
      });

      najmanjaPacijent.stampaj();

      let pMinTezina = document.getElementById("minTezina");
      pMinTezina.innerHTML = najmanjaPacijent.stampajListu();
    }
    if (i == 1) {
      let najveciBmi = pacijenti[0];
      pacijenti.forEach((el) => {
        if (el.bmi() > najveciBmi.bmi()) {
          najveciBmi = el;
        }
      });

      najveciBmi.stampaj();
      let pNajveciBmi = document.getElementById("najvecaBmi");
      pNajveciBmi.innerHTML = najveciBmi.stampajListu();
    }

    if (i == 2) {
      let sadrziA = document.getElementById("sadrziA");
      pacijenti.forEach((el) => {
        if (el.ime.includes("a") || el.ime.includes("A")) {
          sadrziA.innerHTML += el.stampajListu();
        }
      });
    }
  });
});

// Napraviti funkciju srednjaVisina kojoj se prosleđuje niz pacijanata a koja određuje i vraća srednju visinu pacijenata.

let srednjaVisina = (niz) => {
  let suma = 0;
  let broj = niz.length;
  niz.forEach((el) => {
    suma += el.visina;
  });
  return suma / broj;
};

console.log(srednjaVisina(pacijenti));

let divAvgVisina = document.querySelector("#avgVisina");
divAvgVisina.innerHTML = srednjaVisina(pacijenti);
