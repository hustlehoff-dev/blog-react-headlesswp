import React from "react";
import "./homewidgets.css";
import { Link } from "react-router-dom";
const HomeWidgets = () => {
  return (
    <section id="widgets" className="widgets">
      <Link>
        <button className=" scroll-element">How to Buy Bitcoin</button>
      </Link>
      <Link to={"/guides"}>
        <button>Cold Wallets</button>
      </Link>
      <Link to={"/guides"}>
        <button>CryptoGuides</button>
      </Link>
      <Link to={"/guides"}>
        <button>Mock Button</button>
      </Link>
      <Link to={"/guides"}>
        <button>Mock Button</button>
      </Link>
    </section>
  );
};

export default HomeWidgets;
