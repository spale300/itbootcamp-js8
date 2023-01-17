let li = document.querySelectorAll("li");
console.log(li);

li.forEach((el) => {
  el.addEventListener("click", () => {
    //prvi nacin
    // if (el.style.textDecoration == "line-through") {
    //   el.style.textDecoration = "none";
    // } else {
    //   el.style.textDecoration = "line-through";
    // }

    //drugi nacin

    el.classList.toggle("linija");
  });
});
