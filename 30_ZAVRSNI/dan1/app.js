import { Chatroom } from "./chat.js";
import { ChatUI } from "./ui.js";

// DOM
let ul = document.querySelector("ul");
let btnSend = document.getElementById("btnSend");
let inputSend = document.getElementById("inputMessage");
let btnUpdate = document.getElementById("btnUpdate");
let inputUpdate = document.getElementById("inputUsername");
let btns = document.querySelector("nav");

let localUsername = localStorage.getItem("username");
let chatroom = new Chatroom("#general", localUsername);

if (localUsername != null) {
  chatroom.username = localUsername;
} else {
  chatroom.username = "Anonymus";
}

btns.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.tagName === "BUTTON") {
    let room = e.target.textContent;
    chatroom.updateRoom(room);

    chatUI.clear();

    chatroom.getChats((data) => {
      chatUI.templateLI(data);
    });
  }
});

let chatUI = new ChatUI(ul);

chatroom.getChats((data) => {
  chatUI.templateLI(data);
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

btnUpdate.addEventListener("click", (e) => {
  e.preventDefault();

  if (inputUpdate.value != "") {
    chatroom.username = inputUpdate.value;
  }

  localStorage.setItem("username", chatroom.username);
  inputUpdate.value = "";

  let spanUser = document.getElementById("update");
  let spanT = setTimeout(() => {
    spanUser.textContent = `${chatroom.username}`;
  }, 0);
});
