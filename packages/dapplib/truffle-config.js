require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside skull drift rescue sad method grid civil army gaze'; 
let testAccounts = [
"0xc483078ad2ff6bd84892db7d1e6926c272ba8467212fb68c2ef161fd00dbf197",
"0x502bec677e96d037920cbfce069c7fa24a2d192ad9269a1c108be9ad5fc37d66",
"0x6d3be91ab85924957220cbe90033320370df794551529f9fa5f345d9703a3f7b",
"0xa5e50bd095cf93e2fd93d78ae375183845477185363c9abc022bdbb9afe08644",
"0xf48f002800eaecdbdca9da05bdfb8f76fb79f4eee8cb937c60e3ce348c4c2b38",
"0xdab69768b30d1fc6d248bfc8b538289370e5178a85491866dad9574fd10bd293",
"0xa3f9827dddc73d6276ee36cf3eaee8c47b77eaa06b494025d922f3b9e65afcb9",
"0xd0b0f622397d60d8a880601baf2f588c02099ef1e5c36f3ee63b3aad47ecf85e",
"0x31a3ca7124acc020a5a927b6e31040fa4870f651362904dc9e6adf03b73726ca",
"0xc61b23b09e853a8fa0d75fab86a9c0c666892561a34af3a9a836a65c0715d174"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

