class Kendaraan {
  constructor(merk, tahunProduksi) {
    this.merk = merk;
    this.tahunProduksi = tahunProduksi;
  }

  hitungUsia() {
    const tahunSekarang = new Date().getFullYear();
    return tahunSekarang - this.tahunProduksi;
  }

  info() {
    console.log(`Merk: ${this.merk}`);
    console.log(`Tahun Produksi: ${this.tahunProduksi}`);
  }
}

class Mobil extends Kendaraan {
  constructor(merk, tahunProduksi, jumlahRoda) {
    super(merk, tahunProduksi);
    this.jumlahRoda = jumlahRoda;
  }

  info() {
    super.info();
    console.log(`Jumlah Roda: ${this.jumlahRoda}`);
    console.log(`Usia Kendaraan: ${this.hitungUsia()} tahun`);
  }
}

class Motor extends Kendaraan {
  constructor(merk, tahunProduksi, tipe) {
    super(merk, tahunProduksi);
    this.tipe = tipe;
  }

  info() {
    super.info();
    console.log(`Tipe Motor: ${this.tipe}`);
    console.log(`Usia Kendaraan: ${this.hitungUsia()} tahun`);
  }
}

const innova = new Mobil("Toyota", 2020, 4);
const YamahaR15 = new Motor("Honda", 2022, "Sport");

console.log("Info Mobil:");
innova.info();

console.log("\nInfo Motor:");
YamahaR15.info();
