import { useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import { Loading } from "../components/Loading/Loading";

const courses = [
  {
    id: 1,
    title: "Course Stocks",
    oldPrice: "549€",
    price: "549€",
    button: "Buy now",
    image: "/images/2.jpeg",
    new: true,
  },
  {
    id: 2,
    title: "Course Crypto",
    oldPrice: "749€",
    price: "595€",
    button: "Buy now",
    image: "/images/2.jpeg",
    new: true,
  },
  {
    id: 3,
    title: "Course US 30 Index",
    oldPrice: "549€",
    price: "499€",
    button: "Buy now",
    image: "/images/2.jpeg",
    new: true,
  },
];

const CoursesPage = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  return loading ? (
    <Loading />
  ) : (
    // return (
    <>
      <div className="overlay"></div>

      <div className="courses-page-container">
        <div className="courses-page-wrapper">
          {courses.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};
export default CoursesPage;
