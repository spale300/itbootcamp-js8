// console.log(document);
// console.log(document.body);

// // let el1 = document.getElementById("p2");
// // console.log(el1);

// let el2 = document.getElementsByClassName("par");
// console.log(el2);

// let el3 = document.getElementsByTagName("p");
// console.log(el3);

// let el4 = document.getElementsByTagName("a");
// console.log(el4);

// let el5 = document.getElementsByName("p");
// console.log(el5);

// //pristup elementima HTML collection

// for (let i = 0; i < el2.length; i++) {
//   console.log(el2[i]);
// }

// let el2a = Array.from(el2);
// el2a.forEach((el) => {
//   console.log(el);
// });

// // pristup elementima node liste

// el5.forEach((el) => {
//   console.log(el);
// });

// // primena metoda qs

// // let t1 = document.querySelector("#p2");
// // console.log(t1);

// // let t2 = document.querySelectorAll(".par");
// // console.log(t2);

// //Dohvatiti prvi paragraf na stranici.

// // let prviP = document.querySelector("p");
// // console.log(prviP);

// let prviDiv = document.querySelector("div.error");
// console.log(prviDiv);

// let posRed = document.querySelector("tr:last-child");
// console.log(posRed);

// let slike = document.querySelectorAll("img");
// // slike.forEach((slika) => {
// //   console.log(slika);
// // });

// // t1.innerHTML += "Novi Tekst paragrafa sa id-jem <span class='bold'> p2 </span>";

// // for (let i = 0; i < t2.length; i++) {
// //   t2[i].innerHTML = "Promena teksta u elementu sa klasom PAR";
// // }

// // let link = document.querySelector("a");
// // link.forEach((l) => {
// //   console.log(l);
// // });

// // link.href = "https://www.google.com/";
// // link.class = "bold";
// // link.target = "_blank";

// // link.style.color = "red";
// // link.style.border = "1px solid blue";
// // link.style.fontSize = "24px";

// // link.setAttribute("style", "color:red;");
// // link.setAttribute("id", "link");

// // let divErr = document.querySelectorAll("div.error");
// // divErr.forEach((el) => {
// //   el.innerHTML += "<h1>Greska</h1>";
// // });

// // let sviP = document.querySelectorAll("p");

// // sviP.forEach((p) => {
// //   p.innerHTML += " VAZNO!!!";
// // });

// // sviP.forEach((p, i) => {
// //   p.innerHTML += ` ${(i + 1) ** 2}`;
// //   console.log(i);
// // });

// // slike.forEach((slika, i) => {
// //   slika.alt = `slika${i + 1}`;
// // });

// // sviP.forEach((p) => {
// //   p.style.color = "purple";
// // });

// // sviP.forEach((p, i) => {
// //   if (i % 2 == 0) {
// //     p.style.backgroundColor = "green";
// //   } else {
// //     p.style.backgroundColor = "red";
// //   }
// // });

// //01
// let link = document.querySelectorAll("a");

// link.forEach((el, i) => {
//   el.style.padding = " 5px";
//   el.style.fontSize = "18px";
//   el.style.textDecoration = "none";

//   if (i % 2 == 0) {
//     el.style.backgroundColor = "purple";
//   } else {
//     el.style.backgroundColor = "white";
//   }
// });

// //02.
// let slike1 = document.querySelectorAll("img");

// slike1.forEach((slika) => {
//   if (slika.src.includes(".JPG")) {
//     slika.style.border = "2px solid red";
//   }
// });

// //03

// link.forEach((el) => {
//   if (el.target == "_blank") {
//     el.target = "_top";
//   } else {
//     el.target = "_blank";
//   }
// });

// console.log(link);

// let table = document.querySelector("table");
// console.log(table);
// console.log(table.parentNode);
// console.log(table.childNodes[0]);
// console.log(table.childNodes[1]);
// console.log(table.childNodes[1].childNodes[0]);

let allP = document.querySelectorAll("p");
//01
allP.forEach((p, i) => {
  if (i % 2 == 0) {
    p.classList.add("error");
  } else {
    p.classList.add("success");
  }
  //02
  if (i % 3 == 0) {
    p.style.fontSize = "15px";
  } else if (i % 3 == 1) {
    p.style.fontSize = "20px";
  } else {
    p.style.fontSize = "25px";
  }
  //03

  if (p.textContent.includes("success")) {
    p.classList.add("success");
  }
  if (p.textContent.includes("error")) {
    p.classList.add("error");
  }
  //04

  p.classList.toggle("error");
});
