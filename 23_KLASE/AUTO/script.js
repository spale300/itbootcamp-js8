import { Auto } from "./auto.js";

let a1 = new Auto("Audi", "Bela", true);

console.log(a1);
console.log(a1._marka);

let a2 = new Auto("Opel", "Crvena", false);
console.log(a2);

// Klasa - sablon, korisnicki tip
// Objekat - instanaca (realizacija) klase = promenljiva neke klase

a1.sviraj();
a2.sviraj();

a1._marka = "Skoda";
console.log(a1);

a1._marka = "";
console.log(a1);

a1.marka = "Peugeot";
console.log(a1);

a1.marka = "";
a1.boja = "zuta";
a1.imaKrov = false;
console.log(a1);

console.log(a1.marka + " " + a1.boja + " " + a1.imaKrov);

let a3 = new Auto("", "", 0);
console.log(a3);
