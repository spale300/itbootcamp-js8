function sum(a, b) {
  return a + b;
}

console.log(sum(3, 9));

// arrow

let suma = (a, b) => a + b;

rez = suma(5, 6);
console.log(rez);

a = 5;
b = 6;

a > b ? console.log(a) : console.log(b);

let hello = () => console.log(`Hello world!`);

hello();

let echo = (s1, s2) => {
  let rezultat = s1 + ", " + s2;
  console.log(rezultat);
};

echo("Stefan", "Spasic");

let ime = (ime, prezime, godine) => {
  if (godine >= 18) {
    let ispis = `<p>Osoba ${ime} ${prezime} je punoletna.</p>`;
    return ispis;
  } else {
    let ispis = `<p>Osoba ${ime} ${prezime} je maloletna.</p>`;
    return ispis;
  }
};

document.body.innerHTML += ime("Stefan", "Spasic", 28);

//03.Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.

let neparan = (b) => (b % 2 != 0 ? true : false);
let neparan1 = (b) => b % 2 != 0;

// 1) Ako arrow f-ji prosledjujemo TACNO JEDAN parametarm onda () nisu obavezne
// 2) Ako se telo arrow f-je sastoji SAMO od return naredbe, ona nije obavezna.

console.log(neparan1(7));

//04.Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

let maks2 = (a, b) => (a > b ? a : b);

let maks4 = (a, b, c, d) => maks2(maks2(a, b), maks2(c, d));

let maks4a = (a, b, c, d) => mak2((maks2(a, b), c), d);

console.log(maks4(23, 636, 313, 213));

//05.
let slika = (img) => {
  document.write(`<img src="${img}">`);
};
slika(`slika1.jpg`);

//06.

let text = (boja) => {
  document.write(`<p style="color:${boja};
font-size:34px;">tekst</p>`);
};

text("green");
text("red");
text("yellow");
text("blue");

let sredina = (a, b) => {
  let suma = 0;
  let brojBrojeva = 0;
  for (let i = a; i <= b; i++) {
    if (i % 10 == 3) {
      suma += i;
      brojBrojeva++;
    }
  }
  return suma / brojBrojeva;
};

console.log(sredina(13, 66));
