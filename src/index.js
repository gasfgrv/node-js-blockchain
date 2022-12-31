import Blockchain from "./controller/blockchain.js";

const blockchain = new Blockchain();
const blockchainSize = Math.floor(Math.random() * 100) + 1;

for (let i = 0; i <= blockchainSize - 1; i++) {
    blockchain.addBlock(`Bloco #${i}`)
}

console.log(blockchain);

console.log(`This blockchain is valid: ${blockchain.isValid()}`);