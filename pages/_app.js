import "../styles/globals.css";
import "../styles/globals.css";
import "../styles/ReactToastify.css";
import { wrapper } from "../redux/store";
import { useDispatch } from "react-redux";
import { ToastProvider } from "react-toast-notifications";
import {
  GetCryptoPrices,
  GetCryptoPricesInDollar,
} from "../redux/actions/cryptoPrices";


function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();
  dispatch(GetCryptoPrices());
  dispatch(GetCryptoPricesInDollar());

  return (
    <>
      {" "}
      <ToastProvider autoDismiss={true} autoDismissTimeout="2000">
        <Component {...pageProps} />
      </ToastProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
