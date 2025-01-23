import { Link } from "react-router-dom";
import "./nav.css";
import { useState, useEffect } from "react";
import XIcon from "@mui/icons-material/X";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CryptoBar from "../cryptobar/CryptoBar";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="nav-wrapper">
        <nav className="navbar">
          <div className="logo">
            <Link to="/">
              <img
                src="https://comeincrypto.com/cms/wp-content/uploads/2025/01/comeincrypto-logo-100x100-1.png"
                alt="ComeInCrypto"
                className="logo-img"
              />
            </Link>
          </div>
          <h2 className="website-name">
            ComeIn<span>Crypto</span>
            <p>
              <sub>Follow Wise Money</sub>
            </p>
          </h2>
          <div
            className={
              isActive ? "active mobile-menu-burger" : "mobile-menu-burger"
            }
            onClick={toggleMenu}>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
          </div>
          <nav className={isActive ? "active mobile-menu" : "mobile-menu"}>
            <div className="mobile-menu-container">
              <div className="mobile-search">
                <form autoComplete="off" role="search">
                  <input
                    type="text"
                    placeholder=""
                    autoComplete="off"
                    id="search"
                  />
                  <label htmlFor="search">Search ComeInCrypto</label>
                </form>
              </div>
              <div className="mobile-socials">
                <ul>
                  <li>
                    <XIcon />
                  </li>
                  <li>
                    <TelegramIcon />
                  </li>
                  <li>
                    <FacebookIcon />
                  </li>
                  <li>
                    <InstagramIcon />
                  </li>
                  <li>
                    <YouTubeIcon />
                  </li>
                </ul>
              </div>
              <div className="mobile-links">
                <ul>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                </ul>
              </div>
            </div>
          </nav>
        </nav>
      </div>
      <CryptoBar />
    </>
  );
};

export default Navbar;
