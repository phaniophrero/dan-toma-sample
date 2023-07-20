import { BsArrowRight } from "react-icons/bs";

const BooksCollection = () => {
  return (
    <div className="section-books-collection">
      <div className="section-books-tag">
        <h4 className="section-books-tag-text">New Books</h4>
      </div>
      <div className="section-books-collection-cols-wrapper">
        <div className="section-books-collection-col1">
          <img src="./images/books-img.png" alt="books-collection-image" />
        </div>
        <div className="section-books-collection-col2">
          <div className="section-books-collection-title-wrapper">
            <h2 className="section-books-collection-title">
              <span className="color-letter-blue">C</span>ollection{" "}
              <span className="color-letter-blue">B</span>ooks Dan Toma
            </h2>
            <span className="blue-line"></span>
            <p className="section-books-collection-description">
              Tmprimeur anonyme assembla ensemble des morceaux texte pour
              réaliser un livre spécimen de polices de texte.
            </p>
            <div className="section-books-collection-description2">
              <div className="description2-card">
                <h3 className="description2-card-number">50+</h3>
              </div>
              <p className="description2-text">
                Cărți de trading stocks te va ajuta sa-ti dezvolți viziunea
                asupra trading-ului tau.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-books-link-wrapper">
        <a href="#" className="section-books-link">
          See Collection{" "}
          <span className="section-books-icon">
            {" "}
            {/* <BsArrowRight /> */}
            <svg viewBox="0 0 19 9" fill="none">
              <path
                d="M18.3536 4.85355C18.5488 4.65829 18.5488 4.34171 18.3536 4.14645L15.1716 0.964466C14.9763 0.769204 14.6597 0.769204 14.4645 0.964466C14.2692 1.15973 14.2692 1.47631 14.4645 1.67157L17.2929 4.5L14.4645 7.32843C14.2692 7.52369 14.2692 7.84027 14.4645 8.03553C14.6597 8.2308 14.9763 8.2308 15.1716 8.03553L18.3536 4.85355ZM0 5H18V4H0V5Z"
                fill="black"
              />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
};

export default BooksCollection;
