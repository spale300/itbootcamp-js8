let blog1 = {
  title: "HTML",
  likes: 30,
  dislikes: 5,
};
let blog2 = {
  title: "CSS",
  likes: 20,
  dislikes: 15,
};
let blog3 = {
  title: "Java Script!",
  likes: 70,
  dislikes: 7,
};
let blog4 = {
  title: "if else",
  likes: 330,
  dislikes: 5,
};
let blog5 = {
  title: "for",
  likes: 220,
  dislikes: 15,
};
let blog6 = {
  title: "forEach",
  likes: 70,
  dislikes: 7,
};

let blogs = [blog1, blog2, blog3];

console.log(blogs);

// ispis naslova blogova u konzoli

blogs.forEach((el) => {
  console.log(el.title);
});

for (let i = 0; i < blogs.length; i++) {
  document.body.innerHTML += `<h3>${blogs[i].title}</h3>`;
}

// 01.Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća ukupan broj lajkova

let sumLikes = (arrObjs) => {
  let suma = 0;

  arrObjs.forEach((el) => {
    suma += el.likes;
  });

  return suma;
};

console.log(sumLikes(blogs));

//02. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća prosečan broj lajkova

let avgLikes = (blogs) => {
  return sumLikes(blogs) / blogs.length;
};

console.log(`Prosecan broj lakova je: ${avgLikes(blogs)}. `);

//03. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena

let ocene = (niz) => {
  niz.forEach((el) => {
    if (el.likes > el.dislikes) {
      console.log(el.title);
    }
  });
};

ocene(blogs);

//04. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena

let duplo = (niz) => {
  niz.forEach((el) => {
    if (el.likes >= el.dislikes * 2) {
      console.log(el.title);
    }
  });
};

duplo(blogs);

//05. Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom

let uzvicnik = (niz) => {
  niz.forEach((el) => {
    if (el.title.endsWith("!")) {
      console.log(el.title);
    }
  });
};

uzvicnik(blogs);

//////////////////////

let user = {
  username: "Jelena",
  age: 28,
  blogs: [blog1, blog2, blog3],
  logBlogs: function () {
    this.blogs.forEach((el) => {
      console.log(el.title);
    });
  },
};

let user1 = {
  username: "Stefan",
  age: 13,
  blogs: [blog4, blog5],
  logBlogs: function () {
    this.blogs.forEach((el) => {
      console.log(el.title);
    });
  },
};
let user2 = {
  username: "JohnDoe",
  age: 36,
  blogs: [blog6],
  logBlogs: function () {
    this.blogs.forEach((el) => {
      console.log(el.title);
    });
  },
};

// ispisati sve blogove korisnika user

console.log(user.blogs);

// ispisati naslov prvog bloga

console.log(user.blogs[0].title);

user.logBlogs();
user1.logBlogs();
user2.logBlogs();

//////////////////////////////////////////////

let users = [user, user1, user2];

// ispisati imena autora koji imaju ispod 18 godina

users.forEach((el) => {
  if (el.age < 18) {
    console.log(el.username);
  }
});

//Ispisati naslove onih blogova koji imaju više od 50 lajkova

users.forEach((u) => {
  u.blogs.forEach((el) => {
    if (el.likes > 50) {
      console.log(el.title);
    }
  });
});

//Ispisati sve blogove autora čiji je username ’JohnDoe’

users.forEach((el) => {
  if (el.username == "JohnDoe") {
    el.logBlogs();
  }
});

//napraviti arrow u kojoj se prosledjuje username autora, a ona ispisuje sve njegove blogove

let printBlogs = (user) => {
  users.forEach((el) => {
    if (el.username == user) {
      el.logBlogs();
    }
  });
};

printBlogs("Jelena");

// Ispisati imena onih autora koji imaju ukupno više od 100 lajkova za blogove koje su napisali

let prekoSto = (user) => {
  user.forEach((el) => {
    let suma = 0;
    el.blogs.forEach((blog) => {
      suma += blog.likes;
    });
    if (suma > 100) {
      console.log(el.username);
    }
  });
};

prekoSto(users);

// Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena

let prosecanBroj = (users) => {
  let sum = 0;
  let broj = 0;

  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    let blogs = user.blogs;
    for (let j = 0; j < blogs.length; j++) {
      let blog = blogs[j];
      sum += blog.likes;
      broj++;
    }
  }
  return sum / broj;
};

// let prosecanBroj1 = (users) => {
//   let sum = 0;
//   let broj = 0;

//   users.forEach((blogs) => {
//     blogs.forEach((blog) => {
//       sum += blog.likes;
//       broj++;
//     });
//   });
//   return sum / broj;
// };

console.log(prosecanBroj(users));

let natBlog = (users) => {
  let avg = prosecanBroj(users);

  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    let blogs = user.blogs;
    for (let j = 0; j < blogs.length; j++) {
      let blog = blogs[j];
      if (blog.likes > avg) {
        console.log(blog.title);
      }
    }
  }
};

natBlog(users);

let dan1 = {
  datum: `2022/12/22`,
  kisa: true,
  sunce: false,
  oblacno: true,
  temperatura: [5, -1, 6, 2],
};
let dan2 = {
  datum: `2022/1/11`,
  kisa: true,
  sunce: false,
  oblacno: true,
  temperatura: [5, 6, 2, 6],
};
let dan3 = {
  datum: `2022/12/2`,
  kisa: true,
  sunce: false,
  oblacno: true,
  temperatura: [5, -1, 6, 2, 6, 7],
};
let dan4 = {
  datum: `2022/11/22`,
  kisa: true,
  sunce: false,
  oblacno: true,
  temperatura: [6, 2, 6],
};
let dan5 = {
  datum: `2022/12/21`,
  kisa: false,
  sunce: true,
  oblacno: true,
  temperatura: [2, 6],
};

let dan = [dan1, dan2, dan3, dan4, dan5];

let merenje = (niz) => {
  let max = 0;
  niz.forEach((temp) => {
    if (temp.temperatura.length > max) {
      max = temp.temperatura.length;
    }
  });

  niz.forEach((dan) => {
    if (dan.temperatura.length == max) {
      console.log(dan.datum);
      return;
    }
  });
};

merenje(dan);

let kisni = (niz) => {
  brojac = 0;
  niz.forEach((el) => {
    if (el.kisa == true) {
      brojac++;
    }
  });
  return brojac;
};

console.log(kisni(dan));

let prebrojDane = (niz) => {
  let kisa = 0;
  let sunce = 0;
  let oblacno = 0;

  niz.forEach((dan) => {
    if (dan.kisa) {
      kisa++;
    }
    if (dan.sunce) {
      sunce++;
    }
    if (dan.oblacno) {
      oblacno++;
    }
  });
  console.log(`Kisa: ${kisa}`);
  console.log(`Sunce: ${sunce}`);
  console.log(`Oblacno: ${oblacno}`);
};

prebrojDane(dan);

let procnatemperatura = (niz) => {
  let suma = 0;
  niz.forEach((dan) => {
    dan.forEach((el) => {
      suma = el.temperatura;
    });
  });
  return suma / niz.length;
};

let prosek = (niz) => {
  suma = 0;
  niz.forEach((dan) => {
    suma += dan;
  });
  return suma / niz.length;
};

let brojNatDana = (niz) => {};

let lajk = (niz) => {
  let suma = 0;
  niz.forEach((el) => {
    suma += el.likes;
  });
  return suma;
};

console.log(lajk(blogs));

let prosecanLajkova = (niz) => {
  let maks = lajk(niz);

  return maks / niz.length;
};

console.log(prosecanLajkova(blogs));

let pozitivno = (niz) => {
  niz.forEach((el) => {
    if (el.likes > el.dislikes) {
      console.log(el.title);
    }
  });
};

pozitivno(blogs);

let duploVise = (niz) => {
  niz.forEach((el) => {
    if (el.likes >= el.dislikes * 2) {
      console.log(el.title);
    }
  });
};

duploVise(blogs);

let zavrs = (niz) => {
  niz.forEach((blog) => {
    if (blog.title.endsWith("!")) console.log(blog.title);
  });
};

zavrs(blogs);

////////

let punoletni = (niz) => {
  niz.forEach((user) => {
    if (user.age > 18) {
      console.log(user.username);
    }
  });
};

punoletni(users);

let punoLike = (niz) => {
  niz.forEach((user) => {
    blogs = user.blogs;
    blogs.forEach((blog) => {
      if (blog.likes > 50) {
        console.log(blog.title);
      }
    });
  });
};

punoLike(users);

let john = (niz) => {
  niz.forEach((user) => {
    if (user.username == "JohnDoe") {
      console.log(user.blogs);
    }
  });
};
john(users);
