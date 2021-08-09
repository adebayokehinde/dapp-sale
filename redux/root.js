import { combineReducers } from "redux"
import CryptoLivePrices from './reducers/cryptoPricesReducer'

const rootReducer = combineReducers({
prices : CryptoLivePrices ,
})

export default rootReducer;