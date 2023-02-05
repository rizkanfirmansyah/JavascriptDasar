//  Errors Javascript

try {
    const result = prompt("Masukkan angka : ");
    if (result > 10) {
        throw "Angka terlalu banyak";
    }
} catch (err) {
    console.error(err);
} finally {
    console.log("Block code berhasil dijalankan");
}