import { useState, useRef } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import { Loading } from "../components/Loading/Loading";
const alerts = [
  {
    id: 1,
    title: "Discord Stocks",
    oldPrice: "349€",
    price: "149€ / luna",
    button: "Buy now",
    image: "/images/2.jpeg",
    new: true,
  },
  {
    id: 2,
    title: "Discord Crypto",
    oldPrice: "349€",
    price: "99€ / luna",
    button: "Buy now",
    image: "/images/2.jpeg",
    new: true,
  },
  {
    id: 3,
    title: "Discord US 30 Index",
    oldPrice: "349€",
    price: "159€ / luna",
    button: "Buy now",
    image: "/images/2.jpeg",
    new: true,
  },
];

const TradingAlertsPage = () => {
  const [loading, setLoading] = useState(true);
  const loadingRef = useRef();

  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  return loading ? (
    <Loading />
  ) : (
    //   return (
    <>
      <div class="overlay"></div>

      <div className="courses-page-container">
        <div className="courses-page-wrapper">
          {alerts.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TradingAlertsPage;
