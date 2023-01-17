console.log(1);
console.log(2);

window.setTimeout(() => {
  console.log(`Poruka nakon nekog vremena
  `);
}, 1000 * 3);
console.log(3);
console.log(4);

for (let i = 5; i <= 10000; i++) {
  console.log(i);
  i++;
}

let btn = document.querySelector("#click1");
let ispis = document.querySelector("#ispis");

let timer = null;

btn.addEventListener("click", (e) => {
  e.preventDefault();

  console.log(this);
  let datum = new Date();
  let h = datum.getHours();
  let m = datum.getMinutes();
  let s = datum.getSeconds();

  if (timer === null) {
    timer = setTimeout(() => {
      ispis.innerHTML = `${h}:${m}:${s}`;
      timer = null;
    }, 1000 * 2);
  }
});

let btn2 = document.querySelector("#click2");
let btn3 = document.querySelector("#click3");

btn2.addEventListener("click", (e) => {
  e.preventDefault();
  clearTimeout(timer);
  timer = null;
});

btn3.addEventListener("click", () => {
  setInterval(() => {
    let datum = new Date();
    let h = datum.getHours();
    let m = datum.getMinutes();
    let s = datum.getSeconds();
    ispis.innerHTML = `${h}:${m}:${s}`;
  }, 1000);
});
