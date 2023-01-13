export class Pacijent {
  constructor(i, v, t) {
    this.ime = i;
    this.visina = v;
    this.tezina = t;
  }

  //ime
  set ime(i) {
    this._ime = i;
  }

  get ime() {
    return this._ime;
  }
  //visina
  set visina(v) {
    if (v < 2.5 && v > 0) {
      this._visina = v;
    } else {
      this._visina = 1.7;
    }
  }

  get visina() {
    return this._visina;
  }
  //težina
  set tezina(t) {
    if (t > 0 && t < 550) {
      this._tezina = t;
    } else {
      this._tezina = 58;
    }
  }

  get tezina() {
    return this._tezina;
  }
  //metode ostale
  stampaj() {
    console.log(this);
  }

  stampajListu() {
    let htmlLista = `<ul>
    <li>Ime:${this.ime}</li>
    <li>Visina:${this.visina}</li>
    <li>Tezina:${this.tezina}</li>
    </ul>
    `;
    return htmlLista;
  }

  bmi() {
    let bmi = this.tezina / (this.visina * this.visina);
    return bmi;
  }

  kritican() {
    let x = false;
    if (this.bmi() < 15 || this.bmi() > 40) {
      x = true;
    }
    return x;
  }
}
