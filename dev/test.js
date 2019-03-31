const Blockchain = require('./blockchain');

const bitcoin = new Blockchain;
bitcoin.createNewBlock(2389, 'KDASDAKSDASD', 'MLKDNFNGFBSDFH'); 
bitcoin.createNewTransaction(100, 'SDKASNDANSKD', 'IREIPWRW');
bitcoin.createNewBlock(53453, 'ADSNFASLDFALSD', 'XCNVXCNVXCV');
bitcoin.createNewTransaction(10, 'SDKASNDANSKD', 'IREIPWRW');
bitcoin.createNewTransaction(20, 'SDKASNDANSKD', 'IREIPWRW');
bitcoin.createNewTransaction(30, 'SDKASNDANSKD', 'IREIPWRW'); 
bitcoin.createNewBlock(12312, 'ADSNFASLDFALSD', 'XCNVXCNVXCV');
console.log(bitcoin
);