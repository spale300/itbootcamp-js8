console.log(document);
console.log(document.body);

let el1 = document.getElementById("p2");
console.log(el1);

let el2 = document.getElementsByClassName("par");
console.log(el2);

let el3 = document.getElementsByTagName("p");
console.log(el3);

let el4 = document.getElementsByTagName("a");
console.log(el4);

let el5 = document.getElementsByName("p");
console.log(el5);

//pristup elementima HTML collection

for (let i = 0; i < el2.length; i++) {
  console.log(el2[i]);
}

let el2a = Array.from(el2);
el2a.forEach((el) => {
  console.log(el);
});

// pristup elementima node liste

el5.forEach((el) => {
  console.log(el);
});

// primena metoda qs

let t1 = document.querySelector("#p2");
console.log(t1);

let t2 = document.querySelectorAll(".par");
console.log(t2);
