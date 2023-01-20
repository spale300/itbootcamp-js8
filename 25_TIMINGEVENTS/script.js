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
let btn4 = document.querySelector("#click4");

btn2.addEventListener("click", (e) => {
  e.preventDefault();
  clearTimeout(timer);
  timer = null;
});

let vr = 0;
let clock = null; //ovako definisemo promenljivu za stop timer

btn3.addEventListener("click", () => {
  if (clock === null) {
    clock = setInterval(() => {
      //   let datum = new Date();
      //   let h = datum.getHours();
      //   let m = datum.getMinutes();
      //   let s = datum.getSeconds();
      //   ispis.innerHTML = `${h}:${m}:${s}`;
      // }, 1000);
      vr++;
      ispis.innerHTML = vr;
    }, 1000);
  }
});

btn4.addEventListener("click", () => {
  clearInterval(clock);
  clock = null;
});

///

setInterval(() => {
  let p = document.querySelector("#clock");
  let date = new Date();
  let sat = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  p.innerHTML = `${sat}:${min}:${sec}`;
}, 1000);

let btn5 = document.querySelector("#click5");
let btn6 = document.querySelector("#click6");
let input = document.querySelector("#input");
console.log(input);

let sat = null;
let brojac = 0;

btn5.addEventListener("click", () => {
  if (sat === null) {
    sat = setInterval(() => {
      brojac++;

      input.value = brojac;
    }, 1000);
  }
});

btn6.addEventListener("click", () => {
  clearInterval(sat);
  sat = null;
  brojac = 0;
  input.value = "";
});
