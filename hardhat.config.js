require("@nomicfoundation/hardhat-toolbox");

// const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "https://polygon-mumbai.g.alchemy.com/v2/0lErRnMkMzIsd-stkT5oiMaOkRAKaejK";
// const NEXT_PUBLIC_PRIVATE_KEY = "0x962B7042f5933B22e71fB53E49F5FB1689c850eb";
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "matic",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/0lErRnMkMzIsd-stkT5oiMaOkRAKaejK",
      accounts: [`4ceb13b28203c0b6947c10e92f77c772be07479b57c7b9f5d90f1510b851bf5b`],
    },
  },

  //   // fuji: {
  //   //   url: `Your URL`,
  //   //   accounts: [
  //   //     `0x${"Your Account"}`,
  //   //   ],
  //   // },
  // },
};
