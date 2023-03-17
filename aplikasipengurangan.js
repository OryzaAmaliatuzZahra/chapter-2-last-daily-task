const {kurang, kurangi} = require('./pengurangan')

// 2 hasil kurang inputan user
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("-----------------------------------------------")
console.log("             Aplikasi Pengurangan              ")
console.log("-----------------------------------------------")
rl.question('Input angka pertama yang akan dikurangi: ', (angka1) => {
    rl.question('Input angka kedua yang akan dikurangi: ', (angka2) => {
        console.log("==============================================")
        const hasil = kurang(parseInt(angka1), parseInt(angka2))
        console.log(`Hasil pengurangan dari ${angka1} dan ${angka2} adalah ${hasil}`);
        console.log("-----------------------------------------------")
        rl.close();
    })
});