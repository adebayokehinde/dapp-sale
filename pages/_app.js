import '../styles/globals.css'
import '../styles/globals.css'
import { wrapper } from "../redux/store";
import { useDispatch } from "react-redux";
import {GetCryptoPrices ,GetCryptoPricesInDollar} from '../redux/actions/cryptoPrices'

function MyApp({ Component, pageProps }) {

  const dispatch = useDispatch();
  dispatch(GetCryptoPrices())
  dispatch(GetCryptoPricesInDollar())

  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp);
