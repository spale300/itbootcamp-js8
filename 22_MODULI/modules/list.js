import generateImage from "./general.js";

let generateList = (parent) => {
  let list = document.createElement("ul");
  list.style.overflow = "hidden";
  list.style.listStyle = "none";
  parent.appendChild(list);

  return list;
};

let generateItem = (parent, src) => {
  let li = document.createElement("li");
  li.style.float = "left";
  parent.appendChild(li);

  let img = generateImage(src);
  li.appendChild(img);

  return li;
};

export { generateList, generateItem };
