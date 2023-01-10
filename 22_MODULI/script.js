// import {
//   generateList,
//   generateItem as generateListItem,
// } from "./modules/list.js";

// import {
//   generateTable,
//   generateTableRow,
//   generateItem as generateTableItem,
// } from "./modules/table.js";

// let ul = generateList(document.body);

// generateListItem(ul, "images/slika1.JPG");
// generateListItem(ul, "images/slika2.JPG");
// generateListItem(ul, "images/slika3.JPG");

// let table = generateTable(document.body);
// let row = generateTableRow(table);
// generateTableItem(row, "images/slika1.JPG");
// generateTableItem(row, "images/slika2.JPG");
// generateTableItem(row, "images/slika3.JPG");

import * as Lista from "./modules/list.js";
import * as Tabela from "./modules/table.js";

let ul = Lista.generateList(document.body);
for (let i = 1; i <= 3; i++) {
  Lista.generateItem(ul, `images/slika${i}.JPG`);
}

let table = Tabela.generateTable(document.body);
let tr = Tabela.generateTableRow(table);
for (let i = 1; i <= Tabela.duzina; i++) {
  Tabela.generateItem(tr, `images/slika${i}.JPG`);
}
