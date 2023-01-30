db.collection("tasks")
  .where("priority", "==", true)
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.data());
    });
  })
  .catch((err) => {
    console.log(err);
  });

let datum = new Date();
let godina = datum.getFullYear();

let datum1 = new Date(godina, 0, 1);
let datum2 = new Date(godina + 1, 0, 1);
let ts1 = firebase.firestore.Timestamp.fromDate(datum1); //prebacimo u timestamp da bi mogli da uporedimo
let ts2 = firebase.firestore.Timestamp.fromDate(datum2); //prebacimo u timestamp da bi mogli da uporedimo

db.collection("tasks")
  .where("due_date", ">=", ts1)
  .where("due_date", "<", ts2)
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.data());
    });
  })
  .catch((err) => {
    console.log(err);
  });

let date = new Date();
let t = firebase.firestore.Timestamp.fromDate(date);

db.collection("tasks")
  .where("due_date", "<", t)
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.data());
    });
  })
  .catch((err) => {
    console.log(err);
  });

db.collection("tasks")
  .where("start_date", ">", t)
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.data());
    });
  })
  .catch((err) => {
    console.log(err);
  });
