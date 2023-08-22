const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MetaToken.sol");
require('dotenv').config()

const nftData = [
  {
   "name":"NFT 1",
      "description":"This is the first NFT",
      "image":"https://amethyst-brave-gorilla-959.mypinata.cloud/ipfs/QmT3MzQeDGKzKY7eRanb4Gmtzpvvbyjg6jVpGmjzQ4EUnG?_gl=1*1fo24jy*_ga*MzYxNDkzNDYxLjE2OTI2MDczMzY.*_ga_5RMPXG14TE*MTY5MjYzNDg1OS4yLjAuMTY5MjYzNDg1OS42MC4wLjA."
  },
  {
    "name":"NFT 2",
    "description":"This is the first NFT",
    "image":"https://amethyst-brave-gorilla-959.mypinata.cloud/ipfs/QmY2MpdEshwYygrW3UbjsdzijKKyvhoCrnz9YKJVGSCwC4?_gl=1*13oap1i*_ga*MzYxNDkzNDYxLjE2OTI2MDczMzY.*_ga_5RMPXG14TE*MTY5MjcyMzU1NC4zLjAuMTY5MjcyMzU1NC42MC4wLjA."
},
{
  "name":"NFT 3",
  "description":"This is the first NFT",
  "image":"https://amethyst-brave-gorilla-959.mypinata.cloud/ipfs/QmT63noFdcUrvi1o5Upuuq71Jg3LUunCybXNKyXdFF6Rw2?_gl=1*13oap1i*_ga*MzYxNDkzNDYxLjE2OTI2MDczMzY.*_ga_5RMPXG14TE*MTY5MjcyMzU1NC4zLjAuMTY5MjcyMzU1NC42MC4wLjA."
},
{
  "name":"NFT 4",
  "description":"This is the first NFT",
  "image":"https://amethyst-brave-gorilla-959.mypinata.cloud/ipfs/QmTnzta6S5eHCj7ehpgmbZbqBi1nZdHLxTScKrNXgCsynr?_gl=1*13oap1i*_ga*MzYxNDkzNDYxLjE2OTI2MDczMzY.*_ga_5RMPXG14TE*MTY5MjcyMzU1NC4zLjAuMTY5MjcyMzU1NC42MC4wLjA."
},
{
  "name":"NFT 5",
  "description":"This is the first NFT",
  "image":"https://amethyst-brave-gorilla-959.mypinata.cloud/ipfs/QmbLkenzLnYPFrn8hXLJn6dp6uQ281GYECcNqKF3oxnf1e?_gl=1*13oap1i*_ga*MzYxNDkzNDYxLjE2OTI2MDczMzY.*_ga_5RMPXG14TE*MTY5MjcyMzU1NC4zLjAuMTY5MjcyMzU1NC42MC4wLjA."
}

];

const contractAddress = "0x995251311625F7eb26b58360A946b0F6D758d864";
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x9BFaf3862a8f99a45B4fA2cfcaA1665a13eC4d60"; // place your public address for your wallet here

async function main() {
  const contract = await hre.ethers.getContractAt(tokenABI, contractAddress);
  let tokenID = 0;



    const setDescriptionTx = await contract.setTokenPrompt(tokenID, description);
    await setDescriptionTx.wait();
    tokenID++;
  }
console.log("5 NFT minted");


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
