import { FaShoppingCart } from "react-icons/fa";

export const navbarMegeMenuDataLeft = [
  {
    id: 1,
    tab: "About",
    path: "/",
    submenu: false,
  },
  {
    id: 2,
    tab: "Courses",
    path: "/courses",
    submenu: false,
  },
  {
    id: 3,
    tab: "Trading Alerts",
    path: "/trading-alerts",
    submenu: false,
  },
  // {
  //   id: 4,
  //   tab: "Knowledge",
  //   path: "",
  //   submenu: true,
  //   submenuLinks: [
  //     {
  //       id: 4.1,
  //       submenuTab: "Strategies",
  //       submenuTabLinks: [
  //         {
  //           item: "Penny Stocks",
  //           link: "/strategies/penny-stocks",
  //         },
  //         {
  //           item: "Momentum",
  //           link: "/strategies/momentum",
  //         },
  //         {
  //           item: "Reversal",
  //           link: "/strategies/reversal",
  //         },
  //         {
  //           item: "Gap and Go",
  //           link: "/strategies/gap-and-go",
  //         },
  //         {
  //           item: "Bull Flag",
  //           link: "/strategies/bull-flag",
  //         },
  //         {
  //           item: "Swing Trading",
  //           link: "/strategies/swing-trading",
  //         },
  //       ],
  //     },
  //     {
  //       id: 4.2,
  //       submenuTab: "Guides",
  //       submenuTabLinks: [
  //         {
  //           item: "Day Trading Guide",
  //           link: "/guides/day-trading-guide",
  //         },
  //         {
  //           item: "Options Trading Guide",
  //           link: "/guides/options-trading-guide",
  //         },
  //         {
  //           item: "Small Account Guide",
  //           link: "/guides/small-account-guide",
  //         },
  //         {
  //           item: "Stock Broker Guide",
  //           link: "/guides/stock-broker-guide",
  //         },
  //         {
  //           item: "Stock Order Types Guide",
  //           link: "/guides/stock-order-types-guide",
  //         },
  //         {
  //           item: "Swing Trading Guide",
  //           link: "/guides/swing-trading-guide",
  //         },
  //         {
  //           item: "Technical Analysis Guide",
  //           link: "/guides/technical-analysis-guide",
  //         },
  //         {
  //           item: "Margin vs. Cash Account",
  //           link: "/guides/margin-vs-cash-account",
  //         },
  //         {
  //           item: "Large Cap vs Small Cap",
  //           link: "/guides/large-cap-vs-small-cap",
  //         },
  //       ],
  //     },
  //     {
  //       id: 4.3,
  //       submenuTab: "How To's",
  //       submenuTabLinks: [
  //         {
  //           item: "How to Day Trade Without $25k",
  //           link: "/how-to/how-to-day-trade-without-25k",
  //         },
  //         {
  //           item: "How to Make a Living",
  //           link: "/how-to/how-to-make-a-living",
  //         },
  //         {
  //           item: "How to Get Around PDT",
  //           link: "/how-to/how-to-get-around-pdt",
  //         },
  //         {
  //           item: "How to Use Multiple Time Frames",
  //           link: "/how-to/how-to-use-multiple-time-frames",
  //         },
  //         {
  //           item: "How to Use Hot Keys",
  //           link: "/how-to/how-to-use-hot-keys",
  //         },
  //         {
  //           item: "How to Use Scanners",
  //           link: "/how-to/how-to-use-scanners",
  //         },
  //         {
  //           item: "How to Short Stocks",
  //           link: "/how-to/how-to-short-stocks",
  //         },
  //       ],
  //     },
  //     {
  //       id: 4.4,
  //       submenuTab: "Stock Quotes",
  //       submenuTabLinks: [
  //         {
  //           item: "Apple (AAPL)",
  //           link: "/stock-quotes/aapl",
  //         },
  //         {
  //           item: "Meta (META)",
  //           link: "/stock-quotes/meta",
  //         },
  //         {
  //           item: "Tesla (TSLA)",
  //           link: "/stock-quotes/tsla",
  //         },
  //         {
  //           item: "Amazon (AMZN)",
  //           link: "/stock-quotes/amzn",
  //         },
  //         {
  //           item: "Netflix (NFLX)",
  //           link: "/stock-quotes/nflx",
  //         },
  //         {
  //           item: "Google (GOOGLE)",
  //           link: "/stock-quotes/google",
  //         },
  //       ],
  //       submenuTab2: "Crypto Quotes",
  //       submenuTabLinks2: [
  //         {
  //           item: "Bitcoin (BTC)",
  //           link: "/crypto-quotes/btc",
  //         },
  //         {
  //           item: "Ethereum (ETH)",
  //           link: "/crypto-quotes/eth",
  //         },
  //         {
  //           item: "Dodgecoin (DOGE)",
  //           link: "/crypto-quotes/doge",
  //         },
  //         {
  //           item: "Cardano (ADA)",
  //           link: "/crypto-quotes/ada",
  //         },
  //       ],
  //     },
  //   ],
  // },

  // {
  //   id: 5,
  //   tab: "Resources",
  //   path: "/resources",
  // },

  // {
  //   id: 6,
  //   tab: "Testimonials",
  //   path: "/sign-in",
  // },
];

export const navbarMegeMenuDataRight = [
  {
    id: 6,
    tab: "Sign in",
    path: "/sign-in",
  },
  {
    id: 7,
    tab: "Sign up",
    path: "/sign-up",
  },
  {
    id: 8,
    iconCart: <FaShoppingCart />,
  },
];
