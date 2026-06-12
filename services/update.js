const { loadCourse } = require('../utils/file')
const { theQuestion } = require('../utils/process')

// ===================================

const editCourse = async () => {
    while (true) {
        const seeCourse = loadCourse()
        
        if (seeCourse.length === 0) {
            console.log('\ntidak ada tugas untuk diupdate saat ini!!');
            return
        }
        
        console.log('\n====================================');
        console.log('===== DAFTAR TUGAS MAHASISWA/I =====');
        console.log('====================================');
        
        seeCourse.forEach((item, index) => {
            console.log(`${index + 1}) ${item.TUGAS.matkul} ${item.nama}`);
        })
        console.log('====================================');
        

        console.log('\n==== UBAH DATA TUGAS MAHASISWA/I ====');
        console.log('-------------------------------------');
        const nomor = Number(
            await theQuestion('Masukan nomor tugas: ')
        )
        console.log('-------------------------------------');
        
        if (isNaN(nomor)) {
            console.log('\nhanya bisa memasukan angka saja!!');
            continue
        }
        
        const tugas = seeCourse[nomor - 1]
        
        if (!tugas) {
            console.log('\Nomor tugas tidak ditemukan!');
            continue
        }
        
            console.log(`Mata Kuliah     : ${tugas.TUGAS.matkul}`);
            console.log(`Jumlah Soal     : ${tugas.TUGAS.jumlahSoal}`);
            console.log(`Tenggat Waktu   : ${tugas.TUGAS.deadline}`);
            console.log(`Pemilik Tugas   : ${tugas.nama}`);
            console.log(`Universitas     : ${tugas.univ}`);
            console.log(`Fakultas        : ${tugas.fakultas}`);
            console.log(`Prodi/Jurusan   : ${tugas.prodi}`);
            console.log(`NIM Mahasiswa/i : ${tugas.nim}`);
            console.log(`Kode Kelas      : ${tugas.TUGAS.kodeKelas}`);
        console.log('=====================================');
        
        console.log('\n==============================');
        console.log('===== MENU MENGUBAH DATA =====');
        console.log('------------------------------');
        console.log('1. Ubah Semua Data');
        console.log('2. Mata Kuliah');
        console.log('3. Jumlah Soal');
        console.log('4. Tenggat Waktu');
        console.log('5. Pemilik Tugas');
        console.log('6. Universitas');
        console.log('7. Fakultas');
        console.log('8. Prodi/Jurusan');
        console.log('9. NIM');
        console.log('10. Kode Kelas');
        console.log('------------------------------');
        
        const pilih = Number(
            await theQuestion('Masukan Nomor Menu [1/2/3/4/5/6/7/8/9/10]: ')
        )
        console.log('------------------------------');
        
        switch (pilih) {
            case 1:
                console.log('\n===== MENGUBAH SEMUA DATA =====');
                console.log('-------------------------------');
                console.log(`Nama Mahasiswa/I: ${tugas.nama}`);
                tugas.nama = await theQuestion('Masukan Nama Terbaru: ')
                
                console.log(`\nUniversitas: ${tugas.univ}`);
                tugas.univ = await theQuestion('Masukan Universitas Terbaru: ')
                
                console.log(`\nFakultas: ${tugas.fakultas}`);
                tugas.fakultas = await theQuestion('Masukan Fakultas Terbaru: ')
                
                console.log(`\nProdi: ${tugas.prodi}`);
                tugas.prodi = await theQuestion('Masukan Prodi Terbaru: ')
                
                console.log(`\nNIM: ${tugas.nim}`);
                tugas.nim = await theQuestion('Masukan NIM Terbaru: ')
                
                console.log(`\nKode Kelas: ${tugas.TUGAS.kodeKelas}`);
                tugas.TUGAS.kodeKelas = await theQuestion('Masukan Kode Kelas Terbaru: ')
                
                console.log();
        }
    }
}

editCourse()