const { theQuestion, saveCourse } = require('./process')

const addCourse = async () => {
    console.log('\n===================================');
    console.log('===== PENGELOLA TUGAS TERBARU =====');
    console.log('===================================');
    const nama = await theQuestion('Masukan nama anda: ')
    const univ = await theQuestion('Masukan universitas anda: ')
    const fakultas = await theQuestion('Masukan fakultas anda: ')
    const prodi = await theQuestion('Masukan prodi anda: ')
    const nim = await theQuestion('Masukan nim anda: ')
    const kodeKelas = await theQuestion('Masukan kode kelas: ')
    console.log('===================================');
    const matkul = await theQuestion('Masukan tugas mata kuliah: ')
    const jumlahSoal = await theQuestion('Masukan jumlah tugas: ')
    const deadline = await theQuestion('Masukan tanggal pengerjaan [contoh: 12 mei - 19 mei]: ')    
    console.log('===================================');

    saveCourse({
        nama, univ, fakultas, prodi, nim,
        TUGAS: { kodeKelas, matkul, jumlahSoal, deadline }        
    })
}

module.exports = { addCourse }