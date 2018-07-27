const ethers = require('ethers');
const providers = ethers.providers;

const wallet = ethers.Wallet.createRandom();
console.log(wallet.address);

const network = providers.networks.ropsten;

const infuraProvider = new providers.InfuraProvider(network);
const etherscanProvider = new providers.EtherscanProvider(network);


const fallbackProvider = new providers.FallbackProvider([
	infuraProvider,
	etherscanProvider
]);

console.log(fallbackProvider);
