const { theQuestion } = require("./utils/process");
const { closeProgram } = require("./utils/close");
const { addCourse } = require("./services/add");
const { viewCOurse } = require("./services/view");
const { searchCourse } = require("./services/search");
const { deleteCourse } = require('./services/delete')

// ==========================================

async function program() {
  while (true) {
    console.log("\n====================================");
    console.log("====== PENGELOLA TUGAS KAMPUS ======");
    console.log("====================================");
    console.log("1. Tambah Tugas");
    console.log("2. Lihat Tugas");
    console.log("3. Cari Tugas");
    console.log("4. Hapus Tugas");
    console.log("5. Ubah Data Tugas");
    console.log("6. Exit");

    console.log("====================================");
    let pilih = await theQuestion("Masukan Pilihan Program [1/2/3/4/5/6]: ");
    console.log("------------------------------------");

    if (pilih == "1") {
      await addCourse();
    } else if (pilih == "2") {
      await viewCOurse();
    } else if (pilih == "3") {
      await searchCourse();
    } else if (pilih == "4") {
      await deleteCourse()
    } else if (pilih == "5") {
      console.log("memilih ubah tugas");
    } else if (pilih == "6") {
      console.log("\nprogram selesai!");
      closeProgram();
    } else {
      console.log("\npilihan program tidak ada!");
    }
  }
}

program();
