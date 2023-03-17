const {kali} = require('./perkalian')

// 3 hasil kali inputan user
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("-----------------------------------------------")
console.log("              Aplikasi Perkalian               ")
console.log("-----------------------------------------------")
rl.question('Input angka pertama yang akan dikali: ', (angka1) => {
    rl.question('Input angka kedua yang akan dikali: ', (angka2) => {
        console.log("==============================================")
        const hasil = kali(parseInt(angka1), parseInt(angka2))
        console.log(`Hasil perkalian dari ${angka1} dan ${angka2} adalah ${hasil}`);
        console.log("-----------------------------------------------")
        rl.close();
    })
});