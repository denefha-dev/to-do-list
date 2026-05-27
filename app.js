
const { theQuestion, saveCourse } = require('./funct/process')
const { closeProgram } = require('./funct/close')

// const main = async () => {
//     console.log('\n======================================');
//     console.log('======= PENGELOLA TUGAS KULIAH =======');
//     console.log('======================================');
//     const nama = await theQuestion('Masukan nama anda: ')
//     const univ = await theQuestion('Masukan universitas anda: ')
//     const fakultas = await theQuestion('Masukan fakultas anda: ')
//     const prodi = await theQuestion('Masukan prodi anda: ')
//     const nim = await theQuestion('Masukan nim anda: ')
//     const kodeKelas = await theQuestion('Masukan kode kelas: ')
//     console.log('======================================');
//     const matkul = await theQuestion('Masukan tugas mata kuliah: ')
//     const jumlahSoal = await theQuestion('Masukan jumlah tugas: ')
//     const deadline = await theQuestion('Masukan tanggal pengerjaan [contoh: 12 mei - 19 mei]: ')
//     console.log('======================================');
    
//     saveCourse({
//         nama, univ, fakultas, prodi, nim,
//         TUGAS: { kodeKelas, matkul, jumlahSoal, deadline }
//     })
// }

// main()

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
        
        let pilih = await theQuestion('Masukan Pilihan Program [1/2/3/4/5/6]: ')

        if (pilih == "1") {
            console.log('memilih tambah tugas');
        } else if (pilih == "2") {
            console.log('memilih lihat tugas');
        } else if (pilih == "3") {
            console.log('memilih cari tugas');
        } else if (pilih == "4") {
            console.log('memilih hapus tugas');
        } else if (pilih == "5") {
            console.log('memilih ubah status tugas');
        } else if (pilih == "6") {
            closeProgram()
        } else {
            console.log('pilihan program tidak ada!');
        }
    }
}

program()