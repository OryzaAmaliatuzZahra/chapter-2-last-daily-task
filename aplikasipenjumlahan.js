// import {sum} from './penjumlahan'

const {sum, sum2} = require('./penjumlahan')





// console.log(kurang(10, 300))


// 1 hasil tambah inputan user (done)

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("-----------------------------------------------")
console.log("              Aplikasi Penjumlahan             ")
console.log("-----------------------------------------------")

rl.question('Input angka pertama yang akan dijumlahkan: ', (angka1) => {
    rl.question('Input angka kedua yang akan dijumlahkan: ', (angka2) => {
      console.log("==============================================")
        const hasil = sum(parseInt(angka1), parseInt(angka2))
        console.log(`Hasil penjumlahan dari ${angka1} dan ${angka2} adalah ${hasil}`);
        console.log("-----------------------------------------------")
        rl.close();
    })
});
