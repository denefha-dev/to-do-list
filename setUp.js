const fs = require('node:fs')

// ===== refactor function generate folder n file =====

console.log('\n==========================================');
console.log('====== PROGRAM GENERATE FILE/FOLDER ======');
console.log('==========================================');

const generateFolder = (folderPath) => {
    if (fs.existsSync(folderPath)) {
        const stats = fs.statSync(folderPath)
        
        if (stats.isDirectory()) {
            console.log(`folder (${folderPath}) sudah tersedia!!`);
            
        } else {
            console.log(`ada file bernama (${folderPath}), bukan folder`);
            console.log(`tidak bisa men-generate folder, karena terdapat file dengan nama (${folderPath})`);
        }
    } else {
        console.log(`\nfolder (${folderPath}) dalam proses pembuatan!`);
        
        fs.mkdir(folderPath, { recursive:true }, (err) => {
            if (err) throw err
            
            console.log(`folder (${folderPath}) berhasil dibuat!`);
        })
    }
}

generateFolder('./data')
generateFolder('./funct')


const generateFile = (filePath) => {
    if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath)
        
        if (stats.isFile()) {
            console.log(`file (${filePath}) sudah tersedia!!`);
        }        
    } else {
        console.log(`file (${filePath}) dalam proses pembuatan`);
        
        fs.writeFile(filePath, '', 'utf-8', (err) => {
            if (err) throw err
            console.log(`file (${filePath}) berhasil dibuat!!`);
        })
    }
}

generateFile('./data/daftar_tugas.json', '[]')
generateFile('./funct/add.js')
generateFile('./funct/close.js')
generateFile('./funct/process.js')
generateFile('./funct/view.js')
generateFile('./funct/search.js')

// ==== main file ====
generateFile('./app.js')

