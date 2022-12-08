// Prioritet u logickinm operatorima :
// 1. !
// 2.

let a = 5;
let b = 6;

if (a == 5 && b == 6) {
  console.log(`And`);
}

if (a == 5 || b == 4) {
  console.log("Or");
}

let c = 7;
if (a == 5 && b == -6 && c == 7) {
  console.log(`Sva tri su tacna.`);
} else {
  console.log(`Neki od uslova nije tacan.`);
}

if (a == 5 || b == 6 || c == 7) {
  console.log(`Makar jedan od uslova je tacan.`);
} else {
  console.log(`Svi uslovi su netacni.`);
}

if (c != 7) {
  console.log(`c je razlicito od 7.`);
}

if (!(c == 7)) {
  console.log(`c je razlicito od 7.`);
}

// 21. Naći koji je najveći od tri uneta broja a, b i c, korišćenjem logičkih operatora.

if (a > b && a > c) {
  console.log(`Najveci broj je ${a}`);
} else if (b > a && b > c) {
  console.log(`Najveci broj je ${b}`);
} else {
  console.log(`Najveci broj je ${c}`);
}

// 22. U promenljivu uneti broj koji predstavlja temperaturu vazduha. Na ekranu ispisati „ekstremna temperatura“ ukoliko je temperatura manja od -15 stepeni Celzijusovih ili veća od 40 stepeni Celzijusovih.

let t = 9;

if (t < -15 || t > 40) {
  console.log(`Ekstremna temperatura(${t}C).`);
} else {
  console.log(`Temperatura(${t}C).`);
}

// 23.Ispitati da li je trenutna godina prestupna. (godinu preuzeti iz vremena na Vašem računaru).Godina je prestupna ako je deljiva sa 4 i nije deljiva sa 100 ili ako je deljiva sa 400.

let year = new Date().getFullYear();

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log(`Godina ${year}. je prestupna.`);
} else {
  console.log(`Godina ${year}. nije prestupna.`);
}

// 24. Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara, ispitati “otvoreno” ukoliko je butik trenutno otvoren. U suprotnom ispisati “zatvoreno”. Ko bude imao vremena: Ukoliko je butik trenutno otvoren, prikazati i sličicu otvorenih vrata na ekranu. Ukoliko je butik trenutno zatvoren, prikazati i sličicu zatvorenih vrata.

let dan = new Date().getDay();
let h = new Date().getHours();

console.log(dan);

if (dan == 0 || dan == 6) {
  //vikend
  if (h >= 10 && h < 18) {
    console.log(`Vikend je i butik je trenutno otvoren.`);
    document.write(
      `<img src="https://thumbs.dreamstime.com/b/open-sign-isolated-11711817.jpg">`
    );
  } else {
    console.log(`Vikend je i butik je trenutno zatvoren.`);
    document.write(
      `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-NdwjF59yi2rPb5Mqf5iy-UPUAeXl-IYyzw&usqp=CAU">`
    );
  }
} else {
  //radni dan
  if (h >= 9 && h < 12) {
    console.log(`Radni dan je i butik je otvoren.`);
    document.write(
      `<img src="https://thumbs.dreamstime.com/b/open-sign-isolated-11711817.jpg">`
    );
  } else {
    console.log("Radni dan je i butik je trenutno zatvoren.");
    document.write(
      `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-NdwjF59yi2rPb5Mqf5iy-UPUAeXl-IYyzw&usqp=CAU">`
    );
  }
}
