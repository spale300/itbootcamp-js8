let blog1 = {
  title: "HTML",
  content: "Ovo je blog o osnovnim HTML tagovima",
  author: "Jelena",
};

console.log(blog1);
console.log(typeof blog1);

console.log(blog1.title);
console.log(blog1["title"]);

// izmena elementa

blog1.content = "Osnove HTML-a";
console.log(blog1);

let user = {
  username: "JM",
  age: 28,
  blogs: ["if naredba", "for petlja", "while petlja"],
  login: function () {
    console.log(`Ulogovani ste!`);
  },
  logout: function () {
    console.log(`Izlogovani ste!`);
  },
  logBlogs: function () {
    this.blogs.forEach((el) => {
      console.log(el);
    });
  },
};

user.login();
user.logout();
user.logBlogs();
user.blogs.forEach((el) => {
  document.write(`<p>${el}</p>`);
});

// 01.Zadatak

let dan = {
  datum: `2022/12/22`,
  kisa: true,
  sunce: false,
  oblacno: true,
  temperatura: [5, -1, 6, 2, 6],
  prosecnaT: function () {
    let suma = 0;
    this.temperatura.forEach((el) => {
      suma += el;
    });
    return suma / this.temperatura.length;
  },
  natprosecnaT: function () {
    let broj = 0;
    let prosek = this.prosecnaT();
    this.temperatura.forEach((el) => {
      if (el > prosek) {
        broj++;
      }
    });
    return broj;
  },
  maxT: function () {
    let max = this.temperatura[0];
    let broj = 0;

    this.temperatura.forEach((el) => {
      if (max == el) {
        broj++;
      }
      if (max < el) {
        max = el;
      }
    });
    return broj;
  },

  //05. Vraća true ukoliko je u većini dana temperatura bila iznad proseka. U suprotnom vraća false.
  toplo: function () {
    if (this.natprosecnaT() > this.temperatura.length / 2) {
      return true;
    } else {
      return false;
    }
  },

  //06. Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.

  leden: function () {
    for (let i = 0; i < this.temperatura.length; i++) {
      if (this.temperatura[i] > 0) {
        return false;
      }
    }
    return true;
  },
};

console.log(dan.prosecnaT());
console.log(dan.natprosecnaT());
console.log(dan.maxT());
console.log(dan.toplo());
