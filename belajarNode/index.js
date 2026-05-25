const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
// Ketika pengguna membuka 'localhost:3000', kirimkan teks "Hello World!"
app.get('/', (req, res) => {
    // res.sendFile mencari file app.html di folder yang sama dengan server.js
    res.sendFile(path.join(__dirname, 'app.html'));
});
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});
// Menjalankan server
app.listen(port, () => {
    console.log(`Server localhost berhasil berjalan di http://localhost:${port}`);
});