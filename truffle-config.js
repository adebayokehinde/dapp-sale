const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonicPhrase = "child soap link earn merge easily galaxy similar logic busy envelope weekend"

const INFURA_ADDRESS_TESTNET =
  "https://ropsten.infura.io/v3/6d49b971956743b7b56dddc0d1d6d06c";
const INFURA_ADDRESS_MAINNET =
  "https://mainnet.infura.io/v3/6d49b971956743b7b56dddc0d1d6d06c";

const BSC_MAINNET = "https://bsc-dataseed1.binance.org:443"
const BSC_TESTNET =  "https://data-seed-prebsc-2-s1.binance.org:8545"
const ANKR_TESTNET = "https://apis.ankr.com/0f0f794748b6400394c382f3c5ac4e0b/e6a8a181f689ef7bee923efc99fac579/binance/full/test"

module.exports = {
  networks: {
    dev: {
      host: "127.0.0.1",
      port: 7545,
      network_id: 5777, // Match any network id
    },
    mainnet: {
      provider: new HDWalletProvider(mnemonicPhrase, INFURA_ADDRESS_MAINNET),
      network_id: "*",
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonicPhrase, INFURA_ADDRESS_TESTNET),
      network_id: "*",
      gas: 3000000,
      gasPrice: 10000000000,
    },
    bscMainNet: {
      provider: new HDWalletProvider(mnemonicPhrase, BSC_MAINNET),
      network_id: 97,
      gas: 3000000,
      gasPrice: 10000000000,
    },
    bscTestNet: {
      provider: new HDWalletProvider(mnemonicPhrase, BSC_TESTNET),
      network_id: '*',
      gas: 3000000,
      gasPrice: 10000000000,
      networkCheckTimeout: 10000,        

    }
  },
  contracts_directory: "./contractsEngine/contracts/",
  contracts_build_directory: "./contractsEngine/abis/",
  compilers: {
    solc: {
      version: "*",
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
    
  },
};
