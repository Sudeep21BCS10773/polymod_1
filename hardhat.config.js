require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: [process.env.PRIVATE_KEY],
    },
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/3qPY03rykvlMkuGwhfDybXpcMPQe81D_',
      accounts: [process.env.PRIVATE_KEY],
    },
  }
};
