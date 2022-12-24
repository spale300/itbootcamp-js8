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
