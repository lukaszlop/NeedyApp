import React, { useState } from "react";
import Step1 from "../Step1/Step1";
import Step2 from "../Step2/Step2";
import Step3 from "../Step3/Step3";
import Step4 from "../Step4/Step4";
import Step5 from "../Step5/Step5";
import Step6 from "../Step6/Step6";
import { connect } from "react-redux";


const FormWrapper = ({form:{activeStep}}) => {
  return (
    <>
      <section className="form__wrapper">
        <form className="form__wrapper__box">
          {activeStep > 3 ? null : (<h3>Krok {activeStep + 1}/4</h3>)}
          
          {activeStep === 0 && <Step1 />}
          {activeStep === 1 && <Step2 />}
          {activeStep === 2 && <Step3 />}
          {activeStep === 3 && <Step4 />}
          {activeStep === 4 && <Step5 />}
          {activeStep === 5 && <Step6 />}
        </form>
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  form: state.form,
});

export default connect(mapStateToProps)(FormWrapper);
