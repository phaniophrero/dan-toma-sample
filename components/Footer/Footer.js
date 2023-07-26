import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-row2">
        <ul className="footer-social-media-list">
          <li className="footer-social-media-item">
            {/* Facebook */}
            <a href="#" className="footer-social-media-link">
              <FaFacebookF />
            </a>
          </li>
          <li className="footer-social-media-item">
            {/* Instagram */}
            <a href="#" className="footer-social-media-link">
              <FaInstagram />
            </a>
          </li>
          <li className="footer-social-media-item">
            {/* TikTok */}
            <a href="#" className="footer-social-media-link">
              <FaTiktok />
            </a>
          </li>
          <li className="footer-social-media-item">
            {/* Twitter */}
            <a href="#" className="footer-social-media-link">
              <FaTwitter />
            </a>
          </li>
          <li className="footer-social-media-item">
            {/* YouTube */}
            <a href="#" className="footer-social-media-link">
              <FaYoutube />
            </a>
          </li>
        </ul>
        <ul className="footer-row2-list">
          <li className="footer-row2-link">
            <a href="#">Contact Us</a>
          </li>
          <li className="footer-row2-link">
            <a href="#">FAQ</a>
          </li>
          <li className="footer-row2-link">
            <a href="#">GDPR</a>
          </li>
          <li className="footer-row2-link">
            <a href="#">Privacy Policy</a>
          </li>

          {/* <span className="footer-row2-link-dot"></span> */}
          <li className="footer-row2-link">
            <a href="#">Terms & Conditions</a>
          </li>
          {/* <span className="footer-row2-link-dot"></span> */}
          <li className="footer-row2-link">
            <a href="#">Disclaimer</a>
          </li>
        </ul>
      </div>
      <hr className="footer-horizonta-line" />
      <div className="footer-row3">
        <h3 className="footer-row3-year">{year} - Stock Force One</h3>
      </div>
    </footer>
  );
};
export default Footer;
