const Blockchain = require('./blockchain');

const blockchain = new Blockchain();
blockchain.addBlock("Bloco #1");
blockchain.addBlock("Bloco #2");
blockchain.addBlock("Bloco #3");

console.log(blockchain);

console.log(blockchain.isValid());