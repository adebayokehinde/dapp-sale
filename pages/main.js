import React from "react";

export default function Main() {
  return (
    <>
      <div className="flex-r">
        <div>
          <span className="img-box">
            <img src="https://fantomsale.foundation/qr-code.png" />
          </span>
        </div>
        <div className="pl-4">
          <h1>Buy BNB </h1>
          <p>1 BNB = $300</p>
        </div>
      </div>

      <div className="flex-c">
        <span>
          <p>
            To get $FTM tokens, send from 0.2 to 10 ETH or USDT/TUSD/USDC
            [ERC-20] to the address below:
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
            <input id="tab-1" type="checkbox" />
            <label htmlFor="tab-1">Tab 1</label>
            <div className="tab-content">
              <p>Next to the risk dictates a nurse.</p>
            </div>
          </div>
          {/* SECOND TAB */}
          <div className="tab">
            <input id="tab-2" type="checkbox" />
            <label htmlFor="tab-2">Tab 2</label>
            <div className="tab-content">
              <p>Should the pace attack?</p>
            </div>
          </div>
          {/* THIRD TAB */}
          <div className="tab">
            <input id="tab-3" type="checkbox" />
            <label htmlFor="tab-3">Tab 3</label>
            <div className="tab-content">
              <p>A circumstance strikes a deserved trap.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
