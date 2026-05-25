// 1. Tangkap elemen tombol berdasarkan ID-nya
const tombolAbout = document.getElementById('tombol');

// 2. Tambahkan 'pendengar' (event listener) untuk aksi klik
tombolAbout.addEventListener('click', function(event) {
    
    // Menampilkan pesan pop-up di browser
    alert('Tombol berhasil ditekan! Kamu akan dialihkan ke halaman About.');
    
    // Menampilkan pesan di tab Console (tekan F12 di browser untuk melihatnya)
    console.log('Proses pemindahan halaman sedang berjalan...');
    
});
