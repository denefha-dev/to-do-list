const fs = require('node:fs')

//! generate folder (data)
const folderPath = './data' 
    if (fs.existsSync(folderPath)) {
        const stats = fs.statSync(folderPath)
        
        if (stats.isDirectory()) {
            console.log('\nfolder (data) sudah tersedia!');
        } else {
            console.log('\nada file bernama (data), bukan folder!!');
            console.log('tidak bisa men-generate folder, karena terdapat file dengan nama (data)');
        }
        
    } else {
        console.log('\nfolder (data) dalam proses pembuatan');
        
        setTimeout(() => {
            fs.mkdir(folderPath, {recursive: true}, (err) => {
                if (err) throw err
                console.log('\nfolder (data) berhasil dibuat!!');
            })
        }, 2000)
    }

//! generate file (daftar_tugas.json) 
const dataPath = './data/daftar_tugas.json'
    if (fs.existsSync(dataPath)) {
        const stats = fs.statSync(dataPath)
        
        if (stats.isFile()) {
            console.log('file (daftar_tugas.json) sudah tersedia!');
        } 
        
    } else {
        console.log('file (daftar_tugas.json) dalam proses pembuatan');
        
        setTimeout(() => {
            fs.writeFile(dataPath, '[]', 'utf-8', (err) => {
                if (err) throw err
                console.log('file (daftar_tugas.json) berhasil dibuat!!');
            })
        }, 2500)
    }

//! generate file (utils.js) 
const filePath = './utils.js'
    if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath)
        
        if (stats.isFile()) {
            console.log('file (utils.js) sudah tersedia!');
        } 
        
    } else {
        console.log('file (utils.js) dalam proses pembuatan');
        
        setTimeout(() => {
            fs.writeFile(filePath, '', 'utf-8', (err) => {
                if (err) throw err
                console.log('file (utils.js) berhasil dibuat!!');
            })
        }, 3000)
    }

//! generate file (app.js)
const mainFile = './app.js'  
    if (fs.existsSync(mainFile)) {
        const stats = fs.statSync(mainFile)

        if (stats) {
            console.log('file (app.js) sudah tersedia!');
        }
    } else {
        console.log('file (app.js) dalam proses pembuatan');
        
        setTimeout(() => {
            fs.writeFile(mainFile, '', 'utf-8', (err) => {
                if (err) throw err
                console.log('file (app.js) berhasil dibuat!!');
            })
        }, 3500)
    }