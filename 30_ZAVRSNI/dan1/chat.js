export class Chatroom {
  constructor(r, u) {
    this.room = r;
    this.username = u;
    this.chat = db.collection("chats");
  }
  //room
  get room() {
    return this._room;
  }

  set room(r) {
    this._room = r;
  }

  // username

  get username() {
    return this._username;
  }

  set username(u) {
    if (u.length >= 2 && u.length <= 10) {
      if (u.trim().length > 0) {
        this._username = u;
      }
    } else {
      alert("Invalid username!");
    }
  }

  //method
  async addChat(message) {
    let date = new Date();
    let ts = firebase.firestore.Timestamp.fromDate(date);
    let obj = {
      message: message,
      username: this.username,
      room: this.room,
      created_at: ts,
    };

    let response = await this.chat.add(obj);
    return response; // Vracamo Promise i od njega mozemo potrazivati .then i .catch
  }

  //pracenje poruka u bazi i ispis  dodatih poruka
  getChats(callback) {
    this.chat.onSnapshot((snapshot) => {
      //.where
      let changes = snapshot.docChanges();

      changes.forEach((change) => {
        let type = change.type;
        let doc = change.doc;

        if (type == "added") {
          callback(doc.data());
        }
        if (doc.data().room == this.room) {
          callback(doc.data());
        }
      });
    });
  }
}
