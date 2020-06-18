const Blockchain = require('./controller/blockchain');

const blockchain = new Blockchain();

const blockchainSize = Math.floor(Math.random() * 100) + 1;

for (let i = 0; i <= blockchainSize; i++) {
    blockchain.addBlock(`Bloco #${i}`)
}
  

    


console.log(blockchain);

console.log(blockchain.isValid());