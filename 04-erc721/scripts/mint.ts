import hre from "hardhat"

async function main() {
const contract = await hre.ethers.getContractAt("NonFungibleSceiiya", "0x7ec92b42246ff595504813fbc91f9a3923c4e8ec")
contract.mint()
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});