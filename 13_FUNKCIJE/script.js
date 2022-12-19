function zdravo() {
  console.log("Hello world!");
}

zdravo();

for (i = 1; i <= 5; i++) {
  zdravo();
}

function pozdrav(ime) {
  console.log(`Zdravo ${ime}.`);
}

pozdrav(`Stefan`);

function hello(ime, prezime) {
  console.log(`Hello, ${ime} ${prezime}.`);
}

hello("Stefan", "Spasic");

//06. Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.

function bojiParagraf(color) {
  document.write(`<p style="color:${color};">Obojen tekst</p>`);
}

bojiParagraf("red");
bojiParagraf("blue");

//02. Napisati funkciju zbir koja računa zbir dva realna broja. Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja.

function zbir(a, b) {
  let zbir = a + b;
  console.log(`Zbir je: ${zbir}`);
}

zbir(1, 5);

//03.Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.

function slika(slika) {
  document.write(`<img src="${slika}">`);
}

slika("slika1.jpg");

//13. Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta

function fontText(font) {
  document.write(`<p style="font-size:${font}px;">Neki tekst</p>`);
}

fontText(67);

//14.Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora.

for (i = 10; i < 15; i++) {
  function text(size) {
    document.write(`<p style="font-size:${size}px;">Neki tekst</p>`);
  }
  text(i);
}

//03. Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.

function neparan(n) {
  if (n % 2 == 0) {
    return `Paran broj`;
  } else {
    return `Neparan broj`;
  }
}

let tekst = neparan(5);
console.log(tekst);
document.write(tekst);

//04.Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

function maks2(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

function maks4(a, b, c, d) {
  if (a > b && a > c && a > d) {
    return a;
  } else if (b > c && b > d) {
    return b;
  } else if (c > d) {
    return c;
  } else {
    return d;
  }
}

let dva = maks2(113, 33);
console.log(dva);

let cet = maks4(542, 33, 225, 3);
console.log(`Najveci broj je ${cet}.`);

function maks(a, b, c, d) {
  return maks2(maks2(a, b), maks2(c, d));
}

console.log(maks(33, 445, 23, 664));

//16.

function pro(t, p, n) {
  if (p > t) {
    return `Cekanje je 0s`;
  } else {
    return `Cekanje je ${Math.abs(n - (t - p))}`;
  }
}
