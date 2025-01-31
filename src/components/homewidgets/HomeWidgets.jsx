import React from "react";
import "./homewidgets.css";
import { Link } from "react-router-dom";

const HomeWidgets = () => {
  return (
    <section id="widgets" className="widgets">
      <Link to={"/guides/#blockchainbasics"}>
        <button>Blockchain Basics</button>
      </Link>
      <Link to={"/guides/#howtobuy"}>
        <button>How to Buy Crypto</button>
      </Link>
      <Link to={"/guides/#wallets"}>
        <button>Crypto Wallets</button>
      </Link>
      <Link to={"/guides/#exchanges"}>
        <button>Exchanges</button>
      </Link>
      <Link to={"/guides/#halvingscycles"}>
        <button>Halvings & Cycles</button>
      </Link>
      <Link to={"/guides/"}>
        <button></button>
      </Link>
    </section>
  );
};

export default HomeWidgets;
