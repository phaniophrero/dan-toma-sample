import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const ProductCard = ({ item }) => {
  return (
    <div href="#" className="product-card-container">
      {item.new ? <span className="product-card-tag-new">NEW</span> : ""}
      <div className="product-card-image-wrapper">
        <img className="product-card-image" src={item.image} alt={item.title} />
        {/* <span
          className="product-card-img"
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundRepeat: "no-repeat",
            width: "250px",
          }}
        ></span> */}
      </div>
      <div className="product-card-text">
        <h1 className="product-card-title">{item.title}</h1>
        <article className="product-card-text-bottom">
          <Link href="#" className="product-card-button">
            {item.button}
            <span className="product-button-icon">
              <BsArrowRight />
            </span>
          </Link>
          <div className="product-card-prices">
            <h2 className="product-card-price-old">{item.oldPrice}</h2>
            <h2 className="product-card-price">{item.price}</h2>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ProductCard;
