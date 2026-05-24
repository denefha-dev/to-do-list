const fs = require('node:fs')
const readline = require('node:readline')
const { stdin: input, stdout: output } = require('node:process')
const { resolve } = require('node:dns')
const rl = readline.createInterface({
    input, 
    output
})

// ======================================================

// rl.question('masukan tugas mata kuliah: ', (matkul) => {
//     console.log(matkul);
//     rl.close()
// })

const theQuestion = (question) => {
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            resolve(answer)
        })
    })
}

const inputCourseWork = async () => {
    
    console.log('\n======================================');
    console.log('======= PENGELOLA TUGAS KULIAH =======');
    console.log('======================================');
    const nama = await theQuestion('Masukan nama anda: ')
    const univ = await theQuestion('Masukan universitas anda: ')
    const fakultas = await theQuestion('Masukan fakultas anda: ')
    const prodi = await theQuestion('Masukan prodi anda: ')
    const nim = await theQuestion('Masukan nim anda: ')
    const kodeKelas = await theQuestion('Masukan kode kelas: ')
    console.log('======================================');
    const matkul = await theQuestion('Masukan tugas mata kuliah: ')
    const jumlahSoal = await theQuestion('Masukan jumlah tugas: ')
    const deadline = await theQuestion('Masukan tanggal pengerjaan [contoh: 12 mei - 19 mei]: ')
    console.log('======================================');
    
    const tugasKuliah = {
        nama, univ, fakultas, prodi, nim, 
        TUGAS: {
            kodeKelas, matkul, jumlahSoal, deadline
        }
    }
    const fileBuffer = fs.readFileSync('./data/daftar_tugas.json', 'utf-8')
    const tugasUser = JSON.parse(fileBuffer)
    
    tugasUser.push(tugasKuliah)
    fs.writeFile('./data/daftar_tugas.json', JSON.stringify(tugasUser,null,2), (err) => {
        if (err) throw err
        console.log(`\nHI ${nama}, tugas anda berhasil disimpan!!`);
    })
    rl.close()
}

inputCourseWork()