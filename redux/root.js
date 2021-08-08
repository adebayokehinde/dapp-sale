import { combineReducers } from "redux"
import CryptoLivePrices from './reducers/cryptoPricesReducer'

const rootReducer = combineReducers({
  PayticaCryptoPrices : CryptoLivePrices ,
})

export default rootReducer;