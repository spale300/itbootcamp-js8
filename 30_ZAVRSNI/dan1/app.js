import { Chatroom } from "./chat.js";
import { ChatUI } from "./ui.js";

// DOM
let ul = document.querySelector("ul");
let btnSend = document.getElementById("btnSend");
let inputSend = document.getElementById("inputMessage");
let btnUpdate = document.getElementById("btnUpdate");
let inputUpdate = document.getElementById("inputUsername");
let btns = document.querySelector("nav");
let colorP = document.getElementById("fcolor");
let localColor = localStorage.getItem("color");

let localUsername = localStorage.getItem("username");
let localRoom = localStorage.getItem("room");
let chatroom = new Chatroom(localRoom, localUsername);

if (localColor != null) {
  colorP.value = localColor;
} else {
  colorP.value = "#fff";
}

if (localRoom != null) {
  chatroom.room = localRoom;
} else {
  chatroom.room = "#general";
}

if (localUsername != null) {
  chatroom.username = localUsername;
} else {
  chatroom.username = "Anonymus";
}

btns.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.tagName === "BUTTON") {
    let actBtn = document.querySelector(".active");
    if (actBtn) {
      actBtn.classList.remove("active");
    }
    e.target.classList.add("active");

    let room = e.target.textContent;
    chatroom.updateRoom(room);

    localStorage.setItem("room", room);
    chatUI.clear();

    chatroom.getChats((data) => {
      chatUI.templateLI(data, chatroom.username, data);
    });
  }
});

ul.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target);

  if (e.target.tagName === "BUTTON") {
    let li = e.target.parentElement;
    let dug = e.target;
    let id = li.id;
    console.log(li);
    console.log(dug);
    chatroom
      .delChat(id)
      .then(() => {
        console.log("Deleted!");
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

let chatUI = new ChatUI(ul);

chatroom.getChats((data) => {
  chatUI.templateLI(data, chatroom.username, data);
  console.log(data);
});

btnSend.addEventListener("click", (e) => {
  e.preventDefault();

  if (inputSend.value != "") {
    chatroom
      .addChat(inputSend.value)
      .then(() => {
        inputSend.value = "";
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

let notification = (msg) => {
  let spanUser = document.querySelector("span");
  spanUser.textContent = msg;
  spanUser.classList.add("update");
  setTimeout(() => {
    spanUser.textContent = "";
    spanUser.remove("update");
  }, 3000);
};
notification(chatroom.username);

btnUpdate.addEventListener("click", (e) => {
  e.preventDefault();

  if (inputUpdate.value != "") {
    chatroom.username = inputUpdate.value;
  }

  localStorage.setItem("username", chatroom.username);
  inputUpdate.value = "";

  notification(chatroom.username);
  window.location.reload();
});

///3 BOJA
let color = document.getElementById("colorC");
console.log(color);
let body = document.querySelector("body");

console.log(colorP);

color.addEventListener("click", (e) => {
  e.preventDefault();

  setTimeout(() => {
    let boja = colorP.value;
    localStorage.setItem("color", boja);
    body.style.backgroundColor = boja;
  }, 500);
});

colorP.value = localColor;
body.style.backgroundColor = localColor;

//

db.collection("chats").onSnapshot((snapshot) => {
  let changes = snapshot.docChanges();
  changes.forEach((change) => {
    let type = change.type;
    let doc = change.doc;
  });
});
