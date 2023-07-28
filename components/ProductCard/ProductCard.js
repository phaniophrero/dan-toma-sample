import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ item }) => {
  return (
    <Link href={`/course/${item.id}`}>
      <div className="product-card-container">
        {item.new ? <span className="product-card-tag-new">NEW</span> : ""}
        <div className="product-card-image-wrapper">
          <Image
            width={450}
            height={250}
            className="product-card-image"
            src={item.image}
            alt={item.title}
          />
        </div>
        <div className="product-card-text">
          <h1 className="product-card-title">{item.title}</h1>
          <article className="product-card-text-bottom">
            <object className="product-card-button-wrapper" data="" type="">
              <Link
                href={`/courses/checkout/${item.id}`}
                className="product-card-button"
              >
                {item.button}
                <span className="product-button-icon">
                  <BsArrowRight />
                </span>
              </Link>
            </object>
            <div className="product-card-prices">
              <h2 className="product-card-price-old">{item.oldPrice}</h2>
              <h2 className="product-card-price">{item.price}</h2>
            </div>
          </article>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
