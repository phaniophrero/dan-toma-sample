import { BsCheckLg } from "react-icons/bs";

const FormSteps = ({ item, index, activeStep }) => {
  return (
    <div className="sign-up-form-step">
      <h3
        className={`sign-up-form-step-number ${
          activeStep >= index + 1 ? "active" : ""
        }`}
      >
        {activeStep > index + 1 ? <BsCheckLg /> : item.step}
      </h3>
    </div>
  );
};
export default FormSteps;
