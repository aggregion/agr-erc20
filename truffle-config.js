/* eslint-disable camelcase */
require('chai/register-should');
const HDWalletProvider = require('truffle-hdwallet-provider');
const MNEMONIC = process.env.MNEMONIC;

if (!MNEMONIC) {
  throw new Error('Set MNEMONIC environment variable');
}

const ROPSTEN_TOKEN = process.env.ROPSTEN_TOKEN;
const LIVE_TOKEN = process.env.LIVE_TOKEN;

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // eslint-disable-line camelcase
    },
    ropsten: {
      provider: function () {
        return new HDWalletProvider(MNEMONIC, `https://ropsten.infura.io/${ROPSTEN_TOKEN}`);
      },
      network_id: 3,
      gas: 4000000, // make sure this gas allocation isn't over 4M, which is the max
    },
    live: {
      provider: function () {
        return new HDWalletProvider(MNEMONIC, `https://mainnet.infura.io/v3/${LIVE_TOKEN}`);
      },
      network_id: 1,
      gas: 2000000, // make sure this gas allocation isn't over 4M, which is the max
    },
    coverage: {
      host: 'localhost',
      network_id: '*', // eslint-disable-line camelcase
      port: 8555,
      gas: 0xfffffffffff,
      gasPrice: 0x01,
    },
  },

  compilers: {
    solc: {
      version: '0.5.2',
    },
  },
};
