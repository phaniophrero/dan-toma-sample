import { useState } from "react";
import { useRouter } from "next/router";
import { IoIosArrowDropleft } from "react-icons/io";
import { FaGreaterThan } from "react-icons/fa6";
import { Loading } from "../../../components/Loading/Loading";
import ProductCard from "../../../components/ProductCard/ProductCard";
import courses from "../../../data/coursesData";

const coursesData = [
  {
    id: 1,
    title: "Course Stocks",
    description:
      "Re réaliser un livre spécimen de polices de texte. Il na pas fait que survivre cinq siècles, mais sest aussi adapté à la bureautique informatique, sans que son contenu nen soit modifié.",
    oldPrice: "549€",
    price: "549€",
    button: "Buy now",
    image: "/images/2.jpeg",
    new: true,
  },
  {
    id: 2,
    title: "Course Crypto",
    description:
      "Re réaliser un livre spécimen de polices de texte. Il na pas fait que survivre cinq siècles, mais sest aussi adapté à la bureautique informatique, sans que son contenu nen soit modifié.",
    oldPrice: "749€",
    price: "595€",
    button: "Buy now",
    image: "/images/2.jpeg",
    new: true,
  },
  {
    id: 3,
    title: "Course US 30 Index",
    description:
      "Re réaliser un livre spécimen de polices de texte. Il na pas fait que survivre cinq siècles, mais sest aussi adapté à la bureautique informatique, sans que son contenu nen soit modifié.",
    oldPrice: "549€",
    price: "499€",
    button: "Buy now",
    image: "/images/2.jpeg",
    new: true,
  },
];

const CheckoutPage = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  //   console.log("route:", router);

  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  return loading ? (
    <Loading />
  ) : (
    <>
      <div className="overlay"></div>
      // return (
      <section className="section-checkout-container">
        <div className="section-checkout-nav">
          <a className="section-checkout-nav-link" href="/courses">
            <span className="section-checkout-nav-back-icon">
              <IoIosArrowDropleft />
            </span>
            Back
          </a>
          <div className="section-checkout-nav-2">
            <a className="section-checkout-nav-2-link" href="/courses">
              Courses
            </a>{" "}
            <span className="section-checkout-nav-2-icon">
              <FaGreaterThan />
            </span>
            {"  "}
            <span className="section-checkout-nav-2-link-active">Checkout</span>
          </div>
        </div>
        {coursesData
          .filter((item) => item.id == router.query.id)
          .map((item) => (
            <div className="section-checkout-product" key={item.id}>
              <div className="section-checkout-product-image-wrapper">
                <span className="section-checkout-product-image-tag">NEW</span>
                <img
                  className="section-checkout-product-image"
                  src={item.image}
                  alt="course product image"
                />
              </div>
              <div className="section-checkout-product-text">
                <h1 className="section-checkout-product-title">{item.title}</h1>
                <span className="section-checkout-product-title-line"></span>
                <p className="section-checkout-product-description">
                  {item.description}
                </p>
                <h3 className="section-checkout-product-discount">
                  Discount{" "}
                  <span className="section-checkout-product-discount-value">
                    10
                  </span>
                  %
                </h3>
                <h3 className="section-checkout-product-old-price">
                  {item.oldPrice}
                </h3>
                <h2 className="section-checkout-product-price">{item.price}</h2>
              </div>
            </div>
          ))}

        <form className="checkout-payment-form">
          <div className="checkout-payment-form-title-wrapper">
            <h2 className="checkout-payment-form-title">ACCOUNT DETAILS</h2>
          </div>
          <div className="form-group-row">
            <label className="form-group-label" htmlFor="first-name">
              First Name *
            </label>
            <input
              className="form-group-input"
              placeholder="First Name"
              id="first-name"
              type="text"
            />
          </div>
          <div className="form-group-row">
            <label className="form-group-label" htmlFor="last-name">
              Last Name *
            </label>
            <input
              className="form-group-input"
              placeholder="Last Name"
              id="last-name"
              type="text"
            />
          </div>
          <div className="form-group-row">
            <label className="form-group-label" htmlFor="address-1">
              Address 1 *
            </label>
            <input className="form-group-input" id="address-1" type="text" />
          </div>
          <div className="form-group-row">
            <label className="form-group-label" htmlFor="address-2">
              Address 2 *
            </label>
            <input className="form-group-input" id="address-2" type="text" />
          </div>
          <div className="form-group-row">
            <label className="form-group-label" htmlFor="country">
              Country *
            </label>
            <input className="form-group-input" id="country" type="text" />
          </div>
          <div className="form-group-row">
            <label className="form-group-label" htmlFor="city">
              City *
            </label>
            <input className="form-group-input" id="city" type="text" />
          </div>
          <div className="form-group-row">
            <label className="form-group-label" htmlFor="zip-code">
              Zip Code *
            </label>
            <input className="form-group-input" id="zip-code" type="text" />
          </div>
          <div className="form-group-row">
            <label className="form-group-label" htmlFor="phone">
              Phone *
            </label>
            <input className="form-group-input" id="phone" type="text" />
          </div>
          <div className="form-group-row">
            <label className="form-group-label" htmlFor="email">
              Email *
            </label>
            <input className="form-group-input" id="email" type="email" />
          </div>
          <div className="form-group-row">
            <label className="form-group-label" htmlFor="password">
              Password *
            </label>
            <input className="form-group-input" id="password" type="password" />
          </div>
          <div className="form-group-row">
            <label className="form-group-label" htmlFor="confirm-password">
              Confirm Password *
            </label>
            <input
              className="form-group-input"
              id="confirm-password"
              type="password"
            />
          </div>

          <div className="form-group-card-wrapper">
            <div className="form-group-card-title-wrapper">
              <h2 className="form-group-card-title">CARD DETAILS</h2>
            </div>
            <div className="form-group-row">
              <label className="form-group-label" htmlFor="card-number">
                Card Number *
              </label>
              <input
                className="form-group-input"
                id="card-number"
                type="text"
              />
            </div>
            <div className="form-group-row-double-wrapper">
              <div className="form-group-row-double">
                <label className="form-group-label" htmlFor="expiration">
                  Expiration *
                </label>
                <input
                  className="form-group-input form-group-input-expiration"
                  id="expiration"
                  type="text"
                />
              </div>
              <div className="form-group-row-double">
                <label className="form-group-label" htmlFor="cvv">
                  CVV *
                </label>
                <input
                  className="form-group-input form-group-input-cvv"
                  id="cvv"
                  type="text"
                />
              </div>
            </div>
            <div className="form-group-row">
              <label className="form-group-label" htmlFor="coupon-code">
                Apply Coupon Code *
              </label>
              <input
                className="form-group-input"
                id="coupon-code"
                type="text"
              />
            </div>
          </div>
          <div className="form-group-discount-wrapper">
            <div className="form-group-discount-title-wrapper">
              <h3 className="form-group-discount-title">Discount</h3>
              <h3 className="form-group-discount-title-value">10%</h3>
            </div>
            <div className="form-group-discount-tva-wrapper">
              <h3 className="form-group-discount-tva-title">TVA</h3>
              <h3 className="form-group-discount-tva-value">20%</h3>
            </div>
            <div className="form-group-discount-total-wrapper">
              <h3 className="form-group-discount-total-title">Total</h3>
              <div className="form-group-discount-total-price-wrapper">
                <h3 className="form-group-discount-total-price-new">499€</h3>
                <h3 className="form-group-discount-total-price-old">549€</h3>
              </div>
            </div>
            <div className="form-group-payment-button-wrapper">
              <button className="form-group-payment-button">Pay Now</button>
            </div>
          </div>
        </form>

        <div className="slider-similar-courses">
          <div className="slider-similar-courses-title-wrapper">
            <h1 className="slider-similar-courses-title">Similar Courses</h1>
            <span className="slider-similar-courses-title-line"></span>
          </div>
          <div className="slider-similar-courses-cards">
            {courses.map((item) => (
              <ProductCard item={item} key={item.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default CheckoutPage;
