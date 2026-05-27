const fs = require('node:fs')

//! generate folder (data)
const folderPath = './data' 
    if (fs.existsSync(folderPath)) {
        const stats = fs.statSync(folderPath)
        
        if (stats.isDirectory()) {
            console.log(`\nfolder (${folderPath}) sudah tersedia!`);
        } else {
            console.log(`\nada file bernama (${folderPath}), bukan folder!!`);
            console.log(`tidak bisa men-generate folder, karena terdapat file dengan nama (${folderPath})`);
        }
        
    } else {
        console.log(`\nfolder (${folderPath}) dalam proses pembuatan`);
        
        setTimeout(() => {
            fs.mkdir(folderPath, {recursive: true}, (err) => {
                if (err) throw err
                console.log(`\nfolder (${folderPath}) berhasil dibuat!!`);
            })
        }, 2000)
    }

//! generate file (daftar_tugas.json) 
const dataPath = './data/daftar_tugas.json'
    if (fs.existsSync(dataPath)) {
        const stats = fs.statSync(dataPath)
        
        if (stats.isFile()) {
            console.log(`file (${dataPath}) sudah tersedia!`);
        } 
        
    } else {
        console.log(`file (${dataPath}) dalam proses pembuatan`);
        
        setTimeout(() => {
            fs.writeFile(dataPath, '[]', 'utf-8', (err) => {
                if (err) throw err
                console.log(`file (${dataPath}) berhasil dibuat!!`);
            })
        }, 2500)
    }


//! generate folder (funct)
const functPath = './funct'
    if (fs.existsSync(functPath)) {
        const stats = fs.statSync(functPath)
        
        if (stats.isDirectory()) {
            console.log(`folder (${functPath}) sudah tersedia!`);
        } else {
            console.log(`\n ada file bernama (${functPath}), bukan folder!!`);
            console.log(`tidak bisa men-generate folder, karena terdapat file bernama (${functPath})`);            
        }
    } else {
        console.log(`folder (${functPath}) dalam proses pembuatan`);
        
        setTimeout(() => {
            fs.mkdir(functPath, {recursive:true}, (err) => {
                if (err) throw err
                console.log(`folder (${functPath}) berhasil dibuat!!`);
            })
        }, 3000)
    }

//! generate file (process.js) 
const filePath = './funct/process.js'
    if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath)
        
        if (stats.isFile()) {
            console.log(`file (${filePath}) sudah tersedia!`);
        } 
        
    } else {
        console.log(`file (${filePath}) dalam proses pembuatan`);
        
        setTimeout(() => {
            fs.writeFile(filePath, '', 'utf-8', (err) => {
                if (err) throw err
                console.log(`file (${filePath}) berhasil dibuat!!`);
            })
        }, 3500)
    }

//! generate file (close.js)
const closePath = './funct/close.js' 
    if (fs.existsSync(closePath)) {
        const stats = fs.statSync(closePath)
        
        if (stats.isFile(closePath)) {
            console.log(`file (${closePath}) sudah tersedia!`);
        }
    } else {
        console.log(`file (${closePath}) dalam proses pembuatan`);
        
        setTimeout(() => {
            fs.writeFile(closePath, '', 'utf-8', (err) => {
                if (err) throw err
                console.log(`file (${closePath}) berhasil dibuat!!`);
            })
        }, 4000)
    }

//! generate file (app.js)
const mainFile = './app.js'  
    if (fs.existsSync(mainFile)) {
        const stats = fs.statSync(mainFile)

        if (stats) {
            console.log(`file (${mainFile}) sudah tersedia!`);
        }
    } else {
        console.log(`file (${mainFile}) dalam proses pembuatan`);
        
        setTimeout(() => {
            fs.writeFile(mainFile, '', 'utf-8', (err) => {
                if (err) throw err
                console.log(`file (${mainFile}) berhasil dibuat!!`);
            })
        }, 4500)
    }