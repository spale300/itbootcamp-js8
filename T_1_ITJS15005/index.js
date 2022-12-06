let naslov = document.getElementById("n1");

let datum = new Date();
let dan = datum.getDay();
let mesec = datum.getMonth();
let godina = datum.getFullYear();

naslov.innerHTML = "<h1>IT Bootcamp Nis </h1> " + `(${dan}.${mesec}.${godina})`;

console.log(dan);
