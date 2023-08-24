const persons = [];

class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender; // Langkah 1: Tambahkan nilai gender ke constructor
  }

  setTitle(title) {
    // Langkah 2: Menambahkan argument title ke dalam method setTitle
    if (this.gender === "L") {
      this.name = title + this.name;
    } else if (this.gender === "P") {
      this.name = title + this.name;
    }
  }

  static find(name) {
    // Langkah 6: Mencari objek dalam array persons berdasarkan nama
    return persons.find((person) => person.name === name);
  }
}

// Langkah 3: Membuat objek Person
const person1 = new Person("Jhon", "L");
person1.setTitle("Tuan ");

const person2 = new Person("Maria", "P");
person2.setTitle("Nyonya ");

// Langkah 4: Menambahkan objek Person ke dalam array persons
persons.push(person1, person2);

// Langkah 5: Menampilkan objek persons
console.log(persons);

// Langkah 7: Memanggil fungsi Person.find(name)
const foundPerson = Person.find("Tuan Jhon");
console.log(foundPerson);
