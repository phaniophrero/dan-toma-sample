import { useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const formSteps = [
  {
    step: 1,
    label: "User details",
  },
  {
    step: 2,
    label: "Account details",
  },
];

const SignUp = () => {
  const [step, setStep] = useState();

  return (
    <div className="sign-up-container">
      <div className="sign-up-form-left">
        <header className="sign-up-form-header">
          <h1 className="sign-up-form-title">Create an account</h1>
          <h2 className="sign-up-form-subtitle">To watch my courses</h2>
        </header>
        <div className="sign-up-form-steps-container">
          <div className="sign-up-form-steps-wrapper">
            <div className="sign-up-form-step">
              <h3 className="sign-up-form-step-number active">1</h3>
            </div>
            <span className="sign-up-form-step-line">
              <span className="sign-up-form-step-line-inner"></span>
            </span>
            <div className="sign-up-form-step">
              <h3 className="sign-up-form-step-number">2</h3>
            </div>
          </div>
          <div className="sign-up-form-step-title-wrapper">
            <h4 className="sign-up-form-step-title active">User details</h4>

            <h4 className="sign-up-form-step-title">Account details</h4>
          </div>
        </div>
        <form className="sign-up-form" action="">
          <div className="sign-up-form-row">
            <input
              className="sign-up-form-input"
              type="text"
              placeholder="First Name *"
            />
          </div>
          <div className="sign-up-form-row">
            <input
              className="sign-up-form-input"
              type="text"
              placeholder="Last Name *"
            />
          </div>
          <div className="sign-up-form-row">
            <input
              className="sign-up-form-input"
              type="text"
              placeholder="Address 1 *"
            />
          </div>
          <div className="sign-up-form-row">
            <input
              className="sign-up-form-input"
              type="text"
              placeholder="Address 2"
            />
          </div>
          <div className="sign-up-form-row">
            <input
              className="sign-up-form-input"
              type="text"
              placeholder="Country *"
            />
          </div>
          <div className="sign-up-form-row">
            <input
              className="sign-up-form-input"
              type="text"
              placeholder="City *"
            />
          </div>
          <div className="sign-up-form-row">
            <input
              className="sign-up-form-input"
              type="text"
              placeholder="Zip Code"
            />
          </div>
          <div className="sign-up-form-row">
            <input
              className="sign-up-form-input"
              type="text"
              placeholder="Phone number *"
            />
          </div>
        </form>
        <div className="sign-up-form-button-wrapper">
          <button className="sign-up-form-button">
            <svg
              id="Group_156"
              data-name="Group 156"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="8.04"
              viewBox="0 0 16 8.04"
            >
              <path
                id="Path_15"
                data-name="Path 15"
                d="M15.894,131.133h0L12.258,127.5a.364.364,0,1,0-.513.513l3.014,3.018H.364a.364.364,0,0,0,0,.727h14.4l-3.014,3.014a.364.364,0,1,0,.513.513l3.636-3.636A.364.364,0,0,0,15.894,131.133Z"
                transform="translate(0 -127.369)"
                fill="#9396a2"
              />
            </svg>
          </button>
        </div>
        <div className="sign-up-form-bottom-row">
          <h2 className="sign-up-form-bottom-text">
            Already have an account ?
          </h2>
          <a className="sign-up-form-bottom-link" href="/sing-in">
            Sign In
          </a>
        </div>
      </div>
      <div className="sign-in-form-right">
        <div className="sign-in-form-right-image-wrapper"></div>
        <div className="sign-in-form-right-title-top-wrapper">
          <h2 className="sign-in-form-right-title-top">Sign Up</h2>
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
export default SignUp;
