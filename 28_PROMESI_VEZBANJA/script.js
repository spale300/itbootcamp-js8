let form = document.getElementById("order");
let input = document.getElementById("cap");
let result = document.getElementById("result");

function getItems(resource, resolve, reject) {
  let request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      let data = JSON.parse(request.responseText);

      resolve(data);
      // u slucaju kada je resorce = "stock.json", uradi jednu stvar
      // u slucaju kada je resorce = "weight.json", uradi drugu stvar
      // u slucaju kada je resorce = "price.json", uradi trecu stvar
    } else if (request.readyState === 4) {
      reject("GRESKA!");
    }
  });

  request.open("GET", resource);
  request.send();
}

function submitForm1(e) {
  e.preventDefault();
  // 1. Iz fajla stock.json dohvatiti sve artikle koji nisu na stanju
  let ids = [];
  getItems(
    "./json/stock.json",
    (data) => {
      data.forEach((el) => {
        if (el.stock == 0) {
          ids.push(el.id);
        }
      });

      // 2. Iz fajla weight.json dohatiti njihpvu tezinu
      getItems(
        "./json/weight.json",
        (data) => {
          let totalW = 0;
          data.forEach((el) => {
            if (ids.includes(el.id)) {
              totalW += el.weight;
            }
          });
          if (totalW > input.value) {
            result.innerHTML = `Kamion nema dovoljno kapacitet!`;
          } else {
            // 3. Ako tezina nije veca od kapaciteta kamiona, iz fajla prices.json dohvatiti njihovu cenu

            getItems(
              "./json/prices.json",
              (data) => {
                let totalP = 0;
                data.forEach((el) => {
                  if (ids.includes(el.id)) {
                    totalP += el.price;
                  }
                });
                result.innerHTML = `Ukupna cena proizvoda koji treba da se naruce je: ${totalP}`;
              },
              (p) => {
                result.innerHTML = p;
              }
            );
          }
        },
        (p) => {
          result.innerHTML = p;
        }
      );
    },
    (p) => {
      result.innerHTML = p;
    }
  );

  getItems(
    "./json/stock.json",
    (data) => {},
    (p) => {}
  );
}

// pristup preko promisa

function getItemsReturnPromise(resource) {
  //asihroni kod ide u promise

  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        let data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("GRESKA!");
      }
    });

    request.open("GET", resource);
    request.send();
  });
}

function submitForm2(e) {
  e.preventDefault();
  let ids = [];

  getItemsReturnPromise("./json/stock.json")
    .then((data) => {
      data.forEach((el) => {
        if (el.stock == 0) {
          ids.push(el.id);
        }
      });
      return getItemsReturnPromise("./json/weight.json");
    })
    .then((data) => {
      let totalW = 0;
      data.forEach((el) => {
        if (ids.includes(el.id)) {
          totalW += el.weight;
        }
      });
      if (totalW > input.value) {
        result.innerHTML = `Kamion nema dovoljno kapacitet!`;
      } else {
        return getItemsReturnPromise("./json/prices.json");
      }
    })
    .then((data) => {
      if (data !== undefined) {
        let totalP = 0;
        data.forEach((el) => {
          if (ids.includes(el.id)) {
            totalP += el.price;
          }
        });
        result.innerHTML = `Ukupna cena proizvoda koji treba da se naruce je: ${totalP}`;
      }
    })
    .catch((p) => {
      result.innerHTML = p;
    });
}

form.addEventListener("submit", submitForm2);
