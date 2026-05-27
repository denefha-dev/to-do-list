const fs = require('node:fs')
const readline = require('node:readline')
const { stdin: input, stdout: output } = require('node:process')
const { resolve } = require('node:dns')
const rl = readline.createInterface({
    input, 
    output
})

// ======================================================

const theQuestion = (question) => {
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            resolve(answer)
        })
    })
}

const saveCourse = ({
        nama, univ, fakultas, prodi, nim, 
        TUGAS: { kodeKelas, matkul, jumlahSoal, deadline } }) => {
            
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

module.exports = {
    theQuestion,
    saveCourse,
}