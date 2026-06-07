const fs = require("node:fs");
const { theQuestion } = require("../utils/process");
const { loadCourse } = require('../utils/file')

// =============================================

const searchCourse = async () => {
  const daftarTugas = loadCourse()

  if (daftarTugas.length == 0) {
    console.log(`\ntidak ada tugas untuk saat ini!!`);
    return;
  }

  console.log("\n=======================================");
  console.log("====== MENCARI TUGAS MAHASISWA/I ======");
  console.log("=======================================");

  const keyword = (await theQuestion("Masukan Mata Kuliah: ")).toLowerCase();

  const hasil = daftarTugas.filter((item) =>
    item.TUGAS.matkul.toLowerCase().includes(keyword),
  );

  if (hasil.length === 0) {
    console.log(`\nMata Kuliah ${keyword} tidak ditemukan!!`);
    console.log("periksa kembali inputan anda!");
    return;
  }

  console.log("---------------------------------------");
  hasil.forEach((item, index) => {
    console.log(`Mata Kuliah ${index + 1} : ${item.TUGAS.matkul} ${item.nama}`);
  });
  console.log("---------------------------------------");
};

module.exports = { searchCourse };
