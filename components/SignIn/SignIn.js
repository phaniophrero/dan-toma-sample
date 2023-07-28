import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const SignIn = () => {
  return (
    <div className="sign-in-container">
      <div className="sign-in-form-logo-wrapper-top">
        <img
          className="sign-in-form-logo-image"
          src="/images/logo-dan-stock.png"
          alt="logo stock force one"
        />
      </div>
      <div className="sign-in-form-left">
        <div className="sign-in-form-text-middle">
          <div className="sign-in-form-text-image-wrapper-2">
            <img
              className="sign-in-form-text-image-2"
              src="/images/token-img.png"
              alt="token image"
            />
          </div>
          <header className="sign-in-form-header">
            <h1 className="sign-in-form-header-title">Sign in</h1>
            <p className="sign-in-form-header-description">
              Start learning livre spécimen de polices de texte. Il n'a pas fait
              que survivre.
            </p>
          </header>
        </div>
        <form className="sign-in-form" action="">
          <div className="sign-in-form-group sign-in-form-group-email">
            <input
              className="sign-in-form-input"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="sign-in-form-group">
            <input
              className="sign-in-form-input"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="sign-in-form-group-row">
            <label
              id="checkbok"
              htmlFor="checkbox"
              className="sign-in-form-remember"
            >
              <input
                className="sign-in-form-checkbox"
                id="checkbox"
                type="checkbox"
              />
              <h3 className="sign-in-form-remember-text">
                Remember for 30 days
              </h3>
            </label>
            <div className="sign-in-form-forgot">
              <a className="sign-in-form-link-simple" href="#">
                Forgot <span className="sign-in-form-link-blue">password</span>{" "}
                ?
              </a>
            </div>
          </div>
          <div className="sign-in-form-button-wrapper">
            <button className="sign-in-form-button">Sign In</button>
          </div>
          <div className="sign-in-form-bottom">
            <h3 className="sing-in-form-bottom-text">
              Don't have an account ?
            </h3>
            <a className="sign-in-form-link" href="/sign-up">
              Sign up
            </a>
          </div>
        </form>
      </div>
      {/* Right Side */}
      <div className="sign-in-form-right">
        <div className="sign-in-form-right-image-wrapper">
          {/* <img
            className="sign-in-form-right-image"
            src="/images/123.jpeg"
            alt="form right side image"
          /> */}
          {/* <span className="sign-in-form-right-image"></span> */}
        </div>
        <div className="sign-in-form-right-title-top-wrapper">
          <h2 className="sign-in-form-right-title-top">Sign In</h2>
        </div>
        <div className="sign-in-form-right-text-bottom">
          <span className="sign-in-form-quotes">“</span>
          <h3 className="sign-in-form-right-title-text">
            te pour réaliser un livre spécimen de polices de texte. Il n'a pas
            fait que
          </h3>
          <div className="sign-in-form-buttons-prev-next">
            <a href="/sign-in" className="sign-in-form-buttons-prev-link">
              <IoIosArrowDropleft />
            </a>
            <a href="/sign-up" className="sign-in-form-buttons-next-link">
              <IoIosArrowDropright />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
