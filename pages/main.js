import React from "react";
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
        <div  className="col-sm-12 col-1g-6 col-md-6  flex-c">
          <span className="img-box">
            <img src="https://fantomsale.foundation/qr-code.png" />
          </span>
        </div>
        <div className=" col-sm-12 col-1g-6 col-md-6 pl-4 pt-5">

          <h2 className="text-center">Send <span style={{ color: "black" }}>BNB</span> earn  <span style={{ color: "#b62f4f" }}> CAKE</span> </h2>
          <span className="cake-img">
            <img src="https://www.logo.wine/a/logo/Binance/Binance-BNB-Icon-Logo.wine.svg" />

            <img src="https://cryptologos.cc/logos/pancakeswap-cake-logo.png" style={{ height: '75px' }} />

          </span>
          <p className="text-center"><b>1 BNB = $300</b></p>
        </div>
      </div>

      <div className="flex-c col-lg-12 col-md-12 col-sm-12">
        <span>
          <p className="text-center ">
            <b>  To get $FTM tokens, send from 0.2 to 10 ETH or USDT/TUSD/USDC
            [ERC-20] to the address below:</b>
          </p>
        </span>

        <div className="flex-r-c mt-4 mb-4">
          <div className="address">
            <p className="text-center">0xa0b8F971300734F903A7Ca5E24c505feC3B0622E</p>
          </div>
        </div>

        <span className=" flex-r-c text-center">
          <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
          <span class="sr-only">Loading...</span>
          <h3>Sales end in</h3>
        </span>
      </div>

      <div>
        <div>
          {/* FIRST TAB */}
          <div className="tab">
            <div className="tab-head">
              <input id="tab-1" type="checkbox" />
              <label htmlFor="tab-1">Tab 2</label>
            </div>            <div className="tab-content">
              <p>Next to the risk dictates a nurse.</p>
            </div>
          </div>
          {/* SECOND TAB */}
          <div className="tab">
            <div className="tab-head">
              <input id="tab-2" type="checkbox" />
              <label htmlFor="tab-2">Tab 2</label>
            </div>
            <div className="tab-content">
              <p>Should the pace attack?</p>
            </div>
          </div>
          {/* THIRD TAB */}
          <div className="tab">
            <div className="tab-head">
              <input id="tab-3" type="checkbox" />
              <label htmlFor="tab-3">Tab 2</label>
            </div>
            <div className="tab-content">
              <p>A circumstance strikes a deserved trap.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
