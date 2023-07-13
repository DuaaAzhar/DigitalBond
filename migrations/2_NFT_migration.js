const smartBondNFT = artifacts.require("smartBondNFT.sol");

module.exports = function (deployer) {
  deployer.deploy(smartBondNFT);
};

