let getResponse = (resource) => {
  //1. Kreiranje XML objekta
  let request = new XMLHttpRequest();

  //2. Otvaranje kreiranog zahteva
  request.open("GET", resource);

  //3. Slanje zahteva
  request.send();

  let obj = new Promise((resolve, reject) => {
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        resolve(request.responseText);
      } else if (request.readyState === 4) {
        reject("Nije moguce dohvatiti podatke!");
      }
    });
  });

  return obj;
};

getResponse("../JSON/prvi.json")
  .then((sadrzaj) => {
    console.log(`Prvi .json izvrsen`, sadrzaj);
    return getResponse("../JSON/drugi.json");
  })
  .then((sadrzaj) => {
    console.log(sadrzaj);
    return getResponse("../JSON/treci.json");
  })
  .then((sadrzaj) => {
    console.log(sadrzaj);
  })
  .catch((greska) => {
    console.log(greska);
  });
console.log("Kraj");
