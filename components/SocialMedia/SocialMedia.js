import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="section-social-media">
      <div className="social-media facebook">
        <a href="#facebook" className="social-media-text">
          <span className="social-media-icon">
            <FaFacebookF />
          </span>
          Facebook
        </a>
      </div>
      <div className="social-media instagram">
        <a href="#instagram" className="social-media-text">
          <span className="social-media-icon">
            <FaInstagram />
          </span>
          Instagram
        </a>
      </div>
      <div className="social-media tiktok">
        <a href="#tiktok" className="social-media-text">
          <span className="social-media-icon">
            <svg
              height="512"
              viewBox="0 0 32 32"
              width="512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Tiktok">
                <path
                  d="m27.8 7.12a1 1 0 0 0 -.94-.12 3.49 3.49 0 0 1 -4.86-3.28 1 1 0 0 0 -.28-.72 1 1 0 0 0 -.72-.31h-4a1 1 0 0 0 -1 1v17.12a2.5 2.5 0 1 1 -2.5-2.5 1 1 0 0 0 1-1v-4a1 1 0 0 0 -1-1 8.51 8.51 0 0 0 -8.5 8.5 8.41 8.41 0 0 0 1.6 5 1 1 0 0 0 .81.42 1 1 0 0 0 .59-.23 1 1 0 0 0 .23-1.4 6.44 6.44 0 0 1 -1.23-3.79 6.52 6.52 0 0 1 5.5-6.43v2a4.5 4.5 0 1 0 5.5 4.43v-16.12h2.07a5.51 5.51 0 0 0 5.43 4.62 6.3 6.3 0 0 0 .75-.05v1.94a7.12 7.12 0 0 1 -4.74-.83 1 1 0 0 0 -1 0 1 1 0 0 0 -.5.87v9.57a6.51 6.51 0 0 1 -9 6 1 1 0 0 0 -.77 1.84 8.36 8.36 0 0 0 3.28.66 8.52 8.52 0 0 0 8.48-7.84.76.76 0 0 0 0-.16v-8.52a9.13 9.13 0 0 0 5.52.16 1 1 0 0 0 .72-1v-3.95a1 1 0 0 0 -.44-.88z"
                  fill="#edf0ff"
                />
              </g>
            </svg>
          </span>
          TikTok
        </a>
      </div>
      <div className="social-media twitter">
        <a href="#twitter" className="social-media-text">
          <span className="social-media-icon">
            <FaTwitter />
          </span>
          Twittter
        </a>
      </div>
      <div className="social-media youtube">
        <a href="#youtube" className="social-media-text">
          <span className="social-media-icon">
            <FaYoutube />
          </span>
          YouTube
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
