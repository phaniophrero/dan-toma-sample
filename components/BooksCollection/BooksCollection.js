import { BsArrowRight } from "react-icons/bs";

const BooksCollection = () => {
  return (
    <div className="section-books-collection">
      <div className="section-books-tag">
        <h4 className="section-books-tag-text">New Books</h4>
      </div>
      <div className="section-books-collection-col1">
        <img src="" alt="" />
      </div>
      <div className="section-books-collection-col2">
        <div>
          <h2 className="section-books-collection-title">
            <span className="color-letter-blue">C</span>ollection{" "}
            <span className="color-letter-blue">B</span>ooks Dan Toma
          </h2>
          <span className="blue-line"></span>
          <p className="section-books-collection-description">
            Tmprimeur anonyme assembla ensemble des morceaux texte pour réaliser
            un livre spécimen de polices de texte.
          </p>
          <div className="section-books-collection-description2">
            <div className="description2-card">
              <h3 className="description2-card-number">50+</h3>
            </div>
            <p className="description2-text">
              Cărți de trading stocks te va ajuta sa-ti dezvolți viziunea asupra
              trading-ului tau.
            </p>
          </div>
        </div>
      </div>
      <div>
        <a href="#">
          See Collection{" "}
          <span className="section-books-icon">
            {" "}
            <BsArrowRight />{" "}
          </span>
        </a>
      </div>
    </div>
  );
};

export default BooksCollection;
