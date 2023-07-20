const Newsletter = () => {
  return (
    <div className="section-newsletter">
      <div className="section-newsletter-col1">
        <span className="newsletter-image-filter"></span>
        <img
          className="newsletter-img"
          src="/images/trading-img.png"
          alt="newsletter image"
        />
      </div>
      <div className="section-newsletter-col2">
        <div className="newsletter-col2-text-wrapper">
          <h3 className="newsletter-col2-title">Newsletter</h3>
          <p className="newsletter-col2-description">
            Faux texte standard de l&apos;imprimerie depuis les années 1500,
            quand un imprimeur anonyme assembla ensemble
          </p>
        </div>
        <div className="newsletter-form-group">
          <div className="newsletter-input-wrapper">
            <label className="newsletter-label" htmlFor="newsletter">
              Email
            </label>
            <input
              className="newsletter-input"
              type="email"
              id="newsletter"
              placeholder="example@email.com"
            />
          </div>
          <button className="newsletter-btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
