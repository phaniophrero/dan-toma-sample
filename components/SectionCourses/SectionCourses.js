const SectionCourses = () => {
  return (
    <main className="section-courses">
      <div className="left-col">
        <h1 className="title-tag">Mentoring Trading</h1>
        <h1>Stocks, Crypto, US 30 Index</h1>
        <p className="subhead">
          Invata sa te educi impreuna cu noi asa ca alatura-te celei mai bune
          echipe din Romania si hai sa facem bani impreuna !
        </p>

        <div className="cta-btns">
          <a href="#" className="primary-cta">
            Sign in
          </a>
          <a href="#" className="secondary-cta">
            <span>Sign up </span>
            <svg viewBox="0 0 19 9" fill="none">
              <path
                d="M18.3536 4.85355C18.5488 4.65829 18.5488 4.34171 18.3536 4.14645L15.1716 0.964466C14.9763 0.769204 14.6597 0.769204 14.4645 0.964466C14.2692 1.15973 14.2692 1.47631 14.4645 1.67157L17.2929 4.5L14.4645 7.32843C14.2692 7.52369 14.2692 7.84027 14.4645 8.03553C14.6597 8.2308 14.9763 8.2308 15.1716 8.03553L18.3536 4.85355ZM0 5H18V4H0V5Z"
                fill="black"
              />
            </svg>
          </a>
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
              <a href="#" className="product-title">
                Mentoring Stocks
              </a>
              <p>Buy now</p>
            </div>
            <p className="product-price">499€</p>
          </div>
        </div>
        <div className="card card2">
          <div className="card-details">
            <div>
              <a href="#" className="product-title">
                Mentoring 1:1
              </a>
              <p>Buy now</p>
            </div>
            <p className="product-price">566€</p>
          </div>
        </div>
        <div className="card card3">
          <div className="card-details">
            <div>
              <a href="#" className="product-title">
                Mentoring US 30 Index
              </a>
              <p>Buy now</p>
            </div>
            <p className="product-price">499€</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SectionCourses;
