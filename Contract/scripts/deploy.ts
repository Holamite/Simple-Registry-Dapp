import { ethers } from "hardhat";

async function main() {
  const SimpleRegistry = await ethers.deployContract("SimpleRegistry", [
    "name",
    98,
  ]);

  await SimpleRegistry.waitForDeployment();

  console.log(`This is successfully deployed to ${SimpleRegistry.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
