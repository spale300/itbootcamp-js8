import generateImage from "./general.js";

let generateTable = (parent) => {
  let table = document.createElement("table");
  table.style.border = "1px solid black";
  table.style.listStyle = "none";
  parent.appendChild(table);

  return table;
};

let generateTableRow = (parent) => {
  let row = document.createElement("tr");
  parent.appendChild(row);

  return row;
};

let generateItem = (parent, src) => {
  let item = document.createElement("td");
  let img = generateImage(src);
  item.appendChild(img);
  parent.appendChild(item);

  return item;
};

const duzina = 3;

export { generateTable, generateTableRow, generateItem, duzina };
