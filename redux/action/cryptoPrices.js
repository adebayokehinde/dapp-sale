import axios from "axios";
import * as actionTypes from "./actionTypes";

import { host } from "../constants";

// init the Reducers
export const getLivePrices = (data) => {
  return {
    type: actionTypes.GET_LIVE_PRICES,
    data,
  };
};

export const getPayticaUSDtoNairaRates = ()=>{
  return {
    type: actionTypes.GET_PAYTICA_USD_RATES,
    data,
  };
}

export const getLivePricesinDollarReduxInit = (data) => {
  return {
    type: actionTypes.GET_LIVE_CRYPTO_PRICES_USD,
    data,
  };
};

const CoinsPairContext = {
  Ethereum: "ETHUSDT",
  Bitcoin: "BTCUSDT",
  Lumen: "XLMUSDT",
  Ripple: "XRPUSDT",
  BinanceCoin: "BNBUSDT",
};

const convertCryptoPairToDollar = async (Pair) => {
  const endpoint = host + "/AnonymousPayRoute/get-tradingpair";
  const PairClosingPrice = await axios
    .get(endpoint, {
      params: {
        tradingPair: Pair,
      },
    })
    .then((res) => {
      if (res.status == 200) {
        return res.data["ClosingPrice"];
      } else {
        return 0;
      }
    });

  return parseFloat(PairClosingPrice);
};


export const GetCryptoPricesInDollar = () => {
  let tradingPairsObject = {
    Ethereum: 0,
    Bitcoin: 0,
    Lumen: 0,
    Ripple: 0,
    BinanceCoin: 0,
  };
  return async (dispatch) => {
    for (const [key, value] of Object.entries(CoinsPairContext)) {
      if (key === "Ethereum") {
        tradingPairsObject["Ethereum"] = await convertCryptoPairToDollar(value);
      }

      if (key === "Bitcoin") {
        tradingPairsObject["Bitcoin"] = await convertCryptoPairToDollar(value);
      }

      if (key === "Lumen") {
        tradingPairsObject["Lumen"] = await convertCryptoPairToDollar(value);
      }

      if (key === "Ripple") {
        tradingPairsObject["Ripple"] = await convertCryptoPairToDollar(value);
      }

      if (key == "BinanceCoin") {
        tradingPairsObject["BinanceCoin"] = await convertCryptoPairToDollar(
          value
        );
      }
    }
    dispatch(getLivePricesinDollarReduxInit(tradingPairsObject));
  };
};
