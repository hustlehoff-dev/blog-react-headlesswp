import React from "react";
import HomeWidgets from "../homewidgets/HomeWidgets";

const Guides = () => {
  return (
    <>
      <div>
        <span>CryptoCurrencies</span>
        <HomeWidgets />
      </div>

      <div>
        <span>Wallets</span>
        <HomeWidgets />
      </div>

      <div>
        <span>Exchanges</span>
        <HomeWidgets />
      </div>

      <div>
        <span>Cycles</span>
        <HomeWidgets />
      </div>
    </>
  );
};

export default Guides;
