# erc20-token-upgradeable

initialize hardhat
#npx hardhat

copy files into relevant folders and replace/update .env.example with .env

deploy the first script, which will deploy the first version of the smart contract, as well two other contracts
# npx hardhat run scripts/deploy.js --network goerli

Verify and publish token smart contract on Etherscan

Go to TransparentUpgradeableProxy contract and click "Is this a proxy?"

You will now have "read as Proxy" and "write as proxy" tabs, with access to the increment() function from MyUpgradeableToken.sol

You can now deploy the second (v2) version with second deploy script:
# npx hardhat run scripts/deployv2.js --network goerli

Once again, 

Verify and publish token smart contract on Etherscan

Go to TransparentUpgradeableProxy contract and click "Is this a proxy?"

You will now have access to the decrement() function from MyUpgradeableTokenV2.sol

For more details visit: https://staik.medium.com/planning-for-the-future-upgradeable-erc20-smart-contracts-36593e6ca130
