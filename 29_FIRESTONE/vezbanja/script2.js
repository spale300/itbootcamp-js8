// db.collection("customers")
//   .doc("djordje")
//   .delete()
//   .then(() => {
//     console.log(`Dplument uspesno izbrisan!`);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // dodavanje dokumenta u kolekciju preko metode add()

// db.collection("customers")
//   .add({
//     name: "Mika Mikic",
//     age: 25,
//     salary: 800,
//     addresses: ["Beograd", "Novi Sad"],
//   })
//   .then(() => {
//     console.log(`Dokument uspoesno dodat!`);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // 1) Moze se dohvatiti jedan dokument
// // 2) Moze se dohvatiti vise dokumenata

// // 1)

// db.collection("users")
//   .doc("sspasic")
//   .get()
//   .then((doc) => {
//     if (doc.exists) {
//       let data = doc.data();
//       console.log(`Uspesno skinut dokument:`);
//       console.log(data);
//     } else {
//       console.log(`Ne postoji dati dokument!`);
//     }
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// 2)

// db.collection("customers")
//   .get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => {
//       console.log(`Uspesno skinut dokument: ${doc.id}`);
//       console.log(doc.data());
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// GET metoda kod kolekcije:
// 1) Prikazivanje dokumenata u odredjenom redosledu (orderBy) asc,desc
// 2) Prikazivanje odredjenog broja dokumenata (limit)
// 3) Prikazivanje dokumenata koji zadovoljavaju odredjene kriterijume - filtriranje (where)

// 1)
// db.collection("customers")
//   .orderBy("salary", "desc")
//   .orderBy("name", "asc")
//   .get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => {
//       console.log(`Uspesno skinut dokument: ${doc.id}`);
//       console.log(doc.data());
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// 2) limit

// db.collection("customers")
//   .orderBy("salary", "desc")
//   .orderBy("name", "asc")
//   .limit(1)
//   .get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => {
//       console.log(`Uspesno skinut dokument: ${doc.id}`);
//       console.log(doc.data());
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// 3) where(field, comparison, value),
//‘<‘, ‘<=‘, ‘==‘, ‘>=‘, ‘>’, ‘array-contains’, ‘in’, ‘array-contains-any’,
//(array-contains – kada je polje niz, a traži se jedna vrednost u nizu),
//(in – kada se pita da li je vrednost polja element nekog niza),
//(array-contains-any, isto kao array-contains, samo više vrednosti),

// db.collection("customers")
//   //   .where("salary", ">", 500)
//   //   .where("salary", "<=", 600)
//   //   .where("name", "in", ["Laza", "Mika"])
//   .where("name", "in", ["Mika Mikic"])
//   .get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => {
//       console.log(`Uspesno skinut dokument: ${doc.id}`);
//       console.log(doc.data());
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

db.collection("customers")
  .orderBy("name", "asc")
  .get()
  .then((snapshot) => {
    console.log(`Sortirano:`);
    snapshot.forEach((doc) => {
      console.log(doc.data());
    });
  })
  .catch((err) => {
    console.log(err);
  });

db.collection("customers")
  .where("addresses", "array-contains", "Nis")
  .get()
  .then((snapshot) => {
    console.log(`Lokacija Nis`);
    snapshot.forEach((doc) => {
      console.log(doc.data());
    });
  })
  .catch((err) => {
    console.log(err);
  });

db.collection("customers")
  .where("salary", ">=", 500)
  .get()
  .then((snapshot) => {
    console.log(`Plata iznad 500e`);
    snapshot.forEach((doc) => {
      console.log(doc.data());
    });
  })
  .catch((err) => {
    console.log(err);
  });

db.collection("customers")
  .where("salary", ">", 300)
  .where("salary", "<", 800)
  .get()
  .then((snapshot) => {
    console.log(`Plata izmedju 300e i 800e`);
    snapshot.forEach((doc) => {
      console.log(doc.data());
    });
  })
  .catch((err) => {
    console.log(err);
  });

db.collection("customers")
  .where("salary", "<", 900)
  .where("age", "==", 33)
  .get()
  .then((snapshot) => {
    console.log(`Plata manja od 900e, i goina musterije 33`);
    snapshot.forEach((doc) => {
      console.log(doc.data());
    });
  })
  .catch((err) => {
    console.log(err);
  });

db.collection("customers")
  .where("addresses", "array-contains-any", ["Nis", "Novi Sad"])

  .get()
  .then((snapshot) => {
    console.log(`Lokacija Nis ili Novi Sad`);
    snapshot.forEach((doc) => {
      console.log(doc.data());
    });
  })
  .catch((err) => {
    console.log(err);
  });

db.collection("customers")
  .where("age", "in", [22, 25, 33])
  .get()
  .then((snapshot) => {
    console.log(`Godine 22,25,33`);
    snapshot.forEach((doc) => {
      console.log(doc.data());
    });
  })
  .catch((err) => {
    console.log(err);
  });
