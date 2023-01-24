console.log(db);

let users = db.collection("users");
console.log(users);

let user1 = users.doc("sspasic");
console.log(user1);

let user2 = db.doc("users/jmatejic");
console.log(user2);

// kada "pikiramo" dokument preko ovih komani, mozemo da izvrsimo jednu od osnovne 4 operacije:
// CRUD(Createm, Read, Update, Delete)
// Create: doc.set(...)
// Read: doc.get(...)
// Update: doc.update(...)
// Delete: doc.delete(...)
// Sve cetiri metode kao rezultat vracaju Promise!
// => Mozemo da lancamo .then() i .catch() na bilo koju od ove 4 metode!

let user3 = db
  .collection("customers")
  .doc("cust001")
  .set({
    name: "Laza Lazic",
    age: 35,
    addresses: ["Beograd", "Cacak"],
    salary: 400,
  })
  .then(() => {
    console.log(`Uspesno dodata musterija!`);
  })
  .catch((err) => {
    console.log(`Greska: ${err}`);
  });

console.log(1);
console.log(2);

db.collection("customers")
  .doc("cust001")
  .set(
    {
      height: 185,
    },
    {
      merge: true, //koristimo za spajanje informacija u bazi
    }
  )
  .then(() => {
    console.log(`Uspesno dodata musterija!`);
  })
  .catch((err) => {
    console.log(`Greska: ${err}`);
  });

let datum1 = new Date("2023-01-25 19:00:00");
let datum2 = new Date("2023-01-25 21:00:00");

db.collection("tasks")
  .doc("fudbal")
  .set(
    {
      title: "Fudbal",
      start_date: firebase.firestore.Timestamp.fromDate(datum1),
      due_date: firebase.firestore.Timestamp.fromDate(datum2),
      priority: false,
      description: "Fudbalica sa drustvom",
    },
    { merge: true }
  )
  .then(() => {
    console.log("Dodat task!");
  })
  .catch((err) => {
    console.log(`Greska! ${err}`);
  });

db.collection("users")
  .doc("perap")
  .set({
    age: 23,
    name: "Pera",
    surname: "Peric",
    username: "pp",
  })
  .then(() => {
    console.log(`Korisnik dodat!`);
  })
  .catch((err) => {
    console.log(`Greska! ${err}`);
  });

db.collection("customers")
  .doc("djordje")
  .set({
    addresses: ["Nis", " Beograd"],
    age: 25,
    name: "Djordje",
    salary: 450,
  })
  .then(() => {
    console.log(`Musterija dodata!`);
  })
  .catch((err) => {
    console.log(`Greska! ${err}`);
  });

// db.collection("movies").doc().set({
//     name:
// });

//update

db.collection("users")
  .doc("sspasic")
  .update({
    age: 33,
    adrese: ["Nis", "Beograd"],
  })
  .then(() => {
    console.log(`Korisnik uspesno promenjen!`);
    return db
      .collection("users")
      .doc("sspasic")
      .update({
        adrese: firebase.firestore.FieldValue.arrayUnion("Cacak"),
      });
  })
  .then(() => {
    console.log(`Korisnik uspesno promenjen!`);
  })
  .catch((err) => {
    console.log(err);
  });
