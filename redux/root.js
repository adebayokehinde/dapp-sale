import { combineReducers } from "redux"
import CryptoLivePrices from './reducers/cryptoPricesReducer'
import walletConnectReducer from './reducers/connectWeb3'

const rootReducer = combineReducers({
    prices: CryptoLivePrices,
    walletConnect: walletConnectReducer

})

export default rootReducer;