class Film {
  // Ovim putem zabranjujemo pristup van klase
  #naslov;
  #reziser;
  #godinaIzdanja;

  constructor(naslov, reziser, godinaIzdanja) {
    this.naslov = naslov;
    this.reziser = reziser;
    this.godinaIzdanja = godinaIzdanja;
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
}

export { Film };
