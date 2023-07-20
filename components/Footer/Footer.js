const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-row1">
        <div className="footer-col">
          <h3 className="footer-col-title">
            <span className="footer-col-title-first-letter-color">C</span>ursuri
          </h3>
          <ul className="footer-col-list">
            <li className="footer-col-link">Stocks</li>
            <li className="footer-col-link">Crypto</li>
            <li className="footer-col-link">US 30 Index</li>
          </ul>
        </div>
        <div className="footer-col">
          <h3 className="footer-col-title">
            <span className="footer-col-title-first-letter-color">D</span>iscord
          </h3>
          <ul className="footer-col-list">
            <li className="footer-col-link">Discord Stocks</li>
            <li className="footer-col-link">Discord Crypto</li>
            <li className="footer-col-link">Discord US 30 Index</li>
          </ul>
        </div>
        <div className="footer-col">
          <h3 className="footer-col-title">
            <span className="footer-col-title-first-letter-color">M</span>
            entoring
          </h3>
          <ul className="footer-col-list">
            <li className="footer-col-link">Mentoring Stocks</li>
            <li className="footer-col-link">Mentoring Crypto</li>
            <li className="footer-col-link">Mentoring US 30 Index</li>
          </ul>
        </div>
        <div className="footer-col">
          <h3 className="footer-col-title">
            <span className="footer-col-title-first-letter-color">B</span>
            iblioteca
          </h3>
          <ul className="footer-col-list">
            <li className="footer-col-link">Day Trade</li>
            <li className="footer-col-link">Stocks</li>
            <li className="footer-col-link">Futures</li>
            <li className="footer-col-link">Options</li>
          </ul>
        </div>
        <div className="footer-col">
          <h3 className="footer-col-title">
            <span className="footer-col-title-first-letter-color">N</span>
            ewsletter
          </h3>
          <div className="footer-col-list">
            <p className="footer-col-newsletter-text">
              Fii mereu la curent cu cele mai importante anunturi, oferte.
            </p>
          </div>
          <div className="footer-col-newsletter-button-wrapper">
            <button className="footer-col-newsletter-button">
              ABONEAZA-TE
            </button>
          </div>
        </div>
      </div>
      <div className="footer-row2">
        <ul className="footer-row2-list">
          <li className="footer-row2-link">GDPR</li>
          <span className="footer-row2-link-dot"></span>
          <li className="footer-row2-link">TERMENI SI CONDITII</li>
          <span className="footer-row2-link-dot"></span>
          <li className="footer-row2-link">POLITICA COOKIES</li>
        </ul>
      </div>
      <div className="footer-row3">
        <h3 className="footer-row3-year">2023</h3>
      </div>
    </footer>
  );
};
export default Footer;
