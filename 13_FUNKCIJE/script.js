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
