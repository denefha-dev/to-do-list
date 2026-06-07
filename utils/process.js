const fs = require('node:fs')
const readline = require('node:readline')

const { stdin: input, stdout: output } = require('node:process')
const { resolve } = require('node:dns')
const rl = readline.createInterface({
    input, 
    output
})

// ==== local module ====
const { loadCourse } = require('../utils/file')

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
    const tugasUser = loadCourse()
    const dataPath = './data/daftar_tugas.json'

    tugasUser.push(tugasKuliah)
    fs.writeFileSync(dataPath, JSON.stringify(tugasUser,null,2))
    console.log(`\nHI ${nama}, tugas terbaru kamu berhasil disimpan!!`);
    
}

module.exports = {
    theQuestion,
    saveCourse,
}