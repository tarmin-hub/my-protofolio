class Snack {
  constructor(nama, jenis, rasa) {
    this.nama = nama;
    this.jenis = jenis;
    this.rasa = rasa;
  }

  detailProduck() {
    const detail = ` ini adalah makann ringan ${this.name}, termasuk jenis makanan ringan ${this.jenis},
dengan rasa ${this.rasa}`;
    return detail;
  }
}

const SnackRingan = new Snack("nasi", "kering", "gurih");
console.log(SnackRingan);
