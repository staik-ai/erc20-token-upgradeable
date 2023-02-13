// scripts/deployv2.js
const { ethers, upgrades } = require("hardhat");

const PROXY = "DEPLOYED_PROXY_CONTRACT_GOES_HERE";

async function main() {
  const MyUpgradeableTokenV2 = await ethers.getContractFactory("MyUpgradeableTokenV2");
  console.log("Upgrading MyUpgradeableToken...");
  await upgrades.upgradeProxy(PROXY, MyUpgradeableTokenV2);
  console.log("MyUpgradeableToken upgraded");
}

main();
