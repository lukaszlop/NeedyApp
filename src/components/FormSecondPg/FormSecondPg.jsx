import React from "react";
import FormMain from "../Form/FormMain/FormMain";
import FormYellowBar from "../Form/FormYellowBar/FormYellowBar";
import HomeContactForm from "../Home/HomeContactForm/HomeContactForm";

const FormSecondPg = () => {
  return (
    <>
      <FormMain />
      <FormYellowBar text="Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ."/>
      <h2>Form Second Page</h2>
      <HomeContactForm />
    </>
  );
};

export default FormSecondPg;
