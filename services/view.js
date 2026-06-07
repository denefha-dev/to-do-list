const fs = require("node:fs");
const { theQuestion } = require("../utils/process");
const { loadCourse } = require('../utils/file')

// ===================================

const viewCOurse = async () => {
  while (true) {
    const seeCourse = loadCourse()

    if (seeCourse.length === 0) {
      console.log("\ntidak ada tugas untuk saat ini!!");
      return;
    }

    console.log("\n==================================");
    console.log("==== DAFTAR TUGAS MAHASISWA/I ====");
    console.log("----------------------------------");

    seeCourse.forEach((item, index) => {
      console.log(`No - ${index + 1} ${item.TUGAS.matkul} ${item.nama}`);
    });
    console.log("==================================");

    const detail = (
      await theQuestion("\nIngin lihat detail tugas? [y/n]: ")
    ).toLowerCase();
    console.log("----------------------------------");

    if (detail == "y") {
      const nomor = Number(await theQuestion("Masukan nomor tugas: "));

      if (isNaN(nomor)) {
        console.log("\nMasukan nomor berupa angka!!");
        continue;
      }

      const tugas = seeCourse[nomor - 1];

      if (!tugas) {
        console.log("\nNomor tugas tidak ditemukan!!");
        continue;
      }

      console.log("\n========= DETAIL TUGAS MAHASISWA/I =========");

      console.log(`Mata Kuliah     : ${tugas.TUGAS.matkul}`);
      console.log(`Jumlah Soal     : ${tugas.TUGAS.jumlahSoal}`);
      console.log(`Tenggat Waktu   : ${tugas.TUGAS.deadline}`);
      console.log(`Pemilik Tugas   : ${tugas.nama}`);
      console.log(`Universitas     : ${tugas.univ}`);
      console.log(`Fakultas        : ${tugas.fakultas}`);
      console.log(`Prodi/Jurusan   : ${tugas.prodi}`);
      console.log(`NIM Mahasiswa/i : ${tugas.nim}`);
      console.log(`Kode Kelas      : ${tugas.TUGAS.kodeKelas}`);
    } else if (detail == "n") {
      break
    }else {
      console.log('\nhanya bisa masukan [y/n]');
      continue
    }
  }
};

module.exports = { viewCOurse };
