require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom slab green rare remind arrow idea glimpse fresh true'; 
let testAccounts = [
"0xa758180a91a8256a93ad17b7b87621f44a512cc44860078410236dc02ca75ec7",
"0x057856cdd585aaad136b40c5afc79b656e09db8e86ce270865d5f4e23794f5dd",
"0xe5b09b4e435f4d864eb2d3219370669d52770a20cd4d878ab35b405d01d4ade3",
"0x63e3b055b2ece81746d630f5523752779d6ad3e9b5d84d38c8ee3b6eb6de7bc0",
"0x61683ad17c3a531f43ddd8dc933762bdd65574ebe6f03c7ab8eb06a03c91a190",
"0x41099e030c392b25314347b35e501e3abc59198baee262152a14635a2638a0ae",
"0xf8bfc319620defea97929095e5938a1490192b2b52f917a5e9461db17594baf7",
"0xbd0d63a88c7e22d78d53fd97be8bb6f046ebc161d59e8083e997706e30e90cb5",
"0xd068c2dd413da333c09578bf8fa3ead7dabc16272e008aef6c5ecd322a366e86",
"0xdd8f6d9a0787242ad13a9f7c7f75c161918e1ad1efadd8084cbcc8f66e92d71e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


