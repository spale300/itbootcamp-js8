let li = document.querySelectorAll("li");
let ul = document.querySelector("ul");
let btn = document.querySelector("button");
let input = document.querySelector("input[type='text']");

btn.addEventListener("click", () => {
  if (input.value != "") {
    item = document.createElement("li");
    item.textContent = input.value;

    let radioAdd = document.querySelector("input[name='tdl']:checked");

    console.log(radioAdd, radioAdd.value);

    if (radioAdd.value == "b") {
      ul.append(item);
    } else {
      ul.prepend(item);
    }

    input.value = "";
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

// window.addEventListener("keypress", (e) => {
//   console.log(e.key);
// });
