const {total} = require('./totalharga')
const {hargaTotal} = require('./totalharga')

// 5 hasil total harga kali quantitas barang
const readline5 = require('readline');

const rl5 = readline5.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("-----------------------------------------------")
console.log("            Aplikasi Total Harga              ")
console.log("-----------------------------------------------")
rl5.question('Input harga barang pertama: ', (harga1) => {
    rl5.question('Input harga kuantitas barang pertama: ', (kuantitas1) => {
        console.log("==============================================")
        const hasil1 = total(parseInt(harga1), parseInt(kuantitas1))
        console.log(`Harga total barang Pertama: ${hasil1}`);
        console.log("-----------------------------------------------")
rl5.question('Input harga barang kedua: ', (harga2) => {
    rl5.question('Input kuantitas barang kedua: ', (kuantitas2) => {
        console.log("==============================================")
        const hasil2 = total(parseInt(harga2), parseInt(kuantitas2))
        console.log(`Harga total barang kedua: ${hasil2}`);
        console.log("-----------------------------------------------")
rl5.question('Input harga total barang pertama: ', (totalHarga1) => {
        rl5.question('Input harga total barang kedua: ', (totalHarga2) => {
            console.log("==============================================")
            const hasil3 = hargaTotal(parseInt(totalHarga1), parseInt(totalHarga2))
            console.log(`Total harga keseluruhan: ${hasil3}`);
            console.log("-----------------------------------------------")
            rl5.close();
    })
    })
    })
});
});
});
