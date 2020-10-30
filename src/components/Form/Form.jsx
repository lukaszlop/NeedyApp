import React, { useEffect } from "react";
import FormMain from "./FormMain/FormMain";
import FormYellowBar from "./FormYellowBar/FormYellowBar";
import HomeContactForm from "../Home/HomeContactForm/HomeContactForm";
import FormWrapper from "../Form/FormWrapper/FormWrapper";
import { connect } from "react-redux";
import { clearIsRedirectFromHomeView } from "../../store/appConfig/appConfig.actions";
import { useFirestoreConnect } from "react-redux-firebase";

const Form = ({
  form: { activeStep },
  appConfig,
  clearIsRedirectFromHomeView,
}) => {

  useFirestoreConnect([{ collection: "applications" }]);

  useEffect(() => {
    if (appConfig.isRedirectFromHomeView) {
      clearIsRedirectFromHomeView();
    }
  }, [appConfig]);

  const scrollIntoView = () => {
    setTimeout(() => {
      const element = document.getElementById("form-section-start");
      if (element) {
        element.scrollIntoView();
      }
    }, 500);
  };
  return (
    <>
      <FormMain />
      {activeStep < 4 && <FormYellowBar id="form-section-start" />}
      <FormWrapper />
      <HomeContactForm />
      {appConfig.isRedirectFromHomeView && scrollIntoView()}
    </>
  );
};

const mapStateToProps = (state) => ({
  form: state.form,
  appConfig: state.appConfig,
});

const mapDispatchToProps = (dispatch) => ({
  clearIsRedirectFromHomeView: () => dispatch(clearIsRedirectFromHomeView()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

