const { theQuestion, saveCourse } = require("../utils/process");

const addCourse = async () => {
  console.log("\n===================================");
  console.log("===== PENGELOLA TUGAS TERBARU =====");
  console.log("===================================");
  const nama = (await theQuestion("Masukan nama anda: ")).toUpperCase();
  const univ = (await theQuestion("Masukan universitas anda: ")).toLowerCase();
  const fakultas = (await theQuestion("Masukan fakultas anda: ")).toLowerCase();
  const prodi = (await theQuestion("Masukan prodi anda: ")).toLowerCase();
  const nim = (await theQuestion("Masukan nim anda: ")).toLowerCase();
  console.log("===================================");
  const kodeKelas = (await theQuestion("Masukan kode kelas: ")).toUpperCase();
  const matkul = (
    await theQuestion("Masukan tugas mata kuliah: ")
  ).toLowerCase();
  const jumlahSoal = (
    await theQuestion("Masukan jumlah tugas: ")
  ).toLowerCase();
  const deadline = (
    await theQuestion("Masukan tanggal pengerjaan [contoh: 12 mei - 19 mei]: ")
  ).toLowerCase();
  console.log("===================================");

  saveCourse({
    nama,
    univ,
    fakultas,
    prodi,
    nim,
    TUGAS: { kodeKelas, matkul, jumlahSoal, deadline },
  });
};

module.exports = { addCourse };
