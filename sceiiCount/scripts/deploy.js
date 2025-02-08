const {ethers} = require("hardhat");

async function main () {
  const [deployer] = await ethers.getSigners();

  const ContractFactory = await ethers.getContractFactory("Counter");
  
  const contract = await ContractFactory.deploy()
;

console.log(` contract deployment hash ${contract.target}`);
console.log(` deployer address ${deployer.address}`)


}

main().catch((err) => {
  console.error(err);
  ProcessingInstruction.exit(1);
})