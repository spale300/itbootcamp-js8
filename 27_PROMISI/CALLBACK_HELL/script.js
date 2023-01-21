console.log(`CALLBACKHELL!`);

let getResponse = (resource, callback) => {
  //1. Kreiranje XML objekta
  let request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      callback(request.responseText, undefined);
    } else if (request.readyState === 4) {
      callback(undefined, "Nije moguce dohvatiti podatke!");
    }
  });

  //2. Otvaranje kreiranog zahteva
  request.open("GET", resource);

  //3. Slanje zahteva
  request.send();
};

getResponse("../JSON/prvi.json", (data, err) => {
  //   console.log(data, err);
  if (data) {
    console.log(data);
    getResponse("../JSON/drugi.json", (data, err) => {
      if (data) {
        console.log(data);
        getResponse("../JSON/treci.json", (data, err) => {
          if (data) {
            console.log(data);
          } else {
            console.log(err);
          }
        });
      } else {
        console.log(err);
      }
    });
  } else {
    console.log(err);
  }
});

console.log("Kraj");
