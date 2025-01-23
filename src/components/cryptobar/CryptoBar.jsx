import React, { useEffect, useState } from "react";
import "./cryptobar.css";
const CryptoBar = () => {
  const [cryptos, setCryptos] = useState([]);
  const FETCH_INTERVAL = 60000;
  const STALE_THRESHOLD = 600;

  const fetchCrypto = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
      );
      const data = await response.json();

      // Filter out stables
      const filteredData = data.filter((crypto) => {
        return ![
          "usd-coin",
          "tether",
          "usds",
          "true-usd",
          "paxos-standard",
          "gemini-dollar",
          "staked-ether",
          "wrapped-bitcoin",
          "wrapped-steth",
          "weth",
          "wrapped-eeth",
          "ethena-usde",
        ].includes(crypto.id);
      });

      // Price change ticker
      const timestamp = Date.now();
      localStorage.setItem(
        "cryptodata",
        JSON.stringify({ data: filteredData, timestamp })
      );
      setCryptos(filteredData);
    } catch (err) {
      console.log("Error fetching crypto data: ", err.message);
    }
  };

  useEffect(() => {
    const storedData = localStorage.getItem("cryptodata");
    if (storedData) {
      const { data, timestamp } = JSON.parse(storedData);

      // If data fresh
      if (Date.now() - timestamp < STALE_THRESHOLD) {
        setCryptos(data);
      } else {
        fetchCrypto();
      }
    } else {
      fetchCrypto();
    }

    const interval = setInterval(fetchCrypto, FETCH_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="crypto-slider">
      <div className="crypto-slider-track">
        {cryptos.map((crypto) => (
          <div className="crypto-coin" key={crypto.id}>
            <span>{crypto.symbol.toUpperCase()} </span>
            <p>${crypto.current_price.toFixed(2)}</p>
            <span
              className={`price-change ${
                crypto.price_change_percentage_24h > 0 ? "positive" : "negative"
              }`}>
              {crypto.price_change_percentage_24h > 0 ? "▲" : "▼"}{" "}
              {crypto.price_change_percentage_24h.toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoBar;
