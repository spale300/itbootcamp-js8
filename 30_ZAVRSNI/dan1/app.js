import { Chatroom } from "./chat.js";
import { ChatUI } from "./ui.js";

let chatroom = new Chatroom("#general", "sspasic");

chatroom.getChats((data) => {
  console.log(data);
});

let ul = document.querySelector("ul");
let chatUI = new ChatUI(ul);

chatroom.getChats((data) => {
  chatUI.templateLI(data);
});

let btn = document.getElementById("btnSend");
let input = document.getElementById("inputMessage");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (input.value != "") {
    chatroom
      .addChat(input.value)
      .then(() => {
        input.value = "";
        console.log(`Uspesno dodat cet!`);
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
