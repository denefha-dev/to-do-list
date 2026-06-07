const fs = require('node:fs')

const { loadCourse } = require('../utils/file')
const { theQuestion } = require('../utils/process')

// ================================

const deleteCourse = async  () => {
    while (true) {

        const seeCourse = loadCourse()
        
        if (seeCourse.length === 0) {
            console.log('\ntidak ada tugas untuk dihapus!!');
            return
        }
        
        console.log('\n================================');
        console.log('===== DAFTAR TUGAS SAAT INI ====');
        console.log('--------------------------------');
        
        seeCourse.forEach((item,index) => {
            console.log(`Tugas - ${index + 1}`);
            console.log(`Mata Kuliah   : ${item.TUGAS.matkul}`);
            console.log(`Pemilik       : ${item.nama}`)
            console.log('--------------------------------');
        })
        
        console.log('\n===== HAPUS TUGAS MAHASISWA/I =====');
        console.log('-----------------------------------');    
        const nomor = Number( await theQuestion('Masukan nomor tugas: ') )
        console.log('-----------------------------------');  
        console.log('detail tugas yang dihapus');
        console.log('-----------------------------------');  
        
        seeCourse.forEach((item, index) => {
            console.log(`Mata kuliah    : ${item.TUGAS.matkul}`);
            console.log(`Pemilik        : ${item.nama}`);
            console.log(`Jumlah soal    : ${item.TUGAS.jumlahSoal}`);
            console.log(`Tenggat Waktu  : ${item.TUGAS.deadline}`);
            console.log(`Kode Kelas     : ${item.TUGAS.kodeKelas}`);
            console.log(`NIM            : ${item.nim}`);
            console.log(`Univ           : ${item.univ}`);
            console.log(`Fakultas       : ${item.fakultas}`);
            console.log(`Prodi/Jurusan  : ${item.prodi}`);
        })
        console.log('================================');
        
        if (isNaN(nomor)) {
            console.log('\nhanya bisa masukan angka!!');
            continue
        }
        
        const tugas = seeCourse[nomor - 1]
        
        if (!tugas) {
            console.log('\nnomor tugas tidak ditemukan!!');
            continue
        }
        
        seeCourse.splice(-1,1)
        fs.writeFileSync('./data/daftar_tugas.json', JSON.stringify(seeCourse, null, 2))
        
        console.log('\nTugas berhasil dihapus!');
        break
    }
}

module.exports = { deleteCourse }