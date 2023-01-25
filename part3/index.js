// 1. Panjang string

const name = 'Rizkan';
const desc = '  aku-suka-baca   ';

console.log('panjang karakter nya adalah : ' + name.length);
// 2. Mengambil karakter pada string
console.log('panjang karakter nya adalah : ' + name.substr(0, 1));
// 3. Mengambil karakter pada string
console.log('panjang karakter nya adalah : ' + name.substring(2, 5));
// 4. Trim/hapus karakter tertentu
console.log('Hapus karakter - : ', desc.trim());
// 5. Replace beberapa karakter
console.log('Replace karakter - : ', desc.replaceAll('-', ' '));
console.log('Replace karakter - : ', desc.replace('aku', 'saya'));

// 6. merubah font type
console.log('Mengubah font type : ', name.toUpperCase());
console.log('Mengubah font type : ', name.toLowerCase());

// 7. split karakter
console.log('Split karakter : ', desc.split('-'));