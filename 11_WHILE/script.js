let i = 1;

while (i <= 5) {
  i++;
  console.log("Zdravo!");
}

console.log("Nakon WHILE petlje!");

// 01
console.log("Zadatak 01");
i = 1;

// while (i <= 20) {
//   console.log(i);
//   i++;
// }

// u jednom redu
let s = "";
while (i <= 20) {
  s = s + i + " ";
  i++;
}
console.log(s);

// 02.
i = 20;
console.log("Zadatak 02");
while (i > 0) {
  console.log(i);
  i--;
}

//03. Ispisati parne brojeve od 0 do 20.
console.log("Zadatak 03");
i = 1;
while (i <= 20) {
  if (i % 2 == 0) {
    console.log(i);
  }
  i++;
}

// drugii nacin
i = 2;
while (i <= 20) {
  console.log(i);
  i += 2;
}

// 04.
i = 1;
let n = 6;

while (i <= n) {
  if (i % 3 == 0) {
    document.body.innerHTML =
      document.body.innerHTML +
      "<p style= 'color:red;'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>";
  } else if (i % 3 == 1) {
    document.body.innerHTML =
      document.body.innerHTML +
      "<p style= 'color:blue;'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>";
  } else {
    document.body.innerHTML =
      document.body.innerHTML +
      "<p style= 'color:black;'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>";
  }
  i++;
}

// 06
i = 1;
let suma = 0;

while (i <= 100) {
  suma += i;

  i++;
}
console.log(`Suma brojeva od 1 do 100 jednaka je:${suma}.`);

// 07

i = 1;
n = 33;
suma = 0;

while (i <= n) {
  suma += i;
  i++;
}
console.log(`Suma brojeva od 1 do ${n} jednaka je:${suma}`);

//08

n = 2;
i = n;
let m = 6;
suma = 0;

while (i <= m) {
  suma += i;
  i++;
}

console.log(suma);

//09
i = n;
let proizvod = 1;

while (i <= m) {
  proizvod *= i;

  i++;
}

console.log(proizvod);

//10
n = 2;
m = 6;
i = n;
let sumaKvadrataParnih = 0;
let sumaKubovaNeparnih = 0;

while (i <= m) {
  if (i % 2 == 0) {
    sumaKvadrataParnih += i ** 2;
  } else {
    sumaKubovaNeparnih += i ** 3;
  }
  i++;
}

console.log(
  `Suma kvadrata parnih brojeva od ${n} do ${m} jednaka je: ${sumaKvadrataParnih}.`
);

console.log(
  `Suma kubova neparnih brojeva od ${n} do ${m} jednaka je: ${sumaKubovaNeparnih}.`
);

// 11

let k = 12;
i = 1;
let brojDelioca = 0;

while (i <= k) {
  if (k % i == 0) {
    brojDelioca++;
  }
  i++;
}

console.log(`Broj delioca broja ${k} jednak je:${brojDelioca}.`);

//12

i = 1;

if (brojDelioca == 2) {
  console.log(`Broj ${k} je prost.`);
} else {
  console.log(`Broj ${k} je slozen.`);
}

//12 uraditi za cas
