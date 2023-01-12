class Pacijent {
  constructor(ime, visina, tezina) {
    this.ime = ime;
    this.visina = visina;
    this.tezina = tezina;
  }

  set ime(i) {
    if (i.length > 0) {
      this._ime = i;
    } else {
      this._ime = "GRESKA! Dodaj ime";
    }
  }

  get ime() {
    return this._ime;
  }

  set visina(v) {
    if (v > 0 && v < 250) {
      this._visina = v;
    } else {
      this._visina = 150;
    }
  }

  get visina() {
    return this._visina;
  }

  set tezina(t) {
    if (t > 0 && t < 550) {
      this._tezina = t;
    } else {
      this._tezina = 60;
    }
  }

  get tezina() {
    return this._tezina;
  }

  stampaj() {
    console.log(`${this.ime} je visok ${this.visina} i tezak ${this.tezina}.`);
  }

  bmi() {
    let visinaM = this.visina / 100;
    let bmi = this.tezina / Math.sqrt(visinaM);
    return bmi;
  }

  kritican() {
    if (this.bmi() < 15 && this.bmi() > 40) {
      return true;
    } else {
      return false;
    }
  }
}

export { Pacijent };
