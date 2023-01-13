class Film {
  // Ovim putem zabranjujemo pristup van klase
  #naslov;
  #reziser;
  #godinaIzdanja;
  #ocene;

  constructor(naslov, reziser, godinaIzdanja, ocene) {
    this.naslov = naslov;
    this.reziser = reziser;
    this.godinaIzdanja = godinaIzdanja;
    this.ocene = ocene;
  }

  get ocene() {
    return this.#ocene;
  }

  set ocene(o) {
    if (Array.isArray(o)) {
      this.#ocene = o;
    } else {
      this.#ocene = [];
    }
  }

  set naslov(n) {
    if (n.length > 0) {
      this.#naslov = n;
    } else {
      this.#naslov = "GRESKA! Dodaj naslov!";
    }
  }

  get naslov() {
    return this.#naslov;
  }

  set reziser(r) {
    if (r.length > 0) {
      this.#reziser = r;
    } else {
      this.#reziser = "GRESKA! Dodaj ime rezisera!";
    }
  }

  get reziser() {
    return this.#reziser;
  }

  set godinaIzdanja(g) {
    if (g > 1800) {
      this.#godinaIzdanja = g;
    } else {
      this.#godinaIzdanja = 1800;
    }
  }

  get godinaIzdanja() {
    return this.#godinaIzdanja;
  }

  stampaj() {
    console.log(this.naslov);
  }

  prosek() {
    let suma = 0;
    this.ocene.forEach((el) => {
      suma += el;
    });
    return suma / this.ocene.length;
  }
}

export { Film };
