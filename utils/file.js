const fs = require('node:fs')

const loadCourse = () => {
    return JSON.parse(
        fs.readFileSync('./data/daftar_tugas.json')
    )
}

module.exports = { loadCourse }