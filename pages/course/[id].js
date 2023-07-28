import { useState } from "react";
import { useRouter } from "next/router";
import ProductCard from "../../components/ProductCard/ProductCard";
// import courses from "../../data/coursesData";
import { Loading } from "../../components/Loading/Loading";

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

const CoursePage = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  console.log("route course page: ", router);

  console.log(
    "course/id: ",
    courses.filter((item) => item.id == router.query.id)
  );

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
      <div className="section-course-page">
        {courses
          .filter((item) => item.id == router.query.id)
          .map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
      </div>
    </>
  );
};

export default CoursePage;
