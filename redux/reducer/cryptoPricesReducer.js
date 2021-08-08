import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  BitcoinPriceinNaira : null ,
  EthereumPriceinNaira : null ,
  LumenPriceinNaira : null ,
  RipplePriceinNaria: null ,
  BinanceCoinPriceinNaira : null ,

  BitcoinPriceinDollar : null ,
  EthereumPriceinDollar : null ,
  LumenPriceinDollar : null ,
  RipplePriceinDollar: null ,
  BinanceCoinPriceinDollar : null ,

};

const updatePairPricesInDollar = (state,action)=>{
  const priceData = action.data
  return updateObject(state, {
    BitcoinPriceinDollar : priceData['Bitcoin'] ,
    EthereumPriceinDollar : priceData['Ethereum'],
    LumenPriceinDollar : priceData['Lumen'],
    RipplePriceinDollar: priceData['Ripple'] ,
    BinanceCoinPriceinDollar : priceData['BinanceCoin']
  });
}

const CryptoLivePrices = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_LIVE_CRYPTO_PRICES_USD :
      return updatePairPricesInDollar(state , action)
    default:
      return state; 
  }
};
 
export default CryptoLivePrices;
 