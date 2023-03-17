const {bagi} = require('./pembagian')

// 4 hasil bagi inputan user
const readline2 = require('readline');

const rl2 = readline2.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("-----------------------------------------------")
console.log("               Aplikasi Pembagian              ")
console.log("-----------------------------------------------")
rl2.question('Input angka pertama yang akan dibagi: ', (angka1) => {
    rl2.question('Input angka kedua yang akan dibagi: ', (angka2) => {
        console.log("==============================================")
        const hasil = bagi(parseInt(angka1), parseInt(angka2))
        console.log(`Hasil pembagian dari ${angka1} dan ${angka2} adalah ${hasil}`);
        console.log("-----------------------------------------------")
        rl2.close();
    })
});
