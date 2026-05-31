const { theQuestion } = require('./funct/process')
const { closeProgram } = require('./funct/close')
const { addCourse } = require('./funct/add')
const { viewCOurse } = require('./funct/view')

// ==========================================

async function program() {
    while (true) {
        console.log('\n====================================');
        console.log('====== PENGELOLA TUGAS KAMPUS ======');
        console.log('====================================');
        console.log('1. Tambah Tugas');
        console.log('2. Lihat Tugas');
        console.log('3. Cari Tugas');
        console.log('4. Hapus Tugas');
        console.log('5. Ubah Status Tugas');
        console.log('6. Exit');
        
        console.log('====================================');
        let pilih = await theQuestion('Masukan Pilihan Program [1/2/3/4/5/6]: ')
        console.log('------------------------------------');

        if (pilih == "1") {
            await addCourse()
        } else if (pilih == "2") {
            viewCOurse()
        } else if (pilih == "3") {
            console.log('memilih cari tugas');
        } else if (pilih == "4") {
            console.log('memilih hapus tugas');
        } else if (pilih == "5") {
            console.log('memilih ubah status tugas');
        } else if (pilih == "6") {
            console.log('\nprogram selesai!');
            closeProgram()
        } else {
            console.log('pilihan program tidak ada!');
        }
    }
}

program()