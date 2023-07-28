import Link from "next/link";
import { useState, useCallback, useRef } from "react";

const slides = [
  {
    id: 1,
    sectionTitle: "Courses",
    sectionSubTitle: "Stocks, Crypto, US 30 Index",
    description:
      "Invata sa te educi impreuna cu noi asa ca alatura-te celei mai bune echipe din Romania si hai sa facem bani impreuna !",
    image1: "/images/1.jpeg",
    image2: "/images/2.jpeg",
    image3: "/images/3.jpeg",
  },
  {
    id: 2,
    sectionTitle: "Discord & Telegram",
    sectionSubTitle: "Stocks, Crypto, US 30 Index",
    description:
      "Invata sa te educi impreuna cu noi asa ca alatura-te celei mai bune echipe din Romania si hai sa facem bani impreuna !",
    image1: "/images/1.jpeg",
    image2: "/images/2.jpeg",
    image3: "/images/3.jpeg",
  },
  {
    id: 3,
    sectionTitle: "Mentoring trading",
    sectionSubTitle: "Stocks, Crypto, US 30 Index",
    description:
      "Invata sa te educi impreuna cu noi asa ca alatura-te celei mai bune echipe din Romania si hai sa facem bani impreuna !",
    image1: "/images/1.jpeg",
    image2: "/images/2.jpeg",
    image3: "/images/3.jpeg",
  },
];

const SectionCourses = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [isActiveSection, setIsActiveSection] = useState(true);

  const sectionCoursesRef = useRef();
  const sectionDiscordRef = useRef();
  const sectionMentoringRef = useRef();

  // function handleScrollToFirstSection() {
  //   sectionCoursesRef.current.scrollIntoView({
  //     behavior: "smooth",
  //     block: "nearest",
  //     inline: "center",
  //   });
  // }
  // function handleScrollToSecondSection() {
  //   sectionCoursesRef.current.scrollIntoView({
  //     behavior: "smooth",
  //     block: "nearest",
  //     inline: "center",
  //   });
  // }
  // function handleScrollToThirdSection() {
  //   sectionCoursesRef.current.scrollIntoView({
  //     behavior: "smooth",
  //     block: "nearest",
  //     inline: "center",
  //   });
  // }

  return (
    <main className="section-courses">
      <header className="section-title-wrapper">
        <h1 className="section-title">Welcome</h1>
      </header>
      <div className="section-nav">
        <ul className="section-nav-list">
          <li className="section-nav-item">Courses</li>
          <li className="section-nav-item">Discord & Telegram</li>
          <li className="section-nav-item">Mentoring</li>
        </ul>
      </div>
      <div className="section-courses-container">
        <div
          className="section-courses-wrapper"
          // style={{ transform: `translate(-${activeIndex * 100}%)` }}
          ref={sectionCoursesRef}
        >
          <div className="left-col">
            <h1 className="title-tag">Mentoring Trading</h1>
            <h1>Stocks, Crypto, US 30 Index</h1>
            <p className="subhead">
              Invata sa te educi impreuna cu noi asa ca alatura-te celei mai
              bune echipe din Romania si hai sa facem bani impreuna !
            </p>

            <div className="cta-btns">
              <Link href="#" className="primary-cta">
                Sign in
              </Link>
              <Link href="#" className="secondary-cta">
                <span>Sign up </span>
                <svg viewBox="0 0 19 9" fill="none">
                  <path
                    d="M18.3536 4.85355C18.5488 4.65829 18.5488 4.34171 18.3536 4.14645L15.1716 0.964466C14.9763 0.769204 14.6597 0.769204 14.4645 0.964466C14.2692 1.15973 14.2692 1.47631 14.4645 1.67157L17.2929 4.5L14.4645 7.32843C14.2692 7.52369 14.2692 7.84027 14.4645 8.03553C14.6597 8.2308 14.9763 8.2308 15.1716 8.03553L18.3536 4.85355ZM0 5H18V4H0V5Z"
                    fill="black"
                  />
                </svg>
              </Link>
            </div>

            {/* <div className="news">
          <p className="employees">50K</p>
          <p className="details">
            We’re proud to announce that we now employ a workflorce of over{" "}
            <strong>50,000</strong>. It’s all possible because of you.
          </p>
        </div> */}
          </div>

          <div className="right-col">
            <div className="card card1">
              <div className="card-details">
                <div>
                  <Link href="#" className="product-title">
                    Mentoring Stocks
                  </Link>
                  <p>Buy now</p>
                </div>
                <p className="product-price">499€</p>
              </div>
            </div>
            <div className="card card2">
              <div className="card-details">
                <div>
                  <Link href="#" className="product-title">
                    Mentoring 1:1
                  </Link>
                  <p>Buy now</p>
                </div>
                <p className="product-price">566€</p>
              </div>
            </div>
            <div className="card card3">
              <div className="card-details">
                <div>
                  <Link href="#" className="product-title">
                    Mentoring US 30 Index
                  </Link>
                  <p>Buy now</p>
                </div>
                <p className="product-price">499€</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SectionCourses;
