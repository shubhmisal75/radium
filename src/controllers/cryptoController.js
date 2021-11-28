const axios = require("axios");
const cryptoModel = require("../models/cryptoModel");

const getcryptoCoins = async function (req, res) {
  try {
    //better to use for..of here
    var options = {
      method: "get",
      url: "https://api.coincap.io/v2/assets",
      headers: {
        Authorization: "Bearer a3ee4a5a-eb65-4aa9-90f0-612dfc24a8e3",
      },
    };

    let response = await axios(options);

    let coins = response.data.data;
    res.status(200).send(coins)
  }
  catch(error){
    res.status(500).send("invalid")
  }
  }







const CryptoCoins = async function (req, res) {
  try {
    //better to use for..of here
    var options = {
      method: "get",
      url: "https://api.coincap.io/v2/assets",
      headers: {
        Authorization: "Bearer a3ee4a5a-eb65-4aa9-90f0-612dfc24a8e3",
      },
    };

    let response = await axios(options);

    let coins = response.data.data;

    //   the above API gives back data for exactly 100 coins
    for (i = 0; i < coins.length; i++) {
      let coin = {
        symbol: coins[i].symbol,
        name: coins[i].name,
        marketCapUsd: coins[i].marketCapUsd,
        priceUsd: coins[i].priceUsd
      };

      await cryptoModel.findOneAndUpdate({ symbol: coins[i].symbol }, coin, { upsert: true, new: true } );
    }

   
    coins.sort( function (a, b) { return b.changePercent24Hr - a.changePercent24Hr; });

    res.status(200).send({ status: true, data: coins });

  } catch (error) {
    console.log(error);
    res.status(500).send({ status: false, msg: "server error" });
  }
};

module.exports.CryptoCoins = CryptoCoins;
module.exports.getcryptoCoins=getcryptoCoins