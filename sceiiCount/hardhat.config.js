// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.28",

// };



/**
 * @type import('hardhat/config').HardhatUserConfig
 */

// require('@nomiclabs/hardhat-ethers');
// require("@nomiclabs/hardhat-waffle");

require('@nomicfoundation/hardhat-toolbox');

require("dotenv").config({path: ".env"})
// const { PrivateKey } = require('./secret.json');

const PRIVATE_KEY = process.env.PRIVATE_KEY

module.exports = {
   defaultNetwork: 'testnet',

   networks: {
      hardhat: {
      },
      testnet: {
         url: 'https://rpc.test2.btcs.network',
         accounts: [PRIVATE_KEY],
         chainId: 1114,
      }
   },
   solidity: {
      compilers: [
        {
           version: '0.8.28',
           settings: {
              evmVersion: 'paris',
              optimizer: {
                 enabled: true,
                 runs: 200,
              },
           },
        },
      ],
   },
   paths: {
      sources: './contracts',
      cache: './cache',
      artifacts: './artifacts',
   },
   mocha: {
      timeout: 20000,
   },
};
