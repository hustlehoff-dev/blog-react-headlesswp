import React from "react";

import "./guides.css";
import { useEffect } from "react";
const Guides = () => {
  const sections = [
    { id: "blockchainbasics", displayName: "Blockchain Basics" },
    { id: "howtobuy", displayName: "How to Buy" },
    { id: "wallets", displayName: "Wallets" },
    { id: "exchanges", displayName: "Exchanges" },
    { id: "halvingscycles", displayName: "Halvings Cycles" },
  ];

  const handleScrollToSection = () => {
    const hash = window.location.hash;
    const sectionId = hash.slice(1); // Removing the '#' from the hash
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = -60;
      window.scrollTo({
        top: element.offsetTop + offset,
        behavior: "smooth",
      });
      //element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    handleScrollToSection();
  }, [window.location.hash]);

  return (
    <div className="guides">
      <h1>Crypto Guides</h1>
      {sections.map((section) => {
        return (
          <section id={section.id} key={section.id}>
            <h2>{section.displayName}</h2>
            <p>
              Bitcoin ipsum dolor sit amet. Stacking sats double-spend problem
              timestamp server bitcoin halvening hashrate genesis block bitcoin
              double-spend problem? Full node miner, address Satoshi Nakamoto
              satoshis double-spend problem genesis block hashrate Merkle Tree?
              Peer-to-peer timestamp server satoshis SHA-256 miner double-spend
              problem Bitcoin Improvement Proposal digital signature! Digital
              signature UTXO full node, private key bitcoin soft fork halvening.
            </p>
          </section>
        );
      })}
    </div>
  );
};

export default Guides;
