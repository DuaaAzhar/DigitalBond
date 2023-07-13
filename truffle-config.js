// /**
//  * Use this file to configure your truffle project. It's seeded with some
//  * common settings for different networks and features like migrations,
//  * compilation and testing. Uncomment the ones you need or modify
//  * them to suit your project as necessary.
//  *
//  * More information about configuration can be found at:
//  *
//  * trufflesuite.com/docs/advanced/configuration
//  *
//  * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
//  * to sign your transactions before they're sent to a remote public node. Infura accounts
//  * are available for free at: infura.io/register.
//  *
//  * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
//  * public/private key pairs. If you're publishing your code to GitHub make sure you load this
//  * phrase from a file you've .gitignored so it doesn't accidentally become public.
//  *
//  */

//  const HDWalletProvider = require("@truffle/hdwallet-provider")

//  //
//  const { snowtraceApiKey, mnemonic } = require("./.env.json")
 
//  module.exports = {
//    /**
//     * Networks define how you connect to your ethereum client and let you set the
//     * defaults web3 uses to send transactions. If you don't specify one truffle
//     * will spin up a development blockchain for you on port 9545 when you
//     * run `develop` or `test`. You can ask a truffle command to use a specific
//     * network from the command line, e.g
//     *
//     * $ truffle test --network <network-name>
//     */
 
//    plugins: ["truffle-plugin-verify"],
//    api_keys: {
//      snowtrace: snowtraceApiKey,
//    },
//    networks: {
//      fuji: {
//        provider: () =>
//          new HDWalletProvider(
//            mnemonic,
//            `https://api.avax-test.network/ext/bc/C/rpc`
//          ),
//        network_id: 1,
//        timeoutBlocks: 200,
//        confirmations: 5,
//      },
//      development: {
//       host: "127.0.0.1",
//       port: 7545,
//       network_id: "*"
//     },
//     test: {
//       host: "127.0.0.1",
//       port: 7545,
//       network_id: "*"
//     }
//    },
   
//  }


const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = "west crane indoor pattern loan void reflect mom hospital leave correct increase";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",    
      port: 8545,          
      network_id: "*",     
    },
    bsctest: {
      provider: () => new HDWalletProvider(mnemonic, `https://data-seed-prebsc-1-s1.binance.org:8545`),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    bscmain: {
      provider: () => new HDWalletProvider(mnemonic, `https://bsc-dataseed1.binance.org`),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    kovan: {
      provider: () => new HDWalletProvider(mnemonic, `https://kovan.infura.io/v3/3dfb5f4a4b564ee893955cd379a3e449`),
      network_id: 42,
      gas: 4000000
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `wss://rinkeby.infura.io/v3/3dfb5f4a4b564ee893955cd379a3e449`),
      network_id: 4,
      gas: 4000000
    },
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/3dfb5f4a4b564ee893955cd379a3e449`),
      network_id: 3,
      gas: 4000000
    },
    ethereum: {
      provider: () => new HDWalletProvider(mnemonic, `https://mainnet.infura.io/v3/3dfb5f4a4b564ee893955cd379a3e449`),
      network_id: 1,
      gas: 4000000
    }
  },
  compilers: {
    solc: {
      version: "0.8.0",
      settings: {
        optimizer: {
          enabled: true
        }
      }
    }
  }
}