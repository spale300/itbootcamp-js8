let request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
  //   console.log(request.readyState);
  if (request.readyState === 4 && request.status === 200) {
    let data = JSON.parse(request.responseText);
    console.log(data);
  } else if (request.readyState === 4) {
    console.log(`Desila se greska`);
  }
});

request.open("GET", "https://jsonplaceholder.typicode.com/posts");
request.send();

let requestUser = new XMLHttpRequest();

requestUser.addEventListener("readystatechange", () => {
  if (requestUser.readyState === 4 && requestUser.status === 200) {
    let data = JSON.parse(requestUser.responseText);

    data.forEach((el) => {
      if (el.website.endsWith(".com")) {
        console.log(el);
      }
    });
  }
});

requestUser.open("GET", "https://jsonplaceholder.typicode.com/users");
requestUser.send();

let requestName = new XMLHttpRequest();

requestName.addEventListener("readystatechange", () => {
  if (requestName.readyState === 4 && requestName.status === 200) {
    let data = JSON.parse(requestName.responseText);
    data.forEach((el) => {
      if (el.name.includes("Clementin")) {
        console.log(el);
      }
    });
  }
});

requestName.open("GET", "https://jsonplaceholder.typicode.com/users");
requestName.send();

let requestCompany = new XMLHttpRequest();

requestCompany.addEventListener("readystatechange", () => {
  if (requestCompany.readyState === 4 && requestCompany.status === 200) {
    let data = JSON.parse(requestCompany.responseText);
    data.forEach((user) => {
      let company = user.company;

      if (company.name.includes("Group") || company.name.includes("LLC")) {
        console.log(user);
      }
    });
  }
});

requestCompany.open("GET", "https://jsonplaceholder.typicode.com/users");
requestCompany.send();

let cityArr = [];

let requestCity = new XMLHttpRequest();

requestCity.addEventListener("readystatechange", () => {
  if (requestCity.readyState === 4 && requestCity.status === 200) {
    let data = JSON.parse(requestCity.responseText);

    data.forEach((user) => {
      let addres = user.address;
      console.log(addres);
      if (!cityArr.includes(addres.city)) {
        cityArr.push(addres.city);
      }
    });
    console.log(cityArr);
  }
});

requestCity.open("GET", "https://jsonplaceholder.typicode.com/users");
requestCity.send();

let requestCor = new XMLHttpRequest();
let broj = 0;

requestCor.addEventListener("readystatechange", () => {
  if (requestCor.readyState === 4 && requestCor.status === 200) {
    let data = JSON.parse(requestCor.responseText);

    data.forEach((user) => {
      let lat = Number(user.address.geo.lat);
      let lng = Number(user.address.geo.lng);
      if (lat < 0 && lng < 0) {
        broj++;
      }
    });
    console.log(broj);
  }
});
requestCor.open("GET", "https://jsonplaceholder.typicode.com/users");
requestCor.send();

// callback

let getUsers = (resolve, reject) => {
  let request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      let data = JSON.parse(request.responseText);
      //....
      resolve(data);
    } else if (request.readyState === 4) {
      reject(`Desila se greska!`);
    }
  });
  request.open("GET", "https://jsonplaceholder.typicode.com/users");
  request.send();
};

let isisKonzola = (p) => {
  console.log(p);
};

let web = (niz) => {
  niz.forEach((el) => {
    if (el.website.endsWith(".com")) {
      console.log(el.website);
    }
  });
};

getUsers(web, isisKonzola);

let nameCl = (niz) => {
  niz.forEach((el) => {
    if (el.name.includes("Clementin")) {
      console.log(el);
    }
  });
};

getUsers(nameCl, isisKonzola);

getUsers(
  (niz) => {
    niz.forEach((user) => {
      if (
        user.company.name.includes("Group") ||
        user.company.name.includes("LLC")
      ) {
        console.log(user.company.name);
      }
    });
  },
  (poruka) => {
    console.log(poruka);
  }
);
