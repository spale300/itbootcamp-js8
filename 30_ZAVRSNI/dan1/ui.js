export class ChatUI {
  constructor(ul) {
    this.ul = ul;
  }

  get ul() {
    return this._ul;
  }

  set ul(ul) {
    this._ul = ul;
  }

  templateLI(data) {
    let html = `<li class="list"> <span class="username">${
      data.username
    } :</span>
    <span class="message">${data.message}</span><br>
    <span>${this.time(data)}</span>
    </li>
    `;
    this.ul.innerHTML += html;
  }

  time(data) {
    let now = new Date();
    let date = data.created_at.toDate();
    let year = date.getFullYear();
    let mon = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();
    let time = "";

    day = String(day).padStart(2, "0");
    mon = String(mon).padStart(2, "0");
    year = String(year).padStart(2, "0");
    min = String(min).padStart(2, "0");

    if (now.getFullYear() == year) {
      if (now.getMonth() + 1 == mon) {
        if (now.getDate() == day) {
          time = `${hour}:${min}`;
        } else {
          time = `${day}.${mon}.${year}. - ${hour}:${min}`;
        }
      } else {
        time = `${day}.${mon}.${year}. - ${hour}:${min}`;
      }
    } else {
      time = `${day}.${mon}.${year}. - ${hour}:${min}`;
    }

    return time;
  }

  clear() {
    this.ul.innerHTML = "";
  }
}
