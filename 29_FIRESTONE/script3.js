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
let ts1 = firebase.firestore.Timestamp.fromDate(datum1);
let ts2 = firebase.firestore.Timestamp.fromDate(datum2);

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
