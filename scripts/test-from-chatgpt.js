// ! DAY 1 = 5 Januari 2024
// * 1. Membalikan Kata

function balikKata(kata) {
  const balikKata = kata.split("");
  balikKata.reverse();
  return balikKata.join("");
}
console.log(balikKata("JavaScript")); // Output yang diharapkan: tpircSavaJ
console.log(balikKata("OpenAI")); // Output yang diharapkan: IAnepO

// * 2. Hitung Huruf Vokal

function hitungHurufVokal(kata) {
  let hitungVokal = 0;
  const vokal = ["a", "i", "u", "e", "o"];
  for (let char of kata) {
    if (vokal.includes(char)) {
      hitungVokal++;
    }
  }
  return hitungVokal;
}
console.log(hitungHurufVokal("JavaScript")); // Output yang diharapkan: 3
console.log(hitungHurufVokal("OpenAI GPT")); // Output yang diharapkan: 4

// * 3. Cek Bilangan Genap atau Ganjil

function cekBilangan(angka) {
  const number = angka;
  if (number % 2 == 0) {
    return "Bilangan Genap";
  } else {
    return "Bilangan Ganjil";
  }
}
// todo: atau versi singkatnya
// function cekBilangan(angka) {
//     return angka % 2 === 0 ? "Bilangan Genap" : "Bilangan Ganjil"
// }
// todo: atau versi singkatnya
console.log(cekBilangan(8)); // Output yang diharapkan: Bilangan Genap
console.log(cekBilangan(3)); // Output yang diharapkan: Bilangan Ganjil

// * 4. Gabung 2 Kata

function gabungKata(kata1, kata2) {
  const gabung = kata1 + " " + kata2;
  return gabung;
}
console.log(gabungKata("Hello", "World")); // Output yang diharapkan: "Hello World"
console.log(gabungKata("Open", "AI")); // Output yang diharapkan: "Open AI"

// * 5. Filter Angka Genap

function filterAngka(angka) {
  const number = [];
  for (const num of angka) {
    if (num % 2 === 0) {
      number.push(num);
    }
  }
  return number;
}
console.log(filterAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // Output yang diharapkan: [2, 4, 6, 8]
console.log(filterAngka([11, 22, 33, 44, 55, 66, 77, 88, 99])); // Output yang diharapkan: [22, 44, 66, 88]

// * 6. Cari daftar Hewan

const daftarHewan = {
  kucing: 2,
  anjing: 1,
  kelinci: 3,
  burung: 5,
};

function cariHewan(daftarHewan, hewan) {
  for (const daftar in daftarHewan) {
    if (daftar === hewan) {
      return "Hewan ditemukan!";
    }
  }
  return "Hewan tidak ditemukan!";
}
console.log(cariHewan(daftarHewan, "kucing")); // Output yang diharapkan: "Hewan ditemukan!"
console.log(cariHewan(daftarHewan, "ular")); // Output yang diharapkan: "Hewan tidak ditemukan!"

// * 7. Fungsi Rekursif

function hitungMundur(number) {
  if (number === 1) {
    return number;
  } else {
    console.log(number);
    return hitungMundur(number - 1);
  }
}
console.log(hitungMundur(5));

// * 8. Fungksi Rekursif Lanjutan

function hitungFaktorial(number) {
  if (number <= 1) {
    return 1;
  } else {
    return number * hitungFaktorial(number - 1);
  }
}
console.log(hitungFaktorial(5)); // Output yang diharapkan: 120 (5 x 4 x 3 x 2 x 1)
console.log(hitungFaktorial(3)); // Output yang diharapkan: 6 (3 x 2 x 1)

// * 9. Manipulasi String

function gantiHuruf(nilai) {
  let hasil = "";

  for (let i = 0; i < nilai.length; i++) {
    let huruf = nilai[i];

    // Mengecek apakah huruf adalah "z", jika iya, ganti dengan "a"
    // Jika tidak, ganti dengan huruf setelahnya dalam urutan abjad
    hasil += huruf === "z" ? "a" : String.fromCharCode(huruf.charCodeAt(0) + 1);
  }

  return hasil;
}
console.log(gantiHuruf("abc")); // Output yang diharapkan: "bcd"
console.log(gantiHuruf("xyz")); // Output yang diharapkan: "yza"

// * 10. Mencari huruf vokal dari parameter string array

function jumlahHurufVokal(nilai) {}
console.log(jumlahHurufVokal(["javascript", "python", "java"])); // Output yang diharapkan: 7
console.log(jumlahHurufVokal(["openai", "gpt", "three"])); // Output yang diharapkan: 6
