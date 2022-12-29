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
});
minus.addEventListener("click", () => {
  brojac1--;
  if (brojac1 < 0) {
    brojac1 = 0;
  }
  span.innerHTML = brojac1;
});
