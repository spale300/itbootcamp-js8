let li = document.querySelectorAll("li");
let ul = document.querySelector("ul");

let input = document.querySelector("input[type='text']");

input.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    if (input.value != "") {
      item = document.createElement("li");
      item.textContent = input.value;

      let radioAdd = document.querySelector("input[name='tdl']:checked");

      if (radioAdd.value == "b") {
        ul.append(item);
      } else {
        ul.prepend(item);
      }

      input.value = "";
    }
  }
});

ul.addEventListener("click", (e) => {
  // console.log(`kliknuto na ul`);
  // console.log(e);

  // console.log(e.target);
  // console.log(e.target.tagName);

  if (e.target.tagName == "LI") {
    // e.target.classList.toggle("linija");
    e.target.remove();
  }
});

////////////////////////////////////////////////////////
// local storage
////////////////////////////////////////////////////////
// smestanje u lokalnu memoriju

localStorage.setItem("username", "Jelena");
localStorage.setItem("city", "Nis");

// update u lokalnoj memoriji

localStorage.setItem("username", "Stefan");
// ukoliko KEY postoji vec u local storage onda vrsi update crednosti za taj key
// ukoliko key ne postoji u local storage, onda vrsi dodavanje (novi unos) u local storage

console.log(localStorage.getItem("city"));
console.log(localStorage.getItem("username"));

let u = localStorage.getItem("username");

console.log(u);
