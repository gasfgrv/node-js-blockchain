import Block from '../model/block.js';

export default class Blockchain {

    constructor(difficulty = 1) {
        const genesisBlock = new Block();
        this.blocks = [];
        this.index = 1;
        this.difficulty = difficulty;

        this.blocks.push(genesisBlock)
    }

    getLastBlock() {
        return this.blocks[this.blocks.length - 1];
    }

    addBlock(data) {
        const index = this.index;
        const difficulty = this.difficulty;
        const previousHash = this.getLastBlock().hash;
        const block = new Block(index, previousHash, data, difficulty);

        this.index++;

        this.blocks.push(block);
    }

    isValid() {
            this.blocks.forEach((block, index, blocks) => {
            const currentBlock = block;
            const previousBlock = blocks[index - 1];

            if (this.realizeChecks(currentBlock, previousBlock)) {
                return false;
            }
        });

        return true;
    }

    realizeChecks(currentBlock, previousBlock) {
        return this.checkHash(currentBlock)
            || this.checkIndexes(currentBlock, previousBlock)
            || this.checkPreviousHash(currentBlock, previousBlock);
    }

    checkHash(currentBlock) {
        return currentBlock.hash !== currentBlock.generateHash();
    }

    checkIndexes(currentBlock, previousBlock) {
        if (currentBlock.index === 0) {
            return;
        }
        return currentBlock.index !== previousBlock.index + 1;
    }

    checkPreviousHash(currentBlock, previousBlock) {
        if (currentBlock.index === 0) {
            return;
        }
        return currentBlock.previousHash !== previousBlock.hash;
    }

}