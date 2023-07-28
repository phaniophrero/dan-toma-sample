import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaShoppingCart } from "react-icons/fa";
import {
  navbarMegeMenuDataLeft,
  navbarMegeMenuDataRight,
} from "../../data/navbarMegaMenuData";
import Link from "next/link";

const NavbarMegaMenu = () => {
  const [colorChangeBg, setColorChangeBg] = useState(false);
  const [activeStrategies, setActiveStrategies] = useState(false);
  const [activeResources, setActiveResources] = useState(false);

  const router = useRouter();
  // console.log(router.pathname);

  const changeNavbarBgColor = () => {
    if (window.scrollY >= 90) {
      setColorChangeBg(true);
    } else {
      setColorChangeBg(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeNavbarBgColor);
  }

  return (
    <header
      className={`mega-menu-container ${colorChangeBg ? "activeBg" : ""}`}
    >
      <nav className="mega-menu">
        <ul className="mega-menu-list mega-menu-list-left">
          {navbarMegeMenuDataLeft.map((navItemLeft) => (
            <li key={navItemLeft.id} className="mega-menu-item-tab">
              <Link
                href={navItemLeft.path}
                className={`mega-menu-item-link ${
                  navItemLeft.path === router.pathname ? "active" : ""
                }`}
              >
                {navItemLeft.tab}
              </Link>
              {/* {navItemLeft.submenu && (
                <div className="">
                  <div>
                    <div>
                      {navItemLeft.submenuLinks.map((sublinks) => (
                        <ul>
                          <h3>
                            {sublinks.submenuTab
                              ? sublinks.submenuTab
                              : sublinks.submenuTab2}
                          </h3>
                          {sublinks.submenuTabLinks.map((sublink) => (
                            <li>
                              <a href={sublink.link}>{sublink.item}</a>
                            </li>
                          ))}
                        </ul>
                      ))}
                    </div>
                  </div>
                </div>
              )} */}
            </li>
          ))}
          {/* {navbarMegeMenuDataRight.map((navItemRight) => (
            <li key={navItemRight.id} className="mega-menu-item-tab">
              <a href="#" className="mega-menu-item-link">
                {navItemRight.tab
                  ? navItemRight.tab
                  : navItemRight.iconCart
                  ? navItemRight.iconCart
                  : navItemRight.tab}
                {console.log(navItemRight.submenu)}
              </a>
            </li>
          ))} */}
          <li
            className="mega-menu-item-tab"
            onMouseEnter={() => setActiveStrategies(true)}
          >
            <Link href="#" className="mega-menu-item-link">
              Knowledge
            </Link>
          </li>
          <li
            className="mega-menu-item-tab"
            onMouseEnter={() => setActiveResources(true)}
          >
            <Link href="#" className="mega-menu-item-link">
              Resources
            </Link>
          </li>

          {activeStrategies && (
            <div
              onMouseLeave={() => setActiveStrategies(false)}
              className="mega-menu-submenu-dropdown"
            >
              <ul className="mega-menu-submenu-list">
                <li className="mega-menu-submenu-item">
                  <span className="mega-menu-submenu-item-title">
                    Strategies
                  </span>
                  <div className="mega-menu-submenu-item-column">
                    <ul className="mega-menu-submenu-item-column-list">
                      <li className="mega-menu-submenu-item-column-item">
                        Penny Stocks
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Momentum
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Reversal
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Gap and Go
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Bull Flag
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Swing Trading
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mega-menu-submenu-item">
                  <span className="mega-menu-submenu-item-title">Guides</span>
                  <div className="mega-menu-submenu-item-column">
                    <ul className="mega-menu-submenu-item-column-list">
                      <li className="mega-menu-submenu-item-column-item">
                        Day Trading Guide
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Options Trading Guide
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Small Account Guide
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Stock Broker Guide
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Stock Order Types Guide
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Swing Trading Guide
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Technical Analysis Guide
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Trading Terms Guide
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Margin vs. Cash Account
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Large Cap vs. Small Cap
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mega-menu-submenu-item">
                  <span className="mega-menu-submenu-item-title">
                    How To&apos;s
                  </span>
                  <div className="mega-menu-submenu-item-column">
                    <ul className="mega-menu-submenu-item-column-list">
                      <li className="mega-menu-submenu-item-column-item">
                        How to Day Trade Without $25k
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        How to Make a Living Day Trading
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        How to Get Around PDT
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        How to Use Multiple Time Frames
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        How to Use Hot Keys
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        How to Use Scanners
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        How to Short Stocks
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mega-menu-submenu-item">
                  <span className="mega-menu-submenu-item-title">
                    Stock Quotes
                  </span>
                  <div className="mega-menu-submenu-item-column">
                    <ul className="mega-menu-submenu-item-column-list">
                      <li className="mega-menu-submenu-item-column-item">
                        Apple (AAPL)
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Meta (META)
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Tesla (TSLA)
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Amazon (AMZN)
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Netflix (NFLX)
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Google (GOOGLE)
                      </li>
                    </ul>
                  </div>
                  <span className="mega-menu-submenu-item-title mega-menu-submenu-item-title-crypto">
                    Crypto Quotes
                  </span>
                  <div className="mega-menu-submenu-item-column">
                    <ul className="mega-menu-submenu-item-column-list">
                      <li className="mega-menu-submenu-item-column-item">
                        Bitcoin (BTC)
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Ethereum (ETH)
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Dogecoin (DOGE)
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Cardano (ADA)
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          )}

          {activeResources && (
            <div
              onMouseLeave={() => setActiveResources(false)}
              className="mega-menu-submenu-dropdown"
            >
              <ul className="mega-menu-submenu-list">
                <li className="mega-menu-submenu-item">
                  <span className="mega-menu-submenu-item-title">
                    Terminology
                  </span>
                  <div className="mega-menu-submenu-item-column">
                    <ul className="mega-menu-submenu-item-column-list">
                      <li className="mega-menu-submenu-item-column-item">
                        Trading Terms Guide
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Circuit Breaker Halts
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Day Trading
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Float
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Margin Account
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        MOMO
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Pattern Day Trader
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Pump and Dump
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Relative Volume
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Short Sale Restriction
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Short Squeeze
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Relative Volume
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        VWAP
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mega-menu-submenu-item">
                  <span className="mega-menu-submenu-item-title">Guides</span>
                  <div className="mega-menu-submenu-item-column">
                    <ul className="mega-menu-submenu-item-column-list">
                      <li className="mega-menu-submenu-item-column-item">
                        Best of
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Best Online Brokers
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Best Free Stock Charts
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Best Trading Tools
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Best Day Trading Platforms
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Best Apps for Day Trading
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Best Day Trading Books
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Best Technical Analysis Books
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Best Options Platforms
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Best Futures Platforms
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mega-menu-submenu-item">
                  <span className="mega-menu-submenu-item-title">
                    How To&apos;s
                  </span>
                  <div className="mega-menu-submenu-item-column">
                    <ul className="mega-menu-submenu-item-column-list">
                      <li className="mega-menu-submenu-item-column-item">
                        Reviews
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        TD Ameritrade
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        LightSpeed
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        CMEG
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        WeBull
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Robinhood
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Trade Ideas
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Benzinga
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Sterling
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        DAS Trader
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        eSignal
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mega-menu-submenu-item">
                  <span className="mega-menu-submenu-item-title">
                    Additional Resources
                  </span>
                  <div className="mega-menu-submenu-item-column">
                    <ul className="mega-menu-submenu-item-column-list">
                      <li className="mega-menu-submenu-item-column-item">
                        Penny Stocks Watch List
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Blog
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        News
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Stock Market Holidays
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Economic Calendar
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Earnings Calendar
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Day Trading Taxes
                      </li>
                      <li className="mega-menu-submenu-item-column-item">
                        Swing Trading
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </ul>

        {/* <div className="logo-wrapper">
          <Image
            className="logo"
            width={40}
            height={40}
            src="/images/logo-dan-toma.png"
            alt="logo"
          />
          <span className="logo-small-text">DAN TOMA</span>
        </div> */}

        <ul className="mega-menu-list mega-menu-list-right">
          {navbarMegeMenuDataRight.map((itemRight) => (
            <li className="mega-menu-item-tab" key={itemRight.id}>
              <Link href={itemRight.path} className="mega-menu-item-link">
                {itemRight.tab ? itemRight.tab : itemRight.iconCart}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavbarMegaMenu;
