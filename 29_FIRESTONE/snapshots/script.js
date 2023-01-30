let ul = document.querySelector("ul");
let error = document.getElementById("error");
let form = document.querySelector("form");

// db.collection("tasks")
//   .orderBy("start_date", "desc")
//   .get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => {
//       let task = doc.data();
//       console.log(task);
//       let li = document.createElement("li");
//       li.innerHTML = `${task.title} (${task.start_date.toDate()}) [${
//         task.description
//       }]`;
//       if (task.priority == true) {
//         li.style.color = "red";
//       }
//       ul.appendChild(li);
//     });
//   })
//   .catch((e) => {
//     error.innerHTML = `An error occured: ${e}`;
//     error.style.color = "red";
//   });

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let title = this.title.value;
  let startDate = this.start_date.value;
  let dueDate = this.due_date.value;
  let priority = this.priority.checked;
  let description = this.description.value;

  let date1 = new Date(startDate);
  let date2 = new Date(dueDate);
  let ts1 = firebase.firestore.Timestamp.fromDate(date1);
  let ts2 = firebase.firestore.Timestamp.fromDate(date2);

  let obj = {
    title: title,
    start_date: ts1,
    due_date: ts2,
    priority: priority,
    description: description,
  };

  db.collection("tasks")
    .add(obj)
    .then(() => {
      error.innerHTML = `Tasks successfully added!`;
      error.style.color = "green";
    })
    .catch((err) => {
      error.innerHTML = `An error occured: ${err}`;
      error.style.color = "red";
    });
});

// Umesto direktong pristupa dokumenata neke kolekcije mnogo je boolje pristupati "snapshotovima", odnostno, osluskivati promene u kolekciji

db.collection("tasks").onSnapshot((snapshot) => {
  let changes = snapshot.docChanges();
  changes.forEach((change) => {
    let type = change.type;
    let doc = change.doc;
    if (type == "added") {
      let task = doc.data();
      let li = document.createElement("li");
      li.id = doc.id;
      li.innerHTML = `${task.title} (${task.start_date.toDate()}) [${
        task.description
      }]`;
      if (task.priority == true) {
        li.style.color = "red";
      }
      ul.appendChild(li);
      let button = document.createElement("button");
      button.innerHTML = "Remove";
      li.appendChild(button);
    } else if (type == "removed") {
      let id = doc.id;
      let li = document.getElementById(id);
      li.remove();
    }
  });
});

ul.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.tagName === "BUTTON") {
    let li = e.target.parentElement;
    let id = li.id;
    db.collection("tasks")
      .doc(id)
      .delete()
      .then(() => {
        error.innerHTML = `Tasks successfully deleted!`;
        error.style.color = "orange";
      })
      .catch((err) => {
        error.innerHTML = `An error occured: ${err}`;
        error.style.color = "red";
      });
  }
});
