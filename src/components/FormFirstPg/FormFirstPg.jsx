import React from "react";
import FormMain from "../Form/FormMain/FormMain";
import FormYellowBar from "../Form/FormYellowBar/FormYellowBar";
import HomeContactForm from "../Home/HomeContactForm/HomeContactForm";

const FormFirstPg = () => {
  return (
    <>
      <FormMain />
      <FormYellowBar />
      <h2>Form First Page</h2>
      <HomeContactForm />
    </>
  );
};

export default FormFirstPg;
