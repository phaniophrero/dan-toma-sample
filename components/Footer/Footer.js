import Link from "next/link";
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
            <Link href="#" className="footer-social-media-link">
              <FaFacebookF />
            </Link>
          </li>
          <li className="footer-social-media-item">
            {/* Instagram */}
            <Link href="#" className="footer-social-media-link">
              <FaInstagram />
            </Link>
          </li>
          <li className="footer-social-media-item">
            {/* TikTok */}
            <Link href="#" className="footer-social-media-link">
              <FaTiktok />
            </Link>
          </li>
          <li className="footer-social-media-item">
            {/* Twitter */}
            <Link href="#" className="footer-social-media-link">
              <FaTwitter />
            </Link>
          </li>
          <li className="footer-social-media-item">
            {/* YouTube */}
            <Link href="#" className="footer-social-media-link">
              <FaYoutube />
            </Link>
          </li>
        </ul>
        <ul className="footer-row2-list">
          <li className="footer-row2-link">
            <Link href="#">Contact Us</Link>
          </li>
          <li className="footer-row2-link">
            <Link href="#">FAQ</Link>
          </li>
          <li className="footer-row2-link">
            <Link href="#">GDPR</Link>
          </li>
          <li className="footer-row2-link">
            <Link href="#">Privacy Policy</Link>
          </li>

          {/* <span className="footer-row2-link-dot"></span> */}
          <li className="footer-row2-link">
            <Link href="#">Terms & Conditions</Link>
          </li>
          {/* <span className="footer-row2-link-dot"></span> */}
          <li className="footer-row2-link">
            <Link href="#">Disclaimer</Link>
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
