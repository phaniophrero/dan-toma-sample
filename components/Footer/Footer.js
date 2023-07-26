const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-row2">
        <ul className="footer-row2-list">
          <li className="footer-row2-link">
            <a href="#"> GDPR</a>
          </li>
          <span className="footer-row2-link-dot"></span>
          <li className="footer-row2-link">
            <a href="#">TERMENI SI CONDITII</a>
          </li>
          <span className="footer-row2-link-dot"></span>
          <li className="footer-row2-link">
            <a href="#">POLITICA COOKIES</a>
          </li>
        </ul>
      </div>
      <div className="footer-row3">
        <h3 className="footer-row3-year">{year} - Stock Force One</h3>
      </div>
    </footer>
  );
};
export default Footer;
