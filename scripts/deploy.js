// scripts/deploy.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const MyUpgradeableToken = await ethers.getContractFactory("MyUpgradeableToken");
  console.log("Deploying MyUpgradeableToken...");
  const myupgradeabletoken = await upgrades.deployProxy(MyUpgradeableToken, {
    initializer: "initialize",
  });
  await myupgradeabletoken.deployed();
  console.log("MyUpgradeableToken deployed to:", myupgradeabletoken.address);
}

main();
