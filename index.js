const ethers = require('ethers');
const providers = ethers.providers;

const wallet = ethers.Wallet.createRandom();
console.log('wallet address', wallet.address);

const network = providers.networks.ropsten;

const infuraProvider = new providers.InfuraProvider(network);
const etherscanProvider = new providers.EtherscanProvider(network);

const etherscanProviderMain = new providers.EtherscanProvider();

const fallbackProvider = new providers.FallbackProvider([
	infuraProvider,
	etherscanProvider
]);

//const provider = providers.getDefaultProvider('ropsten');

fallbackProvider.getBalance(wallet.address).then(function(balance) {
	const etherString = ethers.utils.formatEther(balance);
	console.log('balance ', etherString);
});


fallbackProvider.getTransactionCount(wallet.address).then(function(count) {
	console.log('transaction count ', count);
});

fallbackProvider.getBlockNumber().then(function(num) {
	console.log('block number ', num);
});

fallbackProvider.getGasPrice().then(function(p) {
	console.log('gas price ', p.toString());
});

etherscanProviderMain.getEtherPrice().then(function(p) {
	console.log('ether price ', p);
});

// Get notified on every new block
fallbackProvider.on('block', function(blockNumber) {
    console.log('New Block: ' + blockNumber);
});
