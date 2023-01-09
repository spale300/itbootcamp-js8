let btnHello = document.getElementById("hello");
btnHello.addEventListener("click", () => {
  console.log("Hello");
});

let btnHello1 = document.getElementById("hello2");

btnHello1.addEventListener("dblclick", () => {
  console.log("Hello Hello");
});

//Napraviti dugme klikom na koje se u konzoli ispisuje vrednost brojača br. Brojač na početku ima vrednost 1, a svaki put kada se klikne na dugme povećati vrednost brojača za 1.

let brojac = document.getElementById("brojac");

let broj = 1;
// brojac.addEventListener("click", () => {
//   console.log(`Brojac je ${broj++}`);
// });

// Napraviti paragraf i vrednost prethodne funkcije ispisivati u paragrafu umesto u konzoli.

let p = document.createElement("p");

p.innerHTML = "JS";
document.body.appendChild(p);

brojac.addEventListener("click", () => {
  p.innerHTML = broj++;
});

//Napraviti dugme + i dugme -.
// Kada se klikne na dugme +, na ekranu prikazati vrednost brojača povećanu za 1.
// Kada se klikne na dugme -, na ekranu prikazati vrednost brojača smanjenu za 1.

let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let span = document.getElementById("rez");
let brojac1 = 0;

plus.addEventListener("click", () => {
  brojac1++;
  span.innerHTML = brojac1;

  if (brojac1 <= 10) {
    span.style.color = "red";
  } else {
    span.style.color = "green";
  }
});

minus.addEventListener("click", () => {
  brojac1--;
  if (brojac1 < 0) {
    brojac1 = 0;
  }

  if (brojac1 <= 10) {
    span.style.color = "red";
  } else {
    span.style.color = "green";
  }

  span.innerHTML = brojac1;
});

//Napraviti input polje i dugme.
// U input polje treba da se unese ime neke osobe, a na ekranu u paragrafu da se ispiše Zdravo i ime osobe preuzeto iz input polja.

// let unos = document.getElementById("ime");
// let btn = document.getElementById("btn");
// let prikaz = document.getElementById("prikaz");
// let pol = document.querySelectorAll("input[name='pol']");

// btn.addEventListener("click", () => {
//   let value = unos.value;
//   prikaz.innerHTML = `Pozdrav ${value}`;
//   // unos.value = ""; // prazno polje posle klika na dugme
//   // mora unos.value ne moze promenljiva value
// });
///////////////////mini projekat
// // Dopuniti 5. zadatak dodavanjem radio button polja gde korisnik može odabrati svoj pol (muški, ženski ili neopredeljen).
// // Nakon duplog klika na dugme, u konzoli ispisati pol koji je osoba odabrala.
// btn.addEventListener("dblclick", () => {
//   let checkedPol = document.querySelector("input[name='pol']:checked");

//   let value = checkedPol.value;

//   console.log(value);

//   ////
//   let inputRadios = document.getElementsByName("pol");
//   inputRadios.forEach((el) => {
//     if (el.checked) {
//       console.log(el.value);
//     }
//   });
// });

//

// let textKvadrat = document.getElementById("kvadrat");
// let btnKvadrat = document.getElementById("btnKvadrat");
// let rezKvadrat = document.getElementById("rezKvadrat");

// let textPolovina = document.getElementById("polovina");
// let btnPolovina = document.getElementById("btnPolovina");
// let rezPolovina = document.getElementById("rezPolovina");

// let textPovrsina = document.getElementById("povrsina");
// let btnPovrsina = document.getElementById("btnPovrsina");
// let rezPovrsina = document.getElementById("rezPovrsina");

// btnKvadrat.addEventListener("click", () => {
//   let value = textKvadrat.value;
//   value = value * value;
//   rezKvadrat.innerHTML = value;
// });
// btnPolovina.addEventListener("click", () => {
//   let value = textPolovina.value;
//   value = value / 2;
//   rezPolovina.innerHTML = value;
// });
// btnPovrsina.addEventListener("click", () => {
//   let value = textPovrsina.value;
//   value = 2 * value * 3.14;
//   rezPovrsina.innerHTML = value;
// });

//v2

let text = document.querySelectorAll("input[type='text']");
console.log(text);
let btn1 = document.querySelectorAll("input[type='button']");
let span1 = document.querySelectorAll("span");
console.log(span1);

btn1.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    let value = text[i].value;

    if (i == 0) {
      value = value * value;
      span1[i].innerHTML = value;
    } else if (i == 1) {
      value = value / 2;
      span1[i].innerHTML = value;
    } else {
      value = value * value * Math.PI;
      span1[i].innerHTML = value;
    }
  });
});
