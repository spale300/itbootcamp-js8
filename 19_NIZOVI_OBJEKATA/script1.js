let student1 = {
  ime: "Dragan",
  prezime: "Aetrovic",
  godStudija: 3,
  ocene: [8, 9, 7, 8, 8, 10, 9, 6, 7, 8, 8, 9, 10, 9, 7],
};
let student2 = {
  ime: "Milan",
  prezime: "Markovic",
  godStudija: 4,
  ocene: [8, 9, 7, 8, 9, 10, 9, 7, 9, 9, 7, 8, 10, 8],
};
let student3 = {
  ime: "Milos",
  prezime: "Zarkovic",
  godStudija: 4,
  ocene: [8, 9, 7, 8, 9, 10, 9, 7, 9, 9, 7, 8, 10, 8],
};
let student4 = {
  ime: "Mosa",
  prezime: "Aijade",
  godStudija: 4,
  ocene: [6, 7, 9, 8, 9, 7, 8, 8, 9, 10, 9, 7],
};
let studenti = [student1, student2, student3, student4];

let prosek = (niz) => {
  let suma = 0;
  niz.forEach((el) => {
    suma += el;
  });
  return suma / niz.length;
};

let najStud = (niz) => {
  let naj = studenti[0];

  niz.forEach((el) => {
    if (prosek(naj.ocene) < prosek(el.ocene)) {
      naj = el;
    }
  });
  return `${naj.ime} ${naj.prezime}`;
};

console.log(najStud(studenti));

let najStud1 = (niz) => {
  let ime = "";
  let prezime = "";
  let najProsek = -1;

  niz.forEach((el) => {
    let zbir = 0;
    el.ocene.forEach((ocene) => {
      zbir += ocene;
    });
    let prosek = zbir / el.ocene.length;
    // > Vraca prvog studenta sa najvecim prosekom
    // >= Vraca poslednjeg studenta sa najvecim prosekom
    if (prosek > najProsek) {
      najProsek = prosek;
      ime = el.ime;
      prezime = el.prezime;
    }
  });
  return `${ime} ${prezime}`;
};

console.log(najStud1(studenti));

let sviNajStud = (niz) => {
  let najProsek = -1;

  niz.forEach((el) => {
    let zbir = 0;
    el.ocene.forEach((ocene) => {
      zbir += ocene;
    });
    let prosek = zbir / el.ocene.length;

    if (prosek > najProsek) {
      najProsek = prosek;
    }
  });

  niz.forEach((el) => {
    if (najProsek == prosek(el.ocene)) {
      console.log(`${el.ime} ${el.prezime}`);
    }
  });
};

sviNajStud(studenti);
