import { useState } from "react";
import quotesData from "../../data/quotesData";

// const quotesTabs = [
//   {
//     id: 1,
//     name: "COMPARE MARKETS",
//   },
//   {
//     id: 2,
//     name: "United States",
//   },
//   {
//     id: 3,
//     name: "Europe",
//   },
//   {
//     id: 4,
//     name: "Asia",
//   },
//   {
//     id: 5,
//     name: "Currencies",
//   },
//   {
//     id: 6,
//     name: "Futures market",
//   },
// ];

const StockQuotes = () => {
  const [tabActive, setTabActive] = useState(1);

  const onClickHandler = (index) => {
    setTabActive(index);
  };

  return (
    <div className="stock-quotes-container">
      <div className="nav-quotes">
        <ul className="nav-quotes-list">
          {quotesData.map((tab, index) => (
            <div className="nav-quotes-wrapper" key={tab.id}>
              <li
                key={tab.id}
                onClick={() => onClickHandler(index)}
                className={`${
                  tabActive === index ? "active" : ""
                } nav-quotes-item`}
              >
                {tab.icon && (
                  <span className="nav-quotes-item-icon">{tab.icon}</span>
                )}
                {tab.quoteTab}
              </li>
              {/* {tabActive === index && (
                <div className="quotes">
                  {tab.quotes.map((quote) => (
                    <div
                      className="quote"
                      style={{
                        display: `${tabActive === index ? "flex" : " none"}`,
                      }}
                    >
                      <span className="arrow-icon">{quote.icon}</span>
                      <div className="quote-text">
                        <h3 className="quote-name">{quote.quoteName}</h3>
                        <p className="percent-text">{quote.percent}</p>
                      </div>
                      <div className="quote-text">
                        <h3 className="quote-name">{quote.price}</h3>
                        <p className="percent-text">{quote.percent2}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )} */}
            </div>
          ))}
        </ul>
        <div className="quotes-container">
          {tabActive && (
            <div className="quotes">
              {quotesData.map((quote, index) => (
                <div
                  className="quote"
                  key={index}
                  style={{
                    display: `${tabActive === index ? "flex" : " none"}`,
                  }}
                >
                  {quote.quotes.map((tabData, index) => (
                    <div className="quote-card" key={tabData.id}>
                      <span
                        className={`${
                          tabData.icon.type.name === "FaArrowDown"
                            ? "arrow-icon-red"
                            : "arrow-icon-green"
                        } arrow-icon`}
                      >
                        {tabData.icon}
                      </span>
                      <div className="quote-text-wrapper">
                        <div className="quote-text">
                          <h3 className="quote-name">{tabData.quoteName}</h3>
                          <p
                            className={`${
                              tabData.icon.type.name === "FaArrowDown"
                                ? "quote-percent-red"
                                : "quote-percent-green"
                            } quote-percent`}
                          >
                            {tabData.percent}
                          </p>
                        </div>
                        <div className="quote-text">
                          <h3 className="quote-name">{tabData.price}</h3>
                          <p
                            className={`${
                              tabData.icon.type.name === "FaArrowDown"
                                ? "quote-percent-red"
                                : "quote-percent-green"
                            } quote-percent`}
                          >
                            {tabData.percent2}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>

        {tabActive === 0 && (
          <div className="quotes-compare">
            <span className="quotes-compare-chart">Chart</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default StockQuotes;
