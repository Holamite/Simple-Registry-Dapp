# Solidity Contracts

This repository contains Solidity smart contracts developed as part of a learning journey to interact with decentralized applications (DApps). The primary focus is on implementing functionality to set and update the name and age of an entity.

## Contracts

### SimpleRegistry.sol

This contract defines a simple registry system with the following key functions:

- `constructor(string memory name, uint age)`: Initializes the contract with the initial name and age.
- `updateName(string memory newName)`: Updates the name of the entity.
- `updateAge(uint newAge)`: Updates the age of the entity.
- `getEntityDetails() view returns (string memory name, uint age)`: Retrieves the current name and age of the entity.

## Deployment to Sepolia Testnet

The contract is deployed to the Sepolia testnet with the following contract address:

**Contract Address:** `0xFeCe593B6eB317f4fD94804264742b092B4566c6`

## Learning Objectives

The development of these contracts serves as a hands-on learning experience to understand:

- Solidity smart contract development.
- Interaction between smart contracts and decentralized applications (DApps).
- Deploying contracts to testnets, specifically the Sepolia testnet.

## Usage

Feel free to explore and modify the contracts for your own learning purposes. Contributions, suggestions, and improvements are welcome.

## Disclaimer

These contracts are created for educational purposes, and caution is advised when deploying contracts on live networks. Be aware of the potential risks and thoroughly test contracts before deploying them to a mainnet.
