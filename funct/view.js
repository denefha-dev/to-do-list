const fs = require('node:fs')

// ===================================

const viewCOurse = () => {
    const fileCourse = fs.readFileSync('./data/daftar_tugas.json', 'utf-8')
    const seeCourse = JSON.parse(fileCourse)
    
    if (seeCourse.length === 0) {
        console.log('\ntidak ada tugas untuk saat ini!!');
        return
    }
    
    console.log('\n==================================');
    console.log('==== DAFTAR TUGAS MAHASISWA/I ====');
    console.log('----------------------------------');
    
    seeCourse.forEach((item, index) => {
        console.log(`Tugas no - ${index + 1}`);
        console.log('----------------------------------');
        
        console.log(`Nama Mahasiswa/i : ${item.nama}`);
    }) 
}

module.exports = { viewCOurse }