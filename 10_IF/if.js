let x, y;
x = 3;
y = 3;
console.log(x == y);

if (x == y) {
  console.log("Vrednosti promenljivih x i y su jednake!");
} else {
  console.log("Vrednosti su razlicite!");
}

console.log("Komanda posle if grane");

x = 5;
y = 5;

if (x === y) {
  console.log(`Vrendosti ${x} i ${y} su jednake po tipu i vrednosti!`);
}

x = 4;
y = "4";

if (x !== y) {
  console.log(`Vrendosti ${x} i ${y} su razlicite po tipu i vrednosti!`);
}
