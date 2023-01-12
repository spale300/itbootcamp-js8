import { Film } from "./film.js";

let f1 = new Film("Dark", "Random", 2018);

console.log(f1);

f1.godinaIzdanja = 1700;
console.log(f1);

f1.stampaj();

let f2 = new Film("", "", 1500);

console.log(f2);

f2.naslov = "Ime filma";
f2.reziser = "Petar Petrovic";
f2.godinaIzdanja = 2003;

console.log(f2);

f2.stampaj();

f1.naslov = "";
f1.stampaj();
